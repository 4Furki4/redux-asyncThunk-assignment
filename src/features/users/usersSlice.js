import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL)
    return [...response.data]
})
const initialState = {
    users: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reducer(state, action) {
            state.users.push(action.payload)
        },
        addUser(state, action) {
            state.users.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
        }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users = [...action.payload]
            }),
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})
export const selectAllUsers = state => state.users.users
export const getUsersStatus = state => state.users.status
export const getUsersError = state => state.users.error
export const { setUsers, addUser, removeUser, updateUser } = usersSlice.actions

export default usersSlice.reducer