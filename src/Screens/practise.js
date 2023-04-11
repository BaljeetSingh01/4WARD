//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Inputfield } from '../Components/Inputfield';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { RedButton } from '../Components/RedButton';
import { useState } from 'react';

// create a component
const Practise = () => {
    const [first, setfirst] = useState()
    const [second, setsecond] = useState()
    const [mul, setmul] = useState('')
    const [sub, setsub] = useState('')
    const [div, setdiv] = useState('')
    const [add, setadd] = useState('')

    function firstinput(val) {
        if (val.match('^[0-9]*$')) {
            setfirst(val)

        }
    }
    function secondinput(val) {
        if (val.match('^[0-9]*$')) {
            setsecond(val)

        }
    }

    function calculate() {
        setmul(first * second)
        setsub(first - second)
        setdiv(first / second)
        setadd(parseInt(first) + parseInt(second))

        setfirst('')
        setsecond('')


    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.2, marginVertical: moderateVerticalScale(20), marginTop: moderateVerticalScale(30) }}>
                <View style={{ marginVertical: moderateVerticalScale(23) }}>
                    <Inputfield
                        myvalue={first}
                        ontextinput={firstinput}
                        keyboardType="number-pad"

                    /></View>

                <Inputfield myvalue={second}
                    ontextinput={secondinput}
                    keyboardType="number-pad" />
            </View>
            <View style={{ backgroundColor: 'lightgrey', borderRadius: 10, flex: 0.7, marginTop: moderateVerticalScale(20), marginBottom: moderateVerticalScale(23) }}>
                <View style={{ paddingHorizontal: moderateScale(12), paddingVertical: moderateVerticalScale(12) }}>
                    <Text>Multiplication is   :  {mul}</Text>
                    <Text>Subtraction is       :  {sub}</Text>
                    <Text>Division is              :  {div}</Text>
                    <Text>Addition is             :  {add}</Text>
                </View>

            </View>


            <TouchableOpacity style={{ flex: 0.1, marginBottom: moderateVerticalScale(24) }} onPress={() => calculate()}>
                <RedButton title={'Calculate'} on />
            </TouchableOpacity>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateVerticalScale(16),
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Practise;
