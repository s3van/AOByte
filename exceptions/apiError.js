module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors

    }

    static UnAuthorizedError(errors) {
        return new ApiError(401, "User is not logged in")
    }

    static BadRequest(message, errors) {
        return new ApiError(400, message, errors)
    }

    static AlreadyExists (message, errors) {
        return new ApiError(409, message, errors)
    }

    static NotFound (message,errors){
        return new ApiError(404, message, errors)
    }
}

