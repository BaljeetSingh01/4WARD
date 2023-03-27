import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import Strings from "../../Constants/Strings";
import { styles } from "./Firstbannerstyle";
import open from 'react-native-open-maps'
export const Firstbanner = ({ route, navigation }) => {
  // console.log(route.params.item);
  const data = route.params.item;
  return (
    <ImageBackground source={data.bannerimg} style={{ flex: 1 }}>
      <View style={styles.upperflatview}>
        <Image source={data.personimg} style={styles.logo} />
        <View style={styles.textview}>
          <Text style={styles.txt1}>{data.personName}</Text>
          <Text style={styles.txt2}>{data.personaddress}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.crossimg}
        >
          <Image source={imagePath.cross} />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionview}>
        <Text style={styles.destxt1}>{data.description}</Text>
        <Text style={styles.destxt2}>{data.time}</Text>
      </View>
      <TouchableOpacity style={styles.bottomview} onPress={()=>open({ latitude: 37.865101, longitude: -119.538330 })}>
        <RedButton title={Strings.viewmap} />
      </TouchableOpacity>
    </ImageBackground>
  );
};
