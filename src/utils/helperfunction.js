import { AsyncStorage } from 'react-native';
export const storeData = async (key, value) => {
    try {
        if (typeof (value !== 'string')) {
            await AsyncStorage.setItem(key, JSON.stringify(value))
        }
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        return (error)
    }
};

export const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        return (error)
    }
};

