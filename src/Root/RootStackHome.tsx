import { uid } from 'uid';


import { FadeHomeScreen } from '../component/BottomNavigation/AniScreenBottomTab';

export enum RootStackScreenEnumHome {
    HomeScreen = 'HomeScreen',

}

export type RootStackParamListHome = {
    HomeScreen: undefined,

}


export const RootStackScreenHome = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumHome.HomeScreen, component: FadeHomeScreen, options: {} },
    ]
    return Screen;
}
