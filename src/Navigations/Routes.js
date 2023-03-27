import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Authstack } from "./Authstack";
import { Mainstack } from "./Mainstack";

export const Routes=()=>{
    const [status,setStatus]=useState(false)

    async function LoginChecker(){
    let vval= await AsyncStorage.getItem('userLoginData');
     let newVal= JSON.parse(vval)
    console.log(newVal)
     if(newVal){
        console.log('Hello ',newVal)
         setStatus(true)
     }
   }
   LoginChecker()
    const Stack=createNativeStackNavigator()
    return(
     <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {status?Mainstack():Authstack()}
        </Stack.Navigator>
     </NavigationContainer>
    )
}