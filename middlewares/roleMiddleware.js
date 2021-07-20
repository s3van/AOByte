const jwt = require("jsonwebtoken")
const { secret } = require("../config")

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(" ")[1]
            if (!token) {
                return res.status(403).json({ message: "user is not logged in" })
            }
            const {roles: userRoles} = jwt.verify(token, secret)
            let hasRoles = false
            userRoles.forEach((role) => {
                if(roles.includes(role))
                hasRoles = true
            })
            if(!hasRoles) {
                return res.status(403).json({ message: "you do not have access to this function" })
            }
            next()
        } catch (err) {
            return res.status(403).json({ message: "user is not logged in" })
        }
    }
}