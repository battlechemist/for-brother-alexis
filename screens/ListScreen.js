import React from 'react';
import {ActivityIndicator, SectionList, StyleSheet, Text, View} from "react-native";

import axios from 'axios';

import {groupBy, map} from "lodash-es";

import colors from "../constants/Colors";
import layout from '../constants/Layout';
import {createServerError} from "../services/ApiService";
import OrderListItem from "../components/OrderListItem";
import {getDateForTitle} from "../services/UtillsService";

export default class ListScreen extends React.Component {

    static navigationOptions = {
        title: 'Мои заказы',
    };

    didFocusSubscription;

    constructor(props) {
        super(props);
        this.state = {
            orderList: [],
            loading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.didFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.setState({
                    loading: true,
                });

                axios.get('https://qr-rn-test-task.herokuapp.com/orders')
                    .then((response) => {
                        this.setState({
                            orderList: this.groupOrderListByDate(response.data),
                            loading: false,
                            error: null,
                        });
                    })
                    .catch((error) => {
                        this.setState({
                            loading: false,
                            error: createServerError(error),
                        });
                    })
            }
        );
    }

    groupOrderListByDate(orders) {
        const groupedObj = groupBy(orders, o => {
            return getDateForTitle(o.creationDate, 'd MMMM yyyy');
        });

        return map(groupedObj, (item, key) => {
            return {
                title: key,
                data: item,
            };
        });
    }

    onPress(order) {
        this.props.navigation.navigate('Detail', { order });
    }

    render() {
        const { loading, error } = this.state;

        if (loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={colors.warning}/>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                {error &&
                    <Text style={styles.errorText}>
                        При получении списка заказов произошла ошибка:&nbsp;
                        {error.message} ({error.code})
                    </Text>
                }
                {!error &&
                    <SectionList
                        sections={this.state.orderList}
                        renderItem={({item}) => (
                            <OrderListItem
                                order={item}
                                onPress={(order) => this.onPress(order)}
                            />
                        )}
                        renderSectionHeader={({section}) => (
                            <Text style={styles.title}>{section.title}</Text>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                }
            </View>
        );
    }

    componentWillUnmount() {
        this.didFocusSubscription.remove();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBlue,
        paddingLeft: 10,
        paddingRight: 10,
    },

    title: {
        color: colors.white,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: layout.mainFontSize,
    },

    errorText: {
        color: colors.error,
        fontSize: layout.mainFontSize,
    },
});
