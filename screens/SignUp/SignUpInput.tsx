import React,{useEffect,useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {Text,View,TextInput,StyleSheet, Dimensions} from 'react-native';
import { placeholder } from '@babel/types';
import { Entypo } from '@expo/vector-icons';
interface Route {
   icon?:any,
   maxLength?:number,
   placeholder:string,
   onchange:Function,
   keyboardType?:any,
   secureTextEntry?:boolean
}

export default function SignUpInput({secureTextEntry=false,keyboardType="default",icon='user',onchange,placeholder,maxLength=10}:Route) {
    const {width,height} = Dimensions.get('window');
    let [handelOnchange, setHandelOnchange] = useState('');
useEffect(()=>{onchange(handelOnchange)},[handelOnchange])
  return (
    <View style={[styles.input,{paddingTop:20}]}>
        <FontAwesome name={icon}  style={[styles.secondaryColor,styles.inputIcon,{fontSize:20,width:width*0.12}]} />
        <TextInput style={{color:'#7e9896',paddingLeft:10,width:'75%'}} maxLength={maxLength} onChangeText={setHandelOnchange} placeholder={placeholder} placeholderTextColor={'#7e9896'} keyboardType={keyboardType} secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles=StyleSheet.create({
    input:{
        borderBottomColor:'#7e9896',
        borderBottomWidth:2,
        flexDirection:'row',
    },
    inputIcon:{
        borderRightColor:'#7e9896',
        borderRightWidth:2,
        fontSize:25,
        padding:8
    },
    secondaryColor:{
        color:'#fda26c',
     },
     
});
