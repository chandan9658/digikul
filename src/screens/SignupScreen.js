// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { executePostRequest } from '../utils/apiFunction';
import Images from '../assets/Images/index'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const handleLogin = async () => {
    body = {
      "username": "+917291987007",
      "pswd": "719855e8f4ebd94341277b0b0d50b75c5187133f"
    }
    let header = null;
    try {
      console.log('hi')
      let response = await executePostRequest('validCredential', header, body);
      console.log('hello')
      console.log('test', response)
    } catch (e) {
      console.log('error2 -', e)
    }
    setIsPassword(true)
    setIsEmail(false)
    // Implement your authentication logic here
    // For simplicity, we'll just navigate to another screen
    // navigation.navigate('Home');
  };
  const previousFromPassword=async ()=>{
    setIsPassword(false)
    setIsEmail(true)
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView
      showsVerticalScrollIndicator={true}
      > */}
      <ImageBackground
        source={Images.banner}
        style={{ height: 320, width: '100%', resizeMode: 'cover' }}
      >
        <View style={{ margin: 10 }}>
          <Image source={Images.logo} />
          <Text style={{ color: 'black' }}>Virtual gurukul for all your business needs</Text>

          <Text style={{ color: 'black', fontSize: 60, marginTop: 20 }}>Sign up to Digikul</Text>
        </View>

      </ImageBackground>













      <View style={{ margin: 15 }}>
       {isEmail &&( <View>
          <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>Email ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Id"
            value={email}
            onChangeText={setEmail}
            secureTextEntry
          />

          <TouchableOpacity
            style={{
              backgroundColor: 'green', height: 50, justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleLogin}>
            <Text style={{ color: 'white', fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
        </View>)}
        { isPassword  && (<View>
          <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Pssword"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',width:'47%', height: 50, justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={previousFromPassword}>
            <Text style={{ color: 'white', fontSize: 16 }}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',width:'47%', height: 50, justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleLogin}>
            <Text style={{ color: 'white', fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          </View>
        </View>)}
        <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
          <Text style={{ color: 'blue', fontSize: 17, fontWeight: 500 }}>Forgot Password</Text>
        </View>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Login')
        }} style={{
          backgroundColor: 'lightgray', paddingVertical: 15, paddingHorizontal: 5, marginTop: 15
          , alignItems: 'center'
        }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }} >Do you already have an  account? <Text style={{ color: 'blue' }}>Log in</Text></Text>

        </TouchableOpacity>
      </View>



      {/* <ImageBackground
        source={Images.footer}
        style={{height:300,width:'100%',resizeMode:'cover',marginTop:15}}
      >
        <View style={{margin:30}}>
        <Image source={Images.logo} />
        <Text style={{color:'white',marginVertical:15}}>Virtual gurukul for all your business needs</Text>
        <Text style={{color:'white',textAlign:'justify',fontSize:16}}>An initiative by a group of qualified and well recognised business consultants. The motto is to provide business planning, wealth management and start-up queries on one platform.</Text>
        <Text style={{color:'white',marginTop:15}}>Read More {`>>`}</Text>
        </View>
         
        
      </ImageBackground> */}
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <View style={{ backgroundColor: 'white', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '500', fontSize: 12 }}>COPYRIGHT © 2023 ALL RIGHTS RESERVED | <Image source={Images.poweredBy} /></Text>

        </View>
      </View>
      {/* </ScrollView> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white'
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
  imageBackground: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,

  },
});

export default SignupScreen;
