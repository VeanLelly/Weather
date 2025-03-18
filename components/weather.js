import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';

export default function Weather({ }) {

    return (
        <SafeAreaView>
            <View >
                <TextInput style={styles.input} placeholder='Digite o  nome da cidade ou estado' placeholderTextColor={'white'} />

                <View style={styles.row1}>
                    <Text style={styles.text}>Teresina</Text><Text>, Brasil</Text></View>

                <View>
                    <Text style={styles.previsao}>Previsão dos próximos 5 dias.</Text>
                    <View style={styles.row}>

                        <Text style={styles.square}></Text> <Text style={styles.square}></Text> <Text style={styles.square}></Text> </View>
                </View>
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        backgroundColor: 'pink',
        color: 'white',
        borderRadius: 10,
        fontSize: 15,
        marginTop: 50,
        fontWeight: 500

    },

    text: {
        fontWeight: 800,
        margin: 0,
        padding: 0,
        // color:"white"
        marginBottom: 500,
        fontSize:15,

    },

    row1: {
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,



    },

    row: {
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },

    previsao: {
        margin: 10,
        fontSize: 15,
        fontWeight: 500
    },

    square: {
        padding: 60,
        width: 10,
        height: 'auto',
        backgroundColor: 'pink',
        borderRadius: 10

    },
})