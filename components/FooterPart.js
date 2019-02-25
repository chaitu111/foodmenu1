import React, { Component } from 'react';
import { View , Text , StyleSheet } from 'react-native';

class FooterPart extends Component {
    render() {
        return (
        <View style={ styles.footer }>
        <Text> CopyRight @ Chaitanya Koripella </Text> 
        </View>
    );
   }
}

const styles = StyleSheet.create({
    footer: {
        top:30,    
        backgroundColor:'grey',
        justifyContent: 'center',
        alignItems:'center',
        height:50,
    }
});

export default FooterPart;