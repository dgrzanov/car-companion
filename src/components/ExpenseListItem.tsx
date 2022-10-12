import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

function ExpenseListItem({ expense_type, cost, mileage }: any) {
    return ( 
        <View style={styles.container}>
            <Avatar.Icon size={50} icon="gas-station" />
            <View>
                <Text>{expense_type}</Text>
                <Text>{mileage} km</Text>
            </View>
            <Text>{cost} kn</Text>
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