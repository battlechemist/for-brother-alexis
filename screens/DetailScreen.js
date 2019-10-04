import React from "react";
import {StyleSheet, Text, View, Linking} from "react-native";

import colors from "../constants/Colors";
import TextBlock from "../components/TextBlock";
import {formatDate} from "../services/UtillsService";
import layout from "../constants/Layout";
import CallButton from "../components/CallButton";


export default class DetailScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Заказ ${navigation.getParam('order', 'noId').title}`,
        };
    };

    onCall(guest) {
        Linking.openURL(`tel:${guest.phone}`)
    }

    render() {
        const order = this.props.navigation.getParam(
            'order',
            {
                address:'no address',
                courierComment: 'no comment',
                creationDate: 'no date',
                venue: {
                    id: 0,
                    title: 'no title',
                },
                guest: {
                    id: 0,
                    firstName: 'no name',
                    phone: 'no phone',
                },
            }
        );

        return (
            <View style={styles.container}>
                <View style={styles.bubble}>
                    <TextBlock
                        title='Дата создания'
                        withStatusBar={true}
                        status={order.status}
                        text={formatDate(order.creationDate, 'd MMMM yyyy H:mm')}
                    />
                    <TextBlock
                        title='Адрес'
                        withStatusBar={false}
                        text={order.address}
                    />
                    <TextBlock
                        title='Информация для курьера'
                        withStatusBar={false}
                        text={order.courierComment}
                    />
                    <TextBlock
                        title='Заведение'
                        withStatusBar={false}
                        text={order.venue.title}
                    />
                    <View>
                        <Text style={styles.title}>Клиент</Text>
                        <CallButton guest={order.guest} onCall={(guest) => this.onCall(guest)}/>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBlue,
        padding: 10,
    },

    bubble: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 20,
    },

    title: {
        fontSize: layout.smallFontSize,
        color: colors.mainText,
        marginBottom: 5,
    },

});

