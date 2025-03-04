import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: 40,
        }}
      >
        <Image
          style={styles?.image}
          source={require("./../../assets/images/login-1.png")}
        />
      </View>

      <View
        style={{
          padding: 24,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "500",
            textAlign: "center",
            color: "white",
          }}
        >
          Stay On Track, Keep rolling
        </Text>
        <Text style={{
          fontSize:16,
          marginTop:12,
          color:'white',
          textAlign:'center'
        }}>Track your BJJ progress , stay consistent , level up.</Text>

        <TouchableOpacity style={styles?.button} onPress={()=>router.push('login/signIn')}>
          <Text style={{
            textAlign:'center',
            fontSize:16
          }}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.small}>Note: By clicking continue, you agree to our terms & conditions.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 490,
    // borderRadius: 23,
  },
  button:{
    backgroundColor:'white',
    padding: 15,
    borderRadius:99,
    marginTop:24,
  
  } ,
  small: {
    marginTop:4,
    fontSize:12,
    color:'white',
    textAlign:'center'
  }
});
