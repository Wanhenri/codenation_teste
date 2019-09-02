import React from 'react';
import moment from 'moment';
import { StyleSheet, View, Image, Text } from 'react-native';
 
export default function AccelerationItem({ data }) {
   
  return (
    <View style={styles.listBlock}>              
        <Image            
        source={data.banner_url ? {uri: data.banner_url } : {uri:'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'} }        
        style={styles.listImages}
        />
        <View style={styles.listBlockText}>
            <Text style={styles.listName}>
                {data.name}
            </Text>
            <Text style={styles.listLocation}>
                {data.location}
            </Text>
            <Text style={styles.listData}>
                {moment(data.subscription_finish_at).format('DD/MM/YYYY')}
            </Text>
      </View>
    </View>              
  );
}
 
const styles = StyleSheet.create({
  listBlock:{
    flex:1,
    flexDirection:"row",
    borderColor:'#fefef9',
    borderBottomWidth:1,
    elevation:1,
    margin:10  
  },
  listBlockText:{
    padding:15
  },
  listName:{
    fontSize:20,
  },
  listLocation:{
    fontSize:16,
    color:"#7800ff",
    paddingTop:5,
    paddingBottom:5
  },
  listData:{
    fontSize:16
  },
  listImages:{
    width: 100,
    height: 100,
    marginTop:1,
    marginLeft:2
  }
});
