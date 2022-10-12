import * as React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

function CarInfo() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.carName}>Seat Cordoba 1.4</Text>
            <Text>Broj sasije</Text>
            <Image 
                source={require("../../assets/images/seat-cordoba-6k.jpeg")} 
                style={styles.carImage}
            />
            <Text>178 876 km</Text>
            <Text>7.0 l/100km</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        paddingTop: 30,
        paddingBottom: 15,
        // flexDirection: 'column',
        // height: 0.5,
        width: "100%",
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    },
    carName: {
    },
    carImage: {
        width: "90%",
        height: "auto",
        flexGrow: 1,
        resizeMode: 'contain'
    }
})

export default CarInfo;