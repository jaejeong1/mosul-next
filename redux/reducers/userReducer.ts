import { createSlice } from "@reduxjs/toolkit"

export interface UserType {
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
    token: string;
}

export interface UserState {
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload) {
            state.loading = true;
        },
        joinSuccess(state: UserState, { payload }) {
            state.data = [...state.data, payload]
            state.loading = false;

        },
        joinFailure(state: UserState, { payload }) {
            state.data = payload;
            state.loading = false;
        },
        loginRequest(state: UserState, payload) {
            state.loading = true;
        },
        loginSuccess(state: UserState, { payload }) {
            state.data = [...state.data, payload]
            localStorage.setItem('loginUser', JSON.stringify(payload))
            state.loading = false;
        },
        loginFailure(state: UserState, { payload }) {
            console.log('loginFailure')
            localStorage.clear()
            state.data = payload;
            state.loading = false;
            alert('Login에 실패하였습니다.')
        },
        logoutRequest(state: UserState, payload) {
            state.loading = false;
        },
        logoutSuccess(state: UserState, payload) {
            state.loading = false;
            localStorage.clear()
            window.location.href = '/'
        },
        delUserRequest(state: UserState, { payload }) {
            state.loading = false;
        },
        delUserSuccess(state: UserState, { payload }) {
            state.data = [...state.data, payload]
            state.loading = false;
            if (!payload.acknowledged) return
            localStorage.clear()
            window.location.href = '/'
            alert('탈퇴가 성공적으로 처리되었습니다.')
        },
        delUserFailure(state: UserState, { payload }) {
            state.data = payload;
            state.loading = false;
        },
        modifyUserRequest(state: UserState, { payload }) {
            console.log('수정 request')
            state.data = payload;
            state.loading = false;
        },
        modifyUserSuccess(state: UserState, { payload }) {
            // state.data = [...state.data]
            state.loading = false;
        },
        modifyFailure(state: UserState, { payload }) {
            state.data = [...state.data, payload]
            state.loading = false;
        },
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer