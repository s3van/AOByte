import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, registration, logout, getUsers, changePassLink, changePassword } from './loginApi';
import { API_URL } from "../../../http/index"
import axios from "axios"

const initialState = {
    isAuth: null,
    users: [],
    serverLoginError: null,
    serverRegistrationError: null,
    serverChangePassError: null,
    serverChangePassAccess: null,
    accessModal: null,
    changePassModal: false,
    user: null,
    isLoading: false,
};

export const loginAsync = createAsyncThunk(
    'login/loginAsync',
    async (action, func) => {
        const { dispatch } = func
        const { email, password, history } = action
        try {
            const response = await login(email, password)
            if (response.status === 200) {
                localStorage.setItem("token", response.data.accessToken)
                dispatch(toggleAuth(localStorage.getItem("token")))
                dispatch(setUser(response.data.user))
                history.push("/books")
            }
        } catch (e) {
            dispatch(setServerLoginError(e.response.data))
        }
    }
);

export const registrationAsync = createAsyncThunk(
    'login/registration',
    async (action, func) => {
        const { email, password } = action
        const { dispatch } = func
        try {
            const response = await registration(email, password)
            localStorage.setItem("token", response.data.accessToken)
            if (response.status === 200) {
                dispatch(setServerLoginError(null))
                dispatch(toggleAccessModal(response))
            }
        } catch (e) {
            dispatch(setServerRegistrationError(e.response.data))

        }
    }
);

export const logoutAsync = createAsyncThunk(
    'login/logout',
    async (action, func) => {
        const { history } = action
        const { dispatch } = func
        try {
            const response = await logout()
            if (response.status === 200) {
                localStorage.removeItem("token")
                dispatch(toggleAuth(localStorage.getItem("token")))
                history.push("/login")
            }
        } catch (e) {
            dispatch(setServerLoginError(e.response.data))
        }
    }
);

export const changePassLinkAsync = createAsyncThunk(
    'login/changePassLink',
    async (action, func) => {
        const { dispatch } = func
        const { email } = action
        try {
            dispatch(toggleLoading(true))
            const response = await changePassLink(email)
            if (response.status === 200) {
                dispatch(setChangePassAccess(response.data))
            }
        } catch (e) {
            dispatch(setChangePassError(e.response.data.message))
        } finally {
            dispatch(toggleLoading(false))
        }
    }
);

export const changePasswordAsync = createAsyncThunk(
    'login/changePassword',
    async (action, func) => {
        const { dispatch } = func
        const { email, password } = action
        try {
            dispatch(toggleLoading(true))
            const response = await changePassword(email, password)
            if (response.status === 200) {
                console.log(response.data)
            }
        } catch (e) {
            dispatch(setChangePassError(e.response.data.message))
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
            dispatch(toggleLoading(true))
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            if (response.status === 200) {
                dispatch(setUser(response.data.user))
                localStorage.setItem("token", response.data.accessToken)
                dispatch(toggleAuth(response.data.accessToken))
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(toggleLoading(false))
        }
    }
);


export const getUsersAsync = createAsyncThunk(
    'login/getUSers',
    async (action, func) => {
        const { dispatch } = func
        try {
            const response = await getUsers()
            if (response.data) {
                dispatch(setUsers(response.data))
            }
        } catch (e) {
            console.log(e)
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
        toggleAccessModal: (state, action) => {
            state.accessModal = action.payload
        },
        toggleChangePassModal: (state) => {
            state.changePassModal = !state.changePassModal
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setServerLoginError: (state, action) => {
            state.serverLoginError = action.payload
        },
        setServerRegistrationError: (state, action) => {
            state.serverRegistrationError = action.payload
        },
        setChangePassError: (state, action) => {
            state.serverChangePassError = action.payload
        },
        setChangePassAccess: (state, action) => {
            state.serverChangePassAccess = action.payload
        },
    },
});

export const {
    toggleAuth,
    toggleAccessModal,
    toggleChangePassModal,
    toggleLoading,
    setServerLoginError,
    setServerRegistrationError,
    setChangePassError,
    setChangePassAccess,
    setUsers,
    setUser,
} = loginSlice.actions;

export const selectAuth = (state) => state.login.isAuth;
export const selectLoading = (state) => state.login.isLoading;
export const selectServerLoginError = (state) => state.login.serverLoginError
export const selectServerRegistrationError = (state) => state.login.serverRegistrationError
export const selectAccessModal = (state) => state.login.accessModal
export const selectChangePassModal = (state) => state.login.changePassModal
export const selectChangePassError = (state) => state.login.serverChangePassError
export const selectChangePassAccess = (state) => state.login.serverChangePassAccess
export const selectUsers = (state) => state.login.users
export const selectUser = (state) => state.login.user

export default loginSlice.reducer;