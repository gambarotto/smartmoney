import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './screens/Main'
import NewEntry from './screens/NewEntry'
import Report from './screens/Report'

const AppStack = createSwitchNavigator({
    Main: {
        screen:Main,
    },
    NewEntry:{
        screen:NewEntry,
    },
    Report: {
        screen:Report,
    },
}, {
    //initialRouteName: 'NewEntry',
    initialRouteName: 'Main',
    backBehavior:'history'
})

const Routes = createAppContainer(AppStack)

export default Routes