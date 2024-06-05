
import { uid } from 'uid';
import { FadeAccountScreen } from '../component/BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumAccount {
    AccountScreen = 'AccountScreen',
}

export type RootStackParamListAccount = {
    AccountScreen: undefined,
}


export const RootStackScreenAccount = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumAccount.AccountScreen, component: FadeAccountScreen, options: {} },


    ]
    return Screen;
}
