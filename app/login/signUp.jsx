import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
 import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";
 
 
export default function signUp() {
  const route = useRouter()
   return (
       <View style={{ padding: 24,paddingTop:0, margin: 'auto' }}>
         <Text style={styles.textHeader}>Create New Account</Text>
       
         <View
           style={{
             marginTop: 24,
           }}
         >
           <Text>Full Name</Text>
           <TextInput style={styles.textInput} placeholder="Enter Full Name" />
         </View>
         <View
           style={{
             marginTop: 24,
           }}
         >
           <Text>Email</Text>
           <TextInput style={styles.textInput} placeholder="Enter Email" />
         </View>
         <View
           style={{
             marginTop: 24,
           }}
         >
           <Text>Password</Text>
           <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Enter Password" />
         </View>
         <TouchableOpacity onPress={()=>route.push('/')} style={styles.button}>
           <Text style={{ fontSize:16,textAlign:'center',color:'white'}}>Create Account</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>route.push('login/signIn')} style={styles.buttonCreate}>
           <Text style={{ fontSize:16,textAlign:'center',color:Colors.PRIMARY}}>Already a user? Sign In</Text>
         </TouchableOpacity>
       </View>
  )
}


const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  subText: {
    fontSize: 30,
    fontWeight: "400",
    marginTop: 10,
    color: Colors.GRAY,
  }, 
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.DARK_GRAY,
    marginTop: 5,
    color: Colors.GRAY,
    backgroundColor: "white",
  },
  button:{
    padding:15,
    borderRadius:10,
    color:'white',
    backgroundColor:Colors.PRIMARY,
    marginTop:34,
    textAlign:'center'

  }, 
  buttonCreate:{
    padding:15,
    borderRadius:10,
    color:'white',
    backgroundColor:'white',
    marginTop:12,
    textAlign:'center',
    borderWidth:1,
    borderColor:Colors.PRIMARY 

  }
});