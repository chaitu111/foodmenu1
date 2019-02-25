import React, { Component } from 'react';
import { View , Text , StyleSheet } from 'react-native';

class HeaderPart extends Component {

    render() 
    {
        return (
            <View style={ styles.headerstyle }>
            <Text> Header Part </Text>
            </View>
        );
   }
}

const styles = StyleSheet.create({
    headerstyle: {
    backgroundColor:'grey',
    justifyContent: 'center',
    alignItems:'center',
    height:50,
    }
});

export default HeaderPart;


