import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './screens/Main'
import NewEntry from './screens/NewEntry'
import Report from './screens/Report'

const AppStack = createStackNavigator({
    Main: {
        screen:Main,
        navigationOptions:{
            header:null
        }
    },
    NewEntry:{
        screen:NewEntry,
        navigationOptions:{
            header:null
        }
    },
    Report: {
        screen:Report,
        navigationOptions:{
            header:null
        }
    },
}, {
    initialRouteName: 'Main'
})

const Routes = createAppContainer(AppStack)

export default Routes