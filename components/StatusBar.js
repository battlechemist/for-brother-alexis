import React from 'react';
import {StyleSheet, Text, View} from "react-native";

import colors from "../constants/Colors";
import layout from '../constants/Layout';

const STATUSES_DICTIONARY = {
    NEW: { text: 'НОВЫЙ', bgColor: colors.mainBlue },
    SENT_TO_KITCHEN: { text: 'ОТПРАВЛЕНО НА КУХНЮ', bgColor: colors.warning},
    DONE: { text: 'ПРИГОТОВЛЕН', bgColor: colors.success },
    CANCELED: { text: 'ОТМЕНЕН', bgColor: colors.error },
    INCORRECT: { text: 'НЕКОРРЕКТНЫЙ СТАТУС', bgColor: colors.error },
};

export default function StatusBar(props) {

    const localizedStatus = STATUSES_DICTIONARY[props.status];
    const resultStatus = localizedStatus ? localizedStatus : STATUSES_DICTIONARY.INCORRECT;

    return (
        <View style={[styles.container, {backgroundColor: resultStatus.bgColor} ]}>
            <Text style={styles.text}>{resultStatus.text}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        backgroundColor: colors.mainBlue,
        padding: 5,
        borderRadius: 3,
    },

    text: {
        fontSize: layout.littleFontSize,
        color: colors.white,
    },
});
