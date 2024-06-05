import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility'
import ButtonBottom from '../../component/Button/Button'


const AccountScreen = ({ navigation }: any) => {
 
  return (
    <View style={[styles.container,]}>
      <Text style={styles.title}>Tài Khoản</Text>
      <View style={styles.line}></View>

      <View>
        {data.map((item) =>
          <TouchableOpacity >
            <Icon name={item.icon} size={25} color={'#525252'} />
            <Text style={styles.txtbtn}>{item.name}</Text>
          </TouchableOpacity>
        )}

      </View>
     
        <Pressable style={{ width: '100%', position: 'absolute', bottom: 120, alignSelf: 'center' }}>
          <ButtonBottom title='Đăng nhập' />
        </Pressable> 
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  txtbtn: {
    color: '#223263',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.50,
    paddingLeft: 15,
  },

  button: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
  },
  line: {
    height: 0.5,
    backgroundColor: '#ADA8A8',
    width: '120%',
    marginTop: 20,
    position: 'relative',
    right: 20
  },
  title: {
    color: '#223263',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.08,
  },
  container: {
    width: WIDTH,
    height: HEIGHT,
    paddingTop: PADDING_TOP,
    paddingHorizontal: PADDING_HORIZONTAL
  }
})

const data = [
  {
    id: 1,
    name: 'Hồ sơ',
    icon: 'person-sharp',
    screen: 'ProfileScreen'
  },
  {
    id: 2,
    name: 'Đơn hàng',
    icon: 'bag-check-sharp',
    screen: 'OrderScreen'

  },
  {
    id: 3,
    name: 'Địa chỉ',
    icon: 'location-sharp',
    screen: 'AddressScreen'

  }
]