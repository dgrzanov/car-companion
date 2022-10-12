import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from "react-native"

function MainScreen() {
    return (
        <View style={styles.container}>
            <Text>Neki tekst</Text>
            <Text>Car Companion</Text>
            <StatusBar style="auto" />
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen