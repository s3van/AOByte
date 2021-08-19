const UserModel = require("../models/userModel")
const RoleModel = require("../models/roleModel")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const mailService = require("./mailService")
const tokenService = require("./tokenService")
const UserDto = require("../dtos/userDto")
const ApiError = require("../exceptions/apiError")


class UserService {

    async registration(email, password) {

        const candidate = await UserModel.findOne({ email })
        if (candidate) throw ApiError.AlreadyExists(`А user with such an email already exists`)
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const userRole = await RoleModel.findOne({ value: "USER" })
        const user = await UserModel.create({ email, password: hashPassword, roles: [userRole.value], activationLink })
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({ activationLink })
        if (!user) throw ApiError.BadRequest(`Uncorrect activation link`)
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        const user = await UserModel.findOne({ email })
        if (!user) throw ApiError.BadRequest(`User with this email was not found`)
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) throw ApiError.BadRequest(`Wrong password`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) throw ApiError.UnAuthorizedError()
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) throw ApiError.UnAuthorizedError()
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async  changeUserPassword(email, password){
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.findOne({email})
        if(user){
            const updatedUser = await UserModel.updateOne({ email },
                {
                    $set: {
                        password: hashPassword
                    },
                })
            const userDto = new UserDto(user)
            return {
                user: userDto
            }
        }    
    }


    async  generateLink(email){
        const user = await UserModel.findOne({ email })
        if (!user) throw ApiError.BadRequest(`User with this email was not found`)
        await mailService.sendChangePassMail(email, `${process.env.CLIENT_URL}/changepassword${user.activationLink}`)
    }

    async getUsers() {
        const users = await UserModel.find()
        return users
    }
}

module.exports = new UserService()