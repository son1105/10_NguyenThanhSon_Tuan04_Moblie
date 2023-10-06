import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { color } from '@rneui/base'
import { TextInput } from 'react-native-web'

export default function _2d() {
    var [quantity, setQuantity] = useState(1)
    var [price, setPrice] = useState(141800)
    return (
        <View style={styles.container}>
            <View style={styles.viewSale}>
                <View style={styles.viewInfoProduct}>
                    <View style={styles.viewTitle}>
                        <Image style={styles.imageTitle} source={require('../assets/book.PNG')} />
                        <View style={styles.viewTitleChild}>
                            <Text style={styles.textTitle}>Nguyên hàm tích phân và ứng dụng</Text>
                            <Text style={styles.textTitle}>Cung cấp bởi Tiki Trading</Text>
                            <Text style={styles.textPriceSale}>{price}</Text>
                            <Text style={[styles.textTitle, {color:'#808080', textDecorationLine: 'line-through'}]}>141.800 đ</Text>
                            <View style={styles.viewQuantity}>
                                <View style={styles.viewButtonQuantity}>
                                <TouchableOpacity style={styles.buttonQuantity} onPress={()=>{
                                    if(quantity>1) setQuantity(quantity-1)
                                }}>-</TouchableOpacity>
                                <Text style={styles.textQuantity}>{quantity}</Text>
                                <TouchableOpacity style={styles.buttonQuantity} onPress={()=>{
                                    setQuantity(quantity+1)
                                }}>+</TouchableOpacity>
                                </View>
                                <Text style={styles.textCancel}>Mua sau</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewCounpon}>
                        <View style={styles.viewSavedCoupon}>
                            <Text style={styles.textTitle}>Mã giảm giá đã lưu</Text>
                            <Text style={[styles.textTitle, {color:'#134FEC'}]}>Xem tại đây</Text>
                        </View>
                        <View style={styles.viewSavedCoupon}>
                            <View style={styles.viewAppliedCoupon}>
                                <View style={styles.viewRactangle}/>
                                <TextInput style={styles.inputCoupon} placeholder='Mã giảm giá' />
                            </View>
                            <TouchableOpacity style={styles.buttonApply}>Áp dụng</TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.viewSavedCoupon}>
                    <Text style={styles.textTitle}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <Text style={[styles.textTitle, {color:'#134FEC'}]}>Nhập tại đây</Text>
                </View>
                <View style={styles.viewSavedCoupon}>
                    <Text style={[styles.textTitle, {fontSize:18}]}>Tạm tính</Text>
                    <Text style={styles.textPrice}>{quantity*price}</Text>
                </View>
            </View>
            <View style={styles.viewButton}>
                <View style={styles.viewSavedCoupon}>
                    <Text style={[styles.textTitle, {fontSize:18, color:'#808080'}]}>Thành tiền</Text>
                    <Text style={[styles.textPrice, {fontSize:20}]}>{quantity*price}</Text>
                </View>
                <TouchableOpacity style={styles.buttonOrder}>
                    Tiến hành đặt hàng
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 640,
        justifyContent: 'space-between',
    },
    viewSale: {
        flex: 4,
        width: '100%',
    },
    viewInfoProduct: {
        flex: 3,
    },
    viewTitle: {
        flex: 1,
        flexDirection: 'row',
        margin: 14,
    },
    imageTitle: {
        width: 100,
        height: '100%',
    },
    viewTitleChild: {
        flex: 1,
        marginHorizontal: 25,
        justifyContent: 'space-between',
    },
    textTitle: {
        fontFamily: 'Roboto',
        marginBottom: 10,
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 14,
    },
    textPriceSale: {
        flex: 1,
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 21,
        color: '#EE0D0D',
    },
    viewQuantity: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewButtonQuantity: {
        flexDirection: 'row',
        width: 60,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonQuantity: {
        width: 20,
        height: 20,
        backgroundColor: 'gray',
        fontSize: 20,
        fontWeight: 700,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textQuantity: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 700,
        marginHorizontal: 10,
        lineHeight: 17.58,
    },
    textCancel: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 14,
        color: '#134FEC',
    },
    viewCounpon: {
        flex: 1,
    },
    viewSavedCoupon: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewAppliedCoupon: {
        flex: 2,
        flexDirection: 'row',
        marginRight: 25,
        height: '50%',
        alignItems: 'center',
        borderColor: '#808080',
        borderWidth: 1,
    },
    viewRactangle: {
        width: 32,
        height: 16,
        marginHorizontal: 10,
        backgroundColor: '#F2DD1B',
    },
    inputCoupon: {
        flex: 1,
        paddingHorizontal: 10,
        width: '100%',
        height: '100%',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 21.09,
    },
    buttonApply: {
        flex: 1,
        width: '100%',
        height: '50%',
        fontSize: 20,
        lineHeight: 23.44,
        color: '#FFFFFF',
        backgroundColor: '#134FEC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewDiscount: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3B3B98',
        justifyContent: 'space-between',
    },
    viewTotal: {
        flex: 1,
        backgroundColor: '#3B3B98',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPrice: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 21,
        color: '#EE0D0D',
    },
    viewButton: {
        flex: 1,
    },
    buttonOrder: {
        flex: 1,
        margin: 14,
        height: '100%',
        fontSize: 20,
        lineHeight: 23.44,
        color: '#FFFFFF',
        backgroundColor: '#E53935',
        alignItems: 'center',
        justifyContent: 'center',
    },
})