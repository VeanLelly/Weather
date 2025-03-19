import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native';


export default function Weather({ }) {

    return (
        <SafeAreaView>


            <View >
                <TextInput style={styles.input} placeholder='Digite o  nome da cidade ou estado' placeholderTextColor={'white'} />

                <View style={styles.row1}>
                    <Text style={styles.text}>Teresina</Text><Text style={styles.textb}>, Brasil</Text></View>

                <View>
                    <Text style={styles.previsao}>Previsão dos próximos 5 dias.</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                        <View style={styles.row}>

                            <View style={styles.square}></View>
                            <Text style={styles.square}></Text>
                            <Text style={styles.square}></Text>
                            <Text style={styles.square}></Text>
                            <Text style={styles.square}></Text>


                        </View>
                    </ScrollView>
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
        fontWeight: 500,
        marginHorizontal: 10


    },

    text: {
        fontWeight: 700,
        margin: 0,
        padding: 0,
        // color:"white"
        marginBottom: 500,
        fontSize: 15,
        color: 'white'

    },

    textb: {
        color: 'white',
        fontWeight: 400,
        fontSize: 15,

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
        gap: 10,
        marginBottom: '50',
        marginHorizontal:10

    },

    previsao: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 600,
        color: 'white',
    },

    square: {
        padding: 60,
        width: 10,
        height: 'auto',
        backgroundColor: 'pink',
        borderRadius: 10,
        

    },
})