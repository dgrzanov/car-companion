import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

function ExpenseListItem({ expense_type, cost }: any) {
    return ( 
        <View style={styles.container}>
            <Avatar.Icon size={50} icon="gas-station" />
            <Text> {expense_type} </Text>
            <Text> {cost} </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: Dimensions.get("screen").width,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default ExpenseListItem;