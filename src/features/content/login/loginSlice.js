import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, registration, logout, getUsers } from './loginApi';
import { API_URL } from "../../../http/index"
import axios from "axios"

const initialState = {
    isAuth: null,
    isLoading: false,
    users: [],
};

export const loginAsync = createAsyncThunk(
    'login/loginAsync',
    async (action, func) => {
        const { email, password, history} = action
        const { dispatch } = func

        try {
            const response = await login(email, password)
            localStorage.setItem("token", response.data.accessToken)
            if (response.status === 200) {
                dispatch(toggleAuth(true))
                history.push("/books")
            }
            return response.data

        } catch (e) {
            console.log(e.response.data.message)
        } finally {
            dispatch(toggleLoading(false))
        }
    }
);

export const registrationAsync = createAsyncThunk(
    'login/registration',
    async (payload) => {
        const { email, password } = payload
        try {
            const response = await registration(email, password)
            localStorage.setItem("token", response.data.accessToken)
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
);

export const logoutAsync = createAsyncThunk(
    'login/logout',
    async (action, func) => {
        const { history } = action
        const { dispatch } = func
        try {
            dispatch(toggleLoading(true))
            await logout()
            localStorage.removeItem("token")
            dispatch(toggleAuth(false))
            history.push("/")
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            dispatch(toggleLoading(false))
        }
    }
);

export const checkauthAsync = createAsyncThunk(
    'login/checkAuth',
    async (action, func) => {
        const { dispatch } = func
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem("token", response.data.accessToken)
            dispatch(toggleAuth(true))
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
);

export const getusersAsync = createAsyncThunk(
    'login/getUSers',
    async (action) => {
        try {
            const response = await getUsers()
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,

    reducers: {

        toggleAuth: (state, action) => {
            state.isAuth = action.payload
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
});

export const { toggleAuth, toggleLoading } = loginSlice.actions;

export const selectAuth = (state) => state.login.isAuth;
export const selectLoading = (state) => state.login.isLoading;

export default loginSlice.reducer;