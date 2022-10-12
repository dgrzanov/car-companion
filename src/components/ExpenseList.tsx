import * as React from 'react';
import { FlatList, SectionList, StyleSheet } from 'react-native';
import ExpenseListItem from './ExpenseListItem';

const DATA = [
    {
        id: "1",
        expense_type: "refuel",
        cost: 250,
        amount: 22
    },
    {
        id: "2",
        expense_type: "service",
        cost: 800,
        amount: 1
    },
    {
        id: "3",
        expense_type: "refuel",
        cost: 250,
        amount: 22
    },
    {
        id: "4",
        expense_type: "refuel",
        cost: 250,
        amount: 22
    },
]

function ExpenseList() {
    const renderItem = ({ item }) => (
        <ExpenseListItem expense_type={item.expense_type} cost={item.cost} />
    )
    return ( 
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} style={styles.expenseList} />
     );
}

const styles = StyleSheet.create({
    expenseList: {
        flex: 1
    }
})

export default ExpenseList;