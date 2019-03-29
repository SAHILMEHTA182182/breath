import React, { Component } from 'react';
//import { View } from 'react-native';
import  SplashScreen  from './components/screens/SplashScreen';
import  SignUp  from './components/screens/SignUp';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { currentScreen : 'SplashScreen'};
        setTimeout(() => {
        this.setState({ currentScreen : 'SignUp'})
        }, 3000 )
        
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <SignUp />
            return mainScreen
        // return (
        //      <View style={{ flex:1 }}>

        //        < SignUp />

        //      </View>
        // );
        
    }
}

export default App;
