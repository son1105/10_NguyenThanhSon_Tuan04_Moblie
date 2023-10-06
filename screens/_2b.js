import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import React, {useState} from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'

export default function _2b() {
    var [star1, setStar1] = useState('#F2DD1B')
    var [star2, setStar2] = useState('#F2DD1B')
    var [star3, setStar3] = useState('#F2DD1B')
    var [star4, setStar4] = useState('#F2DD1B')
    var [star5, setStar5] = useState('#F2DD1B')
    var [quanlity, setQuanlity] = useState('Cực kỳ hài lòng')
    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>
                <Image style={styles.image} source={require('../assets/usb.png')} />
                <Text style={styles.textTop}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View style={styles.viewBottom}>
                <View style={styles.viewTextBottomTitle}>
                <Text style={styles.textBottomTitle}>{quanlity}</Text>
                </View>
                <View style={styles.viewStar}>
                    <Entypo name="star" size={39} color={star1} onPress={()=>{
                        setStar1('#F2DD1B')
                        setStar2('#C4C4C4')
                        setStar3('#C4C4C4')
                        setStar4('#C4C4C4')
                        setStar5('#C4C4C4')
                        setQuanlity('Sản phẩm rất tệ')
                    }}/>
                    <Entypo name="star" size={39} color={star2} onPress={()=>{
                        setStar1('#F2DD1B')
                        setStar2('#F2DD1B')
                        setStar3('#C4C4C4')
                        setStar4('#C4C4C4')
                        setStar5('#C4C4C4')
                        setQuanlity('Sản phẩm hơi tệ')
                    }}/>
                    <Entypo name="star" size={39} color={star3} onPress={()=>{
                        setStar1('#F2DD1B')
                        setStar2('#F2DD1B')
                        setStar3('#F2DD1B')
                        setStar4('#C4C4C4')
                        setStar5('#C4C4C4')
                        setQuanlity('Bình thường')
                    }}/>
                    <Entypo name="star" size={39} color={star4} onPress={()=>{
                        setStar1('#F2DD1B')
                        setStar2('#F2DD1B')
                        setStar3('#F2DD1B')
                        setStar4('#F2DD1B')
                        setStar5('#C4C4C4')
                        setQuanlity('Hài lòng')
                    }}/>
                    <Entypo name="star" size={39} color={star5} onPress={()=>{
                        setStar1('#F2DD1B')
                        setStar2('#F2DD1B')
                        setStar3('#F2DD1B')
                        setStar4('#F2DD1B')
                        setStar5('#F2DD1B')
                        setQuanlity('Cực kỳ hài lòng')
                    }}/>
                </View>
                <View style={styles.viewUploadPicture}>
                    <FontAwesome name="camera" size={39} color="black"/>
                    <Text style={styles.textBottomUpload}>Thêm hình ảnh</Text>
                </View>
                <TextInput style={styles.textBottomComment} multiline placeholderTextColor={'#C4C4C4'} placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'/>
                <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Gửi</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#FBCB00',
        alignItems:'center',
        // justifyContent:'center'
    },
    viewTop: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70
    },
    textTop: {
        width: '70%',
        marginLeft: 10,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 16,
        lineheight: 18.75,
    },
    viewBottom: {
        flex: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewTextBottomTitle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textBottomTitle: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        lineheight: 21.09,
    },
    viewStar: {
        flex: 1,
        flexDirection: 'row',
        width: '75%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    viewUploadPicture:{
        flex: 1,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 70,
        borderColor: '#1511EB',
        borderWidth: 1,
    },
    textBottomUpload:{
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineheight: 19,
    },
    textBottomComment:{
        flex: 3,
        width: '80%',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        fontFamily: 'Roboto',
        fontSize: 18,
        lineheight: 21.09,
        fontWeight: 700,
    },
    viewButton:{
        flex: 1,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        width: '100%',
        height: '60%',
        backgroundColor: '#1511EB',
        borderColor: '#0D5DB6',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        color: '#FFFFFF',
    }
})