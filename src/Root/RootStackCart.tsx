import { uid } from 'uid';
import { FadeCartScreen } from '../component/BottomNavigation/AniScreenBottomTab';



export enum RootStackScreenEnumCart {
    CartScreen = 'CartScreen',

}

export type RootStackParamListCart = {
    CartScreen: undefined,

}


export const RootStackScreenCart = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumCart.CartScreen, component: FadeCartScreen, options: {} },
    ]
    return Screen;
}
