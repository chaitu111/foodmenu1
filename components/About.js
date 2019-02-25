import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { Ionicons, FontAwesome } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
 

export default class Homepage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View> 
              <Text style={styles.headline}>
                Our Food Menu
              </Text>
        </View> 
         <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/30/000000/dining-room.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 

          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/rice-bowl.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View>

          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/food.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 

          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/macaron.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 
          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/kebab.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 
          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/fish.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 
          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/ice-pop-yellow.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 
          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/soda-water.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 
          <View style={styles.box}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/papaya.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
          </View> 
          <View> 
              <Text style={styles.headline}>
                Designed & Developed By Chaitanya Koripella
              </Text>
        </View> 
       </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 30,
    justifyContent: 'space-between' 
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 0,
    width: 300,
    backgroundColor: 'yellow',
  },
  box: {
      width: 100, 
      height: 120, 
      backgroundColor: '#00BCD4', 
      justifyContent: 'center',
      borderColor: '#d6d7da',
      borderRadius: 0,
      borderWidth: 0.5,
  }
});
