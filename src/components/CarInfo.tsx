import * as React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

function CarInfo() {
    return ( 
        <ImageBackground
            source={require("../../assets/images/seat-cordoba-6k.jpeg")} 
            style={styles.container}
        >
            <View>
                <Text style={styles.carName}>Seat Cordoba 1.4</Text>
                <Text style={styles.chasisNumber}>Broj sasije</Text>
            </View>
            <View>
                <Text style={styles.mileage}>178 876 km</Text>
                <Text style={styles.consumption}>7.0 l/100km</Text>
            </View>
        </ImageBackground> 
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
        justifyContent: "space-between"
    },
    carName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    chasisNumber: {
        fontSize: 15,
        color: "white"
    },
    mileage: {
        fontSize: 18,
        color: "white"
    },
    consumption: {
        fontSize: 17,
        color: "white"
    },
    carImage: {
        width: "90%",
        height: "auto",
        flexGrow: 1,
        resizeMode: 'contain'
    }
})

export default CarInfo;