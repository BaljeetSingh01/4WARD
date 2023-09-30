import { configureStore } from "@reduxjs/toolkit"
import reducercheck from "./reducers/reducercheck"
import settings from "./reducers/settings"

export default store = configureStore({
    reducer: { reducercheck, settings }

})