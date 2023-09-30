import { StatusBar } from "expo-status-bar"
import { View, Text } from "react-native"
import { useSelector } from "react-redux"

const WrapperContainer = ({
    containerStyle,
    children
}) => {
    isDarkTheme = useSelector(state => state.settings.isDark)
    return (
        <View style={{ flex: 1, backgroundColor: isDarkTheme ? 'rgba(46,46,46,1)' : 'white', ...containerStyle }}>
            <StatusBar style="inverted" />
            {children}
        </View>

    )
}

export default WrapperContainer