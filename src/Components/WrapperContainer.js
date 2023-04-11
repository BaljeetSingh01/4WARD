import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"

const WrapperContainer = ({
    containerStyle,
    children
}) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red', ...containerStyle }}>
            <StatusBar style="inverted" />
            {children}
        </View>

    )
}

export default WrapperContainer