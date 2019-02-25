import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class DetailPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View> 
              <Text style={styles.headline}>
                Our Detail Page
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
  }
});
