import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Authstack } from "./Authstack";
import { Mainstack } from "./Mainstack";
import NavigationStrings from "../Constants/navigationStrings";

export const Routes = () => {
    //       const [status,setStatus]=useState(false)
    //     async function LoginChecker(){
    //     let vval= await AsyncStorage.getItem('userLoginData');
    //      let newVal= JSON.parse(vval)

    //      if(newVal){
    //          setStatus(true)
    //          console.log('Hello ',newVal)
    //      }
    //    }
    //    LoginChecker()
    const thestatus = useSelector(state => state.status)
    console.log('in routes', thestatus)
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                {thestatus ? Mainstack() : Authstack()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}