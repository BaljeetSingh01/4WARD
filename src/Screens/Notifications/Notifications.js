import { View, Image, Text, FlatList } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { styles } from "./Notificationsstyle";

export const Notifications = () => {
  const user = [
    {
      img: require("../../assets/images/userlogo.png"),
      txt1: "Russell Gordan ",
    },
    {
      img: require("../../assets/images/userlogo.png"),
      txt1: "Sara ",
    },
    {
      img: require("../../assets/images/userlogo.png"),
      txt1: "Raphy ",
    },
    {
      img: require("../../assets/images/userlogo.png"),
      txt1: "Skyer Zone ",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.notification}>Notifications</Text>
        <FlatList
          data={user}
          renderItem={({ item }) => (
            <View style={styles.flatview}>
              <Image source={item.img} style={styles.img} />
              <View style={styles.txtview}>
                <Text style={styles.txt1}>
                  {item.txt1}
                  <Text style={styles.txt2}>added a new post</Text>
                </Text>
                <Text style={styles.txt3}>20 min ago</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
