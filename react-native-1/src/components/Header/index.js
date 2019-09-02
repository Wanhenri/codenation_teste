import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';
 
 
export default class Header extends Component {
  render() {
    return (
        <View style={styles.headerContainer}>
        <Image
            style={styles.logo}
            source={{uri:'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png'}}
        />
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  logo:{
    width:260,
    height:40,
    marginTop:40,
    marginBottom:15,
    marginLeft:10
  },
  headerContainer:{
    borderBottomColor:'#7800ff',
    borderBottomWidth:3
  }
});