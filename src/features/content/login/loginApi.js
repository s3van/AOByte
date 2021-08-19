import api from "../../../http/index"

export function login(email, password) {
    return api.post("/login", { email, password })
}

export function registration(email, password) {
    return api.post("/users", { email, password })
}

export function logout() {
    return api.post("/logout")
}

export function changePassLink(email) {
    return api.post("/changepasslink", {email})
}

export function changePassword(email, password) {
    return api.patch("/changepassword", {email, password})
}

export function getUsers() {
    return api.get("/users")
}