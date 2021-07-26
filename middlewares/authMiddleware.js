const ApiError = require("../exceptions/apiError")
const tokenService = require("../service/tokenService")

module.exports = function (req, res, next) {
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
        req.user = userData
        next()
    } catch (e) {
        return next(ApiError.UnAuthorizedError())
    }
}