import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../Screens/Home/Home";
import { Notifications } from "../Screens/Notifications/Notifications";
import { Profile } from "../Screens/Profile/Profile";
import { Image } from "react-native";
import { Search } from "../Screens/Search/Search";
import { Selectlocation } from "../Screens/Selectlocation/Selectlocation";
import { Upload } from "../Screens/Upload/Upload";
import imagePath from "../Constants/imagePath";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
const Tab = createBottomTabNavigator();
export default function Bottomtabs() {
  return (
   
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: moderateScale(0),
          height: 60,
          backgroundColor: "rgba(76,76,76,1)",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          position: "absolute",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.home}
                style={{
                  tintColor: focused
                    ? "rgba(244,55,56,1)"
                    : "rgba(255,255,255,1)",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.search}
                style={{
                  tintColor: focused
                    ? "rgba(244,55,56,1)"
                    : "rgba(255,255,255,1)",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="upload"
        component={Upload}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.upload}
                style={{
                  tintColor: focused
                    ? "rgba(244,55,56,1)"
                    : "rgba(255,255,255,1)",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.notifications}
                style={{
                  tintColor: focused
                    ? "rgba(244,55,56,1)"
                    : "rgba(255,255,255,1)",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.profile}
                style={{
                  tintColor: focused
                    ? "rgba(244,55,56,1)"
                    : "rgba(255,255,255,1)",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
    
  );
}
