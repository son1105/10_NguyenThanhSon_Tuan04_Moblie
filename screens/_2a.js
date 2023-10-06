import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons'


export default function _2a() {
    var [secureTextEntry, setSecureTextEntry] = useState(true)
    var [eye, setEye] = useState('eye-off')
    return (
        <View style={styles.container}>
            <View style={styles.viewLogin}>
                <Text style={styles.textLogin}>LOGIN</Text>
            </View>
            <View style={styles.viewInput}>
                <View style={styles.viewInputInside}>
                    <FontAwesome style={styles.icon} name="user" size={"350%"} color="black" />
                    <TextInput style={styles.input} placeholder="Name" />
                </View>
                <View style={styles.viewInputInside}>
                    <Fontisto style={styles.icon} name="locked" size={"350%"} color="black" />
                    <TextInput style={styles.input} secureTextEntry={secureTextEntry} placeholder="Password" />
                    <Ionicons style={styles.icon} name={eye} size={"350%"} color="black" 
                        onPress={()=>{
                            setSecureTextEntry(!secureTextEntry)
                            setEye(eye=='eye'?'eye-off':'eye')
                            }}/>
                </View>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.buttonForget}>Forgot your password?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBCB00',
    },
    viewLogin: {
        flex: 1,
        justifyContent: 'center',
    },
    textLogin: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 30,
        lineheight: 35.16,
    },
    viewInput: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewInputInside: {
        height: "40%",
        width: '95%',
        backgroundColor: '#C4C4C4',
        borderColor: '#F2F2F2',
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 1,
    },
    icon: {
        marginHorizontal: 10,
    },
    input: {
        marginLeft: 20,
        padding: '5%',
        width: '100%',
        fontSize: 20,
    },
    viewButton: {
        flex: 2,
        alignItems: 'center',
    },
    buttonLogin:{
        width: '95%',
        height: '15%',
        marginTop: '20%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonLoginText:{
        color: 'white',
        fontSize: 20,
        lineHeight: 23.44,
    },
    buttonForget:{
        height: '10%',
        marginTop: '15%',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23.44,
    }
})