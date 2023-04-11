import { createSlice } from "@reduxjs/toolkit"

const reducercheck = createSlice({
    name: 'hello',
    initialState: {
        status: false
    },
    reducers: {
        save: (state, action) => {
            state.status = action.payload
        }
    }
})
export const { save } = reducercheck.actions
export default reducercheck.reducer