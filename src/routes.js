
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Loading from './screens/Loading'
import Welcome from './screens/Welcome'
import Main from './screens/Main'
import NewEntry from './screens/NewEntry'
import Report from './screens/Report'

const AppStack = createSwitchNavigator({
    Loading:{
        screen:Loading
    },
    Welcome: {
        screen: Welcome
    },
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
    initialRouteName: 'Loading',
    backBehavior:'history'
})

const Routes = createAppContainer(AppStack)

export default Routes