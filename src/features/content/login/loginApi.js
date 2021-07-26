import api from "../../../http/index"
import {API_URL} from "../../../http/index"
import axios from "axios"

export function login(email, password) {
    return api.post("/login", { email, password })
}

export function registration(email, password) {
    return api.post("/registration", { email, password })
}

export function logout() {
    return api.post("/logout")
}

export function checkAuth(){
    axios.get(`${API_URL}/refresh`, {withCredentials: true,})
}

export function getUsers(){
    return api.get("/users")
}