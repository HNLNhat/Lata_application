import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { CompositeNavigationProp, NavigationProp, useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../component/BottomNavigation/RootTab/RootTab';
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { COLORS } from '../../utilities';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackParamListHome, RootStackScreenEnumHome } from '../../Root/RootStackHome';


interface Category {
  id: number;
  img: any;
  name: string;
}
type BottomNavigationProp = CompositeNavigationProp<NavigationProp<RootTabParamList>, StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>>;
const ExploreScreen = ({ navigation }: NativeStackHeaderProps | any) => {
  

  const renderItem = ({ item }: any): React.JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.containerItemPD}
      >
        <View>
          <ImageBackground source={{ uri: item.linkIcon }} style={styles.imageStyle} >
            <Text style={styles.NamePD}>{item.name}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };




  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <View style={styles.headerLeft} >
          <Icon name='search' size={22} />
          <TextInput
            placeholder="Tìm kiếm"
            style={[styles.TextSearch]}
          />
            <Pressable style={{ position: 'absolute', right: 5, backgroundColor: '#dbd9d9', borderRadius: 5 }}
            >
            </Pressable>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="notifications-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={[]}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item: any) => item?._id.toString()} />
    </View>

  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  NamePD: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    position: 'absolute',
    margin: 5,
    top: '0%',
    left: 0,
    color: '#223263',
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },

  containerItemPD: {
    borderWidth: 0.2,
    width: WIDTH * 0.45,
    alignSelf: 'center',
    height: HEIGHT * 0.1,
    overflow: 'hidden',
    borderRadius: 5,
    margin: 10,
  },

  // thanh trên

  TextSearch: {
    width: WIDTH / 2,
    justifyContent: 'center',
    marginLeft: 10,
    paddingVertical: 0,
  },
  imageSearch: {
    width: 20,
    height: 20
  },
  headerRight: {
    position: 'absolute',
    right: 0
  },
  headerLeft: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: '#e1dede',
    alignItems: 'center',
    flexDirection: 'row',
    width: '85%',
    height: '85%'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    paddingTop: PADDING_TOP,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#FFFFFF'
  }
});

