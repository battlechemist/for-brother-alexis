import React from 'react';
import {StyleSheet, Text, View} from "react-native";

import StatusBar from "./StatusBar";
import colors from "../constants/Colors";
import layout from "../constants/Layout";

/*
props: {
    title: string;
    withStatusBar: boolean;
    status: string;
    text: string;
}
 */

export default function TextBlock(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                {props.withStatusBar &&
                <StatusBar status={props.status}/>
                }
            </View>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 0,
        marginBottom: 10,
    },

    topBar: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },

    title: {
        fontSize: layout.smallFontSize,
        color: colors.mainText,
    },

    text: {
        fontSize: layout.mainFontSize,
        color: colors.titleText,
    },
});