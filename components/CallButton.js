import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialCommunityIcons} from "@expo/vector-icons/";

import colors from "../constants/Colors";
import layout from "../constants/Layout";

export default function CallButton(props) {
    const guest = props.guest;
    const initials = guest.firstName[0].toLocaleUpperCase();

    return (
        <TouchableHighlight
            underlayColor={colors.white}
            onPress={() => {props.onCall(props.guest)}}
        >
            <View style={styles.container}>
                <View style={styles.info}>
                    <LinearGradient
                        colors={[colors.gradientStart, colors.gradientEnd]}
                        style={styles.circle}
                    >
                        <View style={styles.circleTextContainer}>
                            <Text style={styles.circleText}>{initials}</Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.guestInfo}>
                        <Text style={styles.guestNameText}>{guest.firstName}</Text>
                        <Text style={styles.guestPhoneText}>{guest.phone}</Text>
                    </View>
                </View>

                <View style={styles.callButton}>
                   <MaterialCommunityIcons name="phone" color={colors.white} size={32}/>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },

    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: colors.gray,
        padding: 10,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },

    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    circleTextContainer: {
        flex: 1,
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    circleText: {
        color: colors.white,
        fontSize: layout.largeFontSize,
    },

    guestInfo: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    guestNameText: {
        color: colors.titleText,
        fontSize: layout.mainFontSize,
    },

    guestPhoneText: {
        color: colors.mainText,
        fontSize: layout.smallFontSize,
    },

    callButton: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        backgroundColor: colors.success,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
    },
});
