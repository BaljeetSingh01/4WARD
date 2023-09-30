import { createSlice } from "@reduxjs/toolkit"

const settings = createSlice({
    name: 'settings',
    initialState: {
        lang: 'Eng',
        isDark: false

    },
    reducers: {
        saveLang: (state, action) => {
            state.lang = action.payload
        },
        saveTheme: (state, action) => {
            state.isDark = action.payload
        }
    }
})
export const { saveTheme, saveLang } = settings.actions
export default settings.reducer