import { NavigatorScreenParams } from '@react-navigation/native';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import HomeNavigation from '../../../Navigation/HomeNavigation';
import ExploreNavigation from '../../../Navigation/ExploreNavigation';
import CartNavigation from '../../../Navigation/CartNavigation';
import OfferNavigation from '../../../Navigation/OfferNavigation';
import AccountNavigation from '../../../Navigation/AccountNavigation';
import { RootStackParamListHome } from '../../../Root/RootStackHome';
import { RootStackParamListExplore } from '../../../Root/RootStackExplore';
import { RootStackParamListCart } from '../../../Root/RootStackCart';
import { RootStackParamListOffer } from '../../../Root/RootStackOffer';
import { RootStackParamListAccount } from '../../../Root/RootStackAccount';
import { COLORS } from '../../../utilities';
import Icon from 'react-native-vector-icons/Ionicons';


export enum RootTabScreenENum {
    StackHome = 'Home',
    StackExplore = 'Explore',
    StackCart = 'Cart',
    StackOffer = 'Offer',
    StackAccount = 'Account',
};

export type RootTabParamList = {
    StackHome: NavigatorScreenParams<RootStackParamListHome>,
    StackExplore: NavigatorScreenParams<RootStackParamListExplore>,
    StackCart: NavigatorScreenParams<RootStackParamListCart>,
    StackOffer: NavigatorScreenParams<RootStackParamListOffer>,
    StackAccount: NavigatorScreenParams<RootStackParamListAccount>,
};

export const RootBottomTab = () => {

    const Screens: any[] = [
        { id: 1, name: RootTabScreenENum.StackHome, component: HomeNavigation, option: {} },
        { id: 2, name: RootTabScreenENum.StackExplore, component: ExploreNavigation, option: {} },
        { id: 3, name: RootTabScreenENum.StackCart, component: CartNavigation, option: {} },
        { id: 4, name: RootTabScreenENum.StackOffer, component: OfferNavigation, option: {} },
        { id: 5, name: RootTabScreenENum.StackAccount, component: AccountNavigation, option: {} },

    ]
    return Screens;
}
export const configTab = (route: any) => {
    
    return {
        tabBarIcon: ({ color, focused }: any) => {
            let iconName: any;
            if (route.name === 'Home') {
                iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Explore') {
                iconName = focused ? 'search-sharp' : 'search-outline';
            } else if (route.name === "Cart") {
                iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Offer') {
                iconName = focused ? 'ticket' : 'ticket-outline';
            } else if (route.name === 'Account') {
                iconName = focused ? 'person' : 'person-outline';
            }
            return  <Icon name={iconName} size={22} color={color} />

        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
    }
}
const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 55,
    }
});
