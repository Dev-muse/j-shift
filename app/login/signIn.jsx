import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../../constant/Colors";
import Colors from "../../constant/Colors";
 import { useRouter } from "expo-router";

export default function signIn() {
  const router = useRouter()
  return (
    <View style={{  padding: 24,paddingTop:0, margin: 'auto' }}>
      <Text style={styles.textHeader}>Let's Sign You In</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You've been missed!</Text>
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
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize:16,textAlign:'center',color:'white'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>router.push('login/signUp')} style={styles.buttonCreate}>
        <Text style={{ fontSize:16,textAlign:'center',color:Color.PRIMARY}}>Create</Text>
      </TouchableOpacity>
    </View>
  );
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
    color: Color.GRAY,
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
    borderColor:Color.PRIMARY 

  }
});
