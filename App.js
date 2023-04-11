
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { Routes } from "./src/Navigations/Routes";
import { statuscheck } from "./src/Redux/actions/actionlogin";
import store from "./src/Redux/store";
import { axiosget, axiospost, postApi } from "./src/utils/utils";
import { Post_url, get_data } from "./src/config/url";
import { useEffect } from "react";
import Practise from "./src/Screens/practise";
export default function App() {
  // useEffect(() => {
  //   let data = {
  //     username: 'honey',
  //     password: '12345678',
  //     device_type: 'android',
  //     device_token: '123456'
  //   }
  //   postApi(Post_url, {}, data).then((res) => console.log(res))
  // })


  //axiosget(get_data, 'get').then((res) => console.log(res))
  useEffect(() => {
    let data = {
      username: 'honey',
      password: '12345678',
      device_type: 'android',
      device_token: '123456'
    }
    axiospost(Post_url, 'post', {}, data).then((res) => console.log(res)).catch((err) => console.log(err))
  })


  async function datasave() {
    const val = await AsyncStorage.getItem(('userLoginData'))
    console.log(val, 'in app.js')
    if (val) {
      statuscheck(true)
    }
  }
  datasave()
  return (
    <Provider store={store}>
      <Routes />
    </Provider>


  )
}
