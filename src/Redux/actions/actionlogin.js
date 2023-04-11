import { save } from "../reducers/reducercheck"
import store from "../store"

const dispatch = store.dispatch
export const statuscheck = (data) => {
    dispatch(save(data))
}