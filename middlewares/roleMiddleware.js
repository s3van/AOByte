const ApiError = require("../exceptions/apiError")
const tokenService = require("../service/tokenService")

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const authorizationHeader = req.headers.authorization
            if (!authorizationHeader) {
                return next(ApiError.UnAuthorizedError())
            }
            const accessToken = authorizationHeader.split(" ")[1]
            if (!accessToken) {
                return next(ApiError.UnAuthorizedError())
            }
            const userData = tokenService.validateAccessToken(accessToken)
            if (!userData) {
                next(ApiError.UnAuthorizedError())
            }
            const { roles: userRoles } = tokenService.validateAccessToken(accessToken)
            let hasRoles = false
            userRoles.forEach((role) => {
                if (roles.includes(role))
                    hasRoles = true
            })
            if (!hasRoles) {
                return res.status(403).json({ message: "You don't have access to this function" })
            }
            next()
        } catch (err) {
            return next(ApiError.UnAuthorizedError())
        }
    }
}