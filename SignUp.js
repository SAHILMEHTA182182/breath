import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, TextInput, Image, StatusBar } from 'react-native';
import { sign_up, logo  } from '../../images';
import Button from './Button';

class SignUp extends Component {
    render() {
        return (
        <View style={styles.mainContainer}>  
           <StatusBar barStyle = "light-content" hidden = {false}  backgroundColor = "#B266FF" />
             <ImageBackground source= { sign_up } style={styles.backgroundImageContainer} >
           
                <Image source= { logo }  style={styles.logoImage} />
               
                    <View style={styles.signupContainer}>
                       <Text style={styles.textLabel}> Username </Text>
                       <TextInput
                       style={styles.textInputStyle}
                       placeholder="john carter"
                       placeholderTextColor="white"
                       />
                    </View>

                    <View style={styles.signupContainer}>
                       <Text style={styles.textLabel}> Email Address </Text>
                       <TextInput
                       style={styles.textInputStyle}
                       placeholder="johncarter@gmail.com"
                       placeholderTextColor = "white"  
                       />
                    </View>
 
                    <View style={styles.signupContainer}>
                       <Text style={styles.textLabel}> Password </Text>
                       <TextInput
                       style={styles.textInputStyle}
                       placeholder="*****************"
                       placeholderTextColor="white" 
                       />
                    </View>

                    <View style={styles.signupContainer}>
                       <Text style={styles.textLabel}> Confirm  Password </Text>
                       <TextInput
                       style={styles.textInputStyle}
                       placeholder="*****************"
                       placeholderTextColor="white"  
                       />
                    </View>

                    <View>
                        <Button />
                    </View>

                    <View>
                        <Text style={styles.footerText}> Already have an account ?
                        <Text style= {{ color: 'orange' }}> Sign In </Text> </Text>
                    </View>

            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
    },
    backgroundImageContainer: {
    width: '100%', 
    height: '100%'
    },
    logoImage : {
    resizeMode: 'contain',         
    width:170,
    height:170,
    opacity: 0.9,
    alignSelf: 'center',
    marginTop: 25
    },
    signupContainer: {
    marginTop: 25,
    borderBottomWidth: 0.3,
    borderBottomColor: "grey"
    },
    textLabel: {
    color: 'grey',
    fontFamily:'Montserrat (OTT)',
    alignSelf: 'center',
    fontSize: 16
    },
    footerText: {
    color: 'white',
    fontFamily:'Montserrat (OTT)',
    alignSelf: 'center'
    },
    textInputStyle: {
    alignSelf: 'center',
    fontFamily:'Montserrat (OTT)',
    fontSize: 18
    }
});

export default SignUp;
