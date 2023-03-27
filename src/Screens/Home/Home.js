import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import imagePath from "../../Constants/imagePath";
import { FlatList } from "react-native";
import { styles } from "./Homestyle";
import Strings from "../../Constants/Strings";
import NavigationStrings from "../../Constants/NavigationStrings";
export const Home = ({ navigation }) => {
  carddata = [
    {
      Id: "1",
      personimg: imagePath.googlelogo,
      personName: "Russell Gordon",
      personaddress: "Sector 28D,Chandigarh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "1 hr ago",
      bannerimg: imagePath.homebanner1,
    },
    {
      Id: "2",
      personimg: imagePath.applelogo,
      personName: "Lelia Walker",
      personaddress: "Sector 28D,Chandigarh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "1 hr ago",
      bannerimg: imagePath.homebanner2,
    },
    {
      Id: "3",
      personimg: imagePath.ic_fb,
      personName: "Fannie Kim",
      personaddress: "Sector 28D,Chandigarh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "1 hr ago",
      bannerimg: imagePath.homebanner3,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.mainview}>
        <View style={styles.headerview}>
          <Image source={imagePath.forwardicon} />
          <Image source={imagePath.location} />
        </View>
        <View style={styles.view1}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={carddata}
            renderItem={({ item }) => (
              <View style={styles.flatlistview}>
                <View style={styles.upperflatview}>
                  <Image source={item.personimg} style={styles.logo} />
                  <View style={styles.textview}>
                    <Text style={styles.txt1}>{item.personName}</Text>
                    <Text style={styles.txt2}>{item.personaddress}</Text>
                  </View>
                  <Image source={imagePath.threedot} style={styles.dotimg} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(NavigationStrings.firstbanner, { item });
                  }}
                  style={styles.bannerimgview}
                >
                  <Image source={item.bannerimg} style={styles.bannerimg} />
                </TouchableOpacity>
                <View style={styles.descriptionview}>
                  <Text style={styles.destxt1}>{item.description}</Text>
                  <Text style={styles.destxt2}>{item.time}</Text>
                </View>
                <View style={styles.bottomview}>
                  <Text style={styles.bottomtxt1}>{Strings.comments}</Text>
                  <Text style={styles.bottomtxt2}>{Strings.likes} </Text>
                  <Image
                    source={imagePath.direction}
                    style={styles.bottomimg}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
