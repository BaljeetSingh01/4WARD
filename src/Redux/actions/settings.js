import { save } from "../reducers/reducercheck"
import { saveLang, saveTheme } from "../reducers/settings"
import store from "../store"

const dispatch = store.dispatch
export const changeLang = (data) => {
    dispatch(saveLang(data))
}
export const changeTheme = (data) => {
    dispatch(saveTheme(data))
}