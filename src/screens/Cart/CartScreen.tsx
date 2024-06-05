import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList, Dimensions, Alert, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, WIDTH } from '../../utilities/utility';
import { useNavigation } from '@react-navigation/native'
import { PropsCart } from '../../Navigation/Props';
import ButtonBottom from '../../component/Button/Button';
import { InputItem } from '@ant-design/react-native';


const listData = new Array(4)

const CartScreen = ({ navigation }: PropsCart) => {


    const RenderItem = () => {
      
     

        return (
            <View style={styles.itemCart}>
                <View>
                        <Image source={{ uri:'https://product.hstatic.net/1000084161/product/tui-deo-cheo-nam-lata-tn22-mau-bo-dam__2__0a3f99590bca4b1c9a0f2f6fbfc50967_master.jpg'}} style={{ width: 72, height: 72 }} />
                </View>
                <View style={{ flexDirection: 'column', height: '100%' }}>
                    <View style={styles.topItem}>
                        <View style={{ width: '65%', gap: 10 }}>
                            <Text style={styles.textTitleItem}>Ví</Text>
                            <View style={{ flexDirection: 'row', columnGap: 20 }}>
                            
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textTitleItem}>Size: </Text>
                                    <View style={{ width: 20, height: 20, backgroundColor: `${'#0000'}`, borderRadius: 50 }}></View>
                                </View>
                            </View>
                        </View>
                        <Pressable>
                            <Icon name='trash-outline' color='#9e9e9e' size={25} />
                        </Pressable>
                    </View>
                    <View style={styles.bottomItem}>
                    
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', width: 100, height: 30, paddingHorizontal: 2, position: 'absolute', right: 30 }}>
                            <Pressable style={1 > 1 ? styles.btnNumberCountMinus : [styles.btnNumberCountMinus, { backgroundColor: '#E5E5E5' }]}><Icon name='remove-outline' size={25} /></Pressable>
                            <Text style={styles.textNumberCount}>12</Text>
                            <Pressable style={8 < 10 ? styles.btnNumberCountPlus : [styles.btnNumberCountPlus, { backgroundColor: '#E5E5E5' }]}><Icon name='add-outline' size={25} /></Pressable>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ paddingHorizontal: PADDING_HORIZONTAL, width: WIDTH, backgroundColor: BG_COLOR }}  >
            <View style={{ marginTop: 17 }}>
                <Text style={styles.txtTitlePage}>Giỏ Hàng</Text>
            </View>
            <View style={styles.line}></View>
            <View style={{ height: HEIGHT * 0.35, marginTop: '11%' }}>
                {listData.length > 0 ?
                    <FlatList
                        scrollEnabled={false}
                        renderItem={(object) => <RenderItem/>}
                        data={listData}
                        keyExtractor={(item: any) => item?.key}
                    /> : <Text style={{ fontSize: 20 }}>Chưa có sản phẩm</Text>}
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >

                <View style={{ height: HEIGHT * 0.8 }}>


                    <View style={{ borderWidth: 1, borderColor: 'red', borderRadius: 5, marginTop: 25 }}>
                        <InputItem
                            style={{ fontSize: 16 }}
                           
                            
                            placeholder={"Nhập mã giảm giá"}
                            extra={
                                <Pressable style={styles.btnApply}>
                                    <Text style={styles.textApply}>Áp dụng</Text>
                                </Pressable>
                            }
                        />
                    </View>

                    <View style={styles.itemTotalPrice}>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Tổng giá sản phẩm 1000000</Text>
                        </View>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Phí giao hàng</Text>
                            
                        </View>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Giảm giá</Text>
                          
                        </View>
                        <View style={styles.bottomTotalPrice}>
                            <Text style={styles.textBottomTotalLeft}>Tổng giá</Text>
                           
                        </View>

                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Pressable >
                            <ButtonBottom title='Xác Nhận' />
                        </Pressable>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView > 
    )
}

export default CartScreen

const styles = StyleSheet.create({
    btnCheckOut: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 5,
        marginTop: 34
    },
    textCheckOut: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    textBottomTotalRight: {
        color: '#40BFFF',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textBottomTotalLeft: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textHeaderTotalRight: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },
    textHeaderTotalLeft: {
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        letterSpacing: 0.50,
    },
    bottomTotalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderColor: '#9098B1',
        alignItems: 'center',
    },
    headerTotalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemTotalPrice: {
        padding: 16,
        borderWidth: 0.5,
        borderColor: '#9098B1',
        borderRadius: 5,
        marginTop: 20
    },
    btnApply: {
        backgroundColor: '#40BFFF',
        width: 65,
        height: '101%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: -16,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    textApply: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },
    topItem: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 25,
        paddingLeft: 20,
    },
    bottomItem: {
        flexDirection: 'row',
        height: '50%',
        alignItems: 'center',
        paddingLeft: 20,
    },
    btnNumberCountMinus: {
        backgroundColor: '#EBF0FF',
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5
    },
    btnNumberCountPlus: {
        backgroundColor: '#EBF0FF',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5
    },
    textNumberCount: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 18,
        letterSpacing: 0.06,
        marginTop: 4,
    },
    textPrice: {
        color: '#40BFFF',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textTitleItem: {
        color: '#223263',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    itemCart: {
        height: 110,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        marginBottom: 16
    },
    line: {
        position: 'absolute',
        width: WIDTH,
        height: 1,
        backgroundColor: '#E5E5E5',
        marginTop: 60,

    },
    txtTitlePage: {
        color: '#223263',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
    }
})
