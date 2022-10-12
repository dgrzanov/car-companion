import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from "react-native"
import { Button } from "react-native-paper";
import { useState } from "react";
import CarInfo from "../components/CarInfo";
import ExpenseList from "../components/ExpenseList";

function MainScreen() {
    const [counter, setCounter] = useState(0)
    const handlePress = () => {
      setCounter(counter + 1)
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <CarInfo />
            <ExpenseList />
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default MainScreen