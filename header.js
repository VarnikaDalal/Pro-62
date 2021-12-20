import React from 'react'
import {Text,TouchableOpacity,View} from 'react-native'

export default class header extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'yellow'}}>
        <Text style={{alignSelf:'center',color:'black',height:50,fontSize:30}}>School Attendance App</Text>
      </View>
    )
  }
}