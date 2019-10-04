import React from 'react'
import {StyleSheet, View, TouchableHighlight, Text} from "react-native";

import colors from "../constants/Colors";
import layout from '../constants/Layout';
import StatusBar from "./StatusBar";
import {formatDate} from "../services/UtillsService";


export default function OrderListItem(props) {
    const disabled = props.order.status === 'CANCELED';

    return (
        <TouchableHighlight
            underlayColor={colors.mainBlue}
            disabled={disabled}
            onPress={() => props.onPress(props.order)}
        >
            <View style={[styles.container, disabled && styles.disabled]}>
                <View style={styles.topBar}>
                    <Text style={styles.topBarText}>{props.order.title}</Text>
                    <Text style={styles.topBarText}>{formatDate(props.order.creationDate, 'H:mm')}</Text>
                </View>
                <Text style={styles.addressText}>{props.order.address}</Text>
                <StatusBar status={props.order.status}/>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },

    disabled: {
        opacity: 0.5,
    },

    topBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    topBarText: {
        color: colors.titleText,
        fontWeight: '500',
        fontSize: layout.mainFontSize,
    },

    addressText: {
        color: colors.mainText,
        marginTop: 5,
        marginBottom: 10,
        fontSize: layout.mainFontSize,
    },
});
