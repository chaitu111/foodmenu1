import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight } from 'react-native';
import { Image } from 'react-native';
import HeaderPart from './HeaderPart';
import FooterPart from './FooterPart';

export default class Homepage extends React.Component {

  OpenSecondActivityFunction = () =>
    //Its using for navigate second screen which is present on App.js.
    {
        this.props.navigation.navigate('DetailPage');
    };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
       <HeaderPart />
        <View> 
              <Text style={styles.headline}>
                Food Menu 
              </Text>
        </View> 
         <View style={styles.box}>
            <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} 
            style={[{}]}>
            <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
            <Image source = {{uri:'https://img.icons8.com/ios-glyphs/30/000000/dining-room.png'}} style = {{ width: 50, height: 50 }} />
            </Text>
            </TouchableHighlight>
          </View> 

          <View style={styles.box}>
             <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/rice-bowl.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
              </TouchableHighlight>
          </View>

          <View style={styles.box}>
              <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/food.png'}} style = {{ width: 50, height: 50 }} />
              </Text>
              </TouchableHighlight>
          </View> 

          <View style={styles.box}>
             <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/macaron.png'}} style = {{ width: 50, height: 50 }} />
                </Text>
              </TouchableHighlight>
          </View> 
          <View style={styles.box}>
              <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/kebab.png'}} style = {{ width: 50, height: 50 }} />
                </Text>
              </TouchableHighlight>
          </View> 
          <View style={styles.box}>
              <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/fish.png'}} style = {{ width: 50, height: 50 }} />
                </Text>
              </TouchableHighlight>
          </View> 
          <View style={styles.box}>
              <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/ice-pop-yellow.png'}} style = {{ width: 50, height: 50 }} />
                </Text>
              </TouchableHighlight>
          </View> 
          <View style={styles.box}>
              <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}>  
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/soda-water.png'}} style = {{ width: 50, height: 50 }} />
                </Text>
              </TouchableHighlight>
          </View> 
          <View style={styles.box}>
              <TouchableHighlight onPress={() => navigate("Detail", {screen: "DetailPage"})} style={[{}]}>
              <Text style={{fontSize: 50, textAlign: 'center', color: '#fff'}}> 
                <Image source = {{uri:'https://img.icons8.com/ios-glyphs/50/000000/papaya.png'}} style = {{ width: 50, height: 50 }} />
                </Text>
              </TouchableHighlight>
          </View> 
          <View> 
        </View> 
        <FooterPart />
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
  },
  
});
