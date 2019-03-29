import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const Button = () => {
   const { container, buttonStyle, text } = styles;
   return (
      <View style = {container}>
         <TouchableOpacity style={buttonStyle}>
            <Text style = {text}>  Sign Up  </Text>
         </TouchableOpacity>
      </View>
   )
}


const styles = StyleSheet.create ({
   container: {
    margin: 28
   },
   buttonStyle:{
    borderRadius: 110,
    backgroundColor: '#afb529',
    height:60
   },
   text: {
    padding:18,
    fontFamily:'monospace',
    alignSelf:'center',
    color: 'white'
   }
})

export default Button;
