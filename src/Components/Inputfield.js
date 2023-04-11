import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const Inputfield = ({
  placeholder,
  Show,
  btnstyle,
  myvalue,
  ontextinput,
  mylength,
  myref,
  onPress,
  ...props
}) => {
  return (
    <View style={{ ...styles.cont, ...btnstyle }}>
      <TextInput

        ref={myref}
        maxLength={mylength}
        value={myvalue}
        onChangeText={ontextinput}
        placeholder={placeholder}
        style={styles.txtinput}
        placeholderTextColor=' "rgba(255,255,255,0.5)"'
        {...props}
      />

      {Show ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: "rgba(255,255,255,0.5)" }}>{Show}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#4C4C4C",
    height: moderateVerticalScale(48),
    borderRadius: moderateScale(8),
    flexDirection: "row",
    padding: moderateScale(16),
    alignItems: "center",

  },
  txtinput: { flex: 1, fontWeight: 'bold', fontSize: 15, color: '#FFFFFF', marginLeft: 5 },
});
