
import { uid } from 'uid';
import { FadeExploreScreen } from '../component/BottomNavigation/AniScreenBottomTab';






export enum RootStackScreenEnumExplore {
    ExploreScreen = 'ExploreScreen',
 
}

export type RootStackParamListExplore = {
    ExploreScreen: undefined,


}


export const RootStackScreenExplore = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumExplore.ExploreScreen, component: FadeExploreScreen, options: {} },

    ]
    return Screen;
}
