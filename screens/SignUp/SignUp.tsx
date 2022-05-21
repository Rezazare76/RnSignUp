import React,{useState,useEffect} from 'react'
import { Text,View,StyleSheet,TextInput,SafeAreaView, Dimensions  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SignUpInput from './SignUpInput';

export default function SignUp() {
    const {width,height} = Dimensions.get('window');
    const [name,setName]=useState('');
    const [lName,setLname]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
  return (
    <View style={[styles.flex,{backgroundColor:'#08887d'}]}>
        <View style={[styles.flex,{flex:1}]}><Text style={[styles.secondaryColor,{fontSize:30}]}>Amout Seir</Text></View>
        <SafeAreaView style={[styles.inputContainer,{paddingLeft:50,paddingRight:50}]}>
            <SignUpInput  icon='user'   placeholder='First Name' onchange={setName}/>
            <SignUpInput icon='user'  placeholder='Last Name' onchange={setLname}/>
            {/* <TextInput secureTextEntry={true} /> */}
            <SignUpInput icon='envelope'  placeholder='E-mail Adress' onchange={setEmail} maxLength={50} keyboardType={'email-address'}/>
            <SignUpInput icon='phone' placeholder='Phone Number' onchange={setPhone} maxLength={50} keyboardType={'phone-pad'}/>
            <SignUpInput icon='key'  placeholder='Password' onchange={setEmail} maxLength={50}  secureTextEntry={true}/>
            <Text style={[styles.tertiaryCOlor,{paddingTop:20,textAlign:'center'}]}>Allready Have Account? <Text style={styles.secondaryColor}>Sign In Now!</Text></Text>
            <Text style={styles.signUpButton}>Sign Up</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:30}}>
            <FontAwesome name='google' style={[styles.secondaryColor,styles.inputIcon,{fontSize:20,}]} />
            <FontAwesome name='facebook' style={[styles.secondaryColor,styles.inputIcon,{fontSize:20,}]} />
            <FontAwesome name='apple'  style={[styles.secondaryColor,styles.inputIcon,{fontSize:20,}]} />
            </View>
        </SafeAreaView>
    </View>
  )
}
const styles=StyleSheet.create({
    flex:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    secondaryColor:{
       color:'#fda26c',
    },
    tertiaryCOlor:{
        color:'#7e9896'
    },
    inputContainer:{
        flex:3,
        justifyContent:'flex-start',
        width:'100%',
        
    },
    input:{
        borderBottomColor:'#7e9896',
        borderBottomWidth:2,
        flexDirection:'row',
    },
    inputIcon:{
        borderRightColor:'#7e9896',
        fontSize:25,
        padding:8
    },
    signUpButton:{
        backgroundColor:'#fda26c',
        
        textAlign:'center',
        padding:10,
        borderRadius:5,
        marginTop:30,
    }
})
// style {..props} fix
/**
icons : https://icons.expo.fyi/
Cannot update a component (`SignUp`) while rendering a different component (`SignUpInput`) warning : https://stackoverflow.com/questions/62236000/cannot-update-a-component-app-while-rendering-a-different-component
props defult value : https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/
*/