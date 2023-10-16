// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { executePostRequest } from '../utils/apiFunction';
import Images from '../assets/Images/index'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [multipleAccount, setMultipleAccount] = useState(false);
  const getUserType=async ()=>{
    setIsPassword(false)
    setMultipleAccount(true)
    setIsEmail(false)
    let body='sanjeevkumar908@digikul.in'
  //   body ={
  //     "username": "+917291987007",
  //     "pswd": "719855e8f4ebd94341277b0b0d50b75c5187133f"
  // }
    let header=null
     try {
      console.log('hi')
      let response = await executePostRequest('login', header, body);
      console.log('hello')
      console.log('test', response)
    } catch (e) {
      console.log('error2 -', e)
    }
    // let response = await executePostRequest('validCredential', header, body);
    // console.log('test',response)
  }
  const handleLogin = async () => {
    body = {
      "username": "+917291987007",
      "pswd": "719855e8f4ebd94341277b0b0d50b75c5187133f"
    }
    let header = null;
    // try {
    //   console.log('hi')
    //   let response = await executePostRequest('validCredential', header, body);
    //   console.log('hello')
    //   console.log('test', response)
    // } catch (e) {
    //   console.log('error2 -', e)
    // }
    // setIsPassword(false)
    // setMultipleAccount(true)
    // setIsEmail(false)
    // Implement your authentication logic here
    // For simplicity, we'll just navigate to another screen
    navigation.navigate('Home');
  };
  const previousFromPassword=async ()=>{
    setIsPassword(false)
    setIsEmail(false)
    setMultipleAccount(true)
  }
  const previousFromMultiple=async ()=>{
    setIsPassword(false)
    setIsEmail(true)
    setMultipleAccount(false)

  }
  const nextFromMultiple=async ()=>{
    setMultipleAccount(false)
    setIsPassword(true)
    setIsEmail(false)
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

          <Text style={{ color: 'black', fontSize: 60, marginTop: 20 }}>Sign in to Digikul</Text>
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
            onPress={getUserType}>
            <Text style={{ color: 'white', fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
        </View>)}
        {multipleAccount &&( <View>
          <Text style={{color:'black',fontSize:20,fontWeight:'700',marginBottom:15}}>Choose User Type</Text>
          <View style={{flexDirection:'row', justifyContent:'space-evenly',marginBottom:25}}>
            <TouchableOpacity onPress={() => setOption('1')} style={{backgroundColor:option == '1' ? '#00A0AE' :'#D3D3D3',padding:5,borderRadius:5}}>
            <Image source={Images.singleAccount}/>
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 15,textAlign:'center' }}>Individual</Text>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOption('2')} style={{backgroundColor:option == '2' ? '#00A0AE' :'#D3D3D3',padding:5,borderRadius:5}}>
          <Image source={Images.multipleAccount}/>
          <Text style={{ color: 'black', fontWeight: '700', fontSize: 15,textAlign:'center' }}>Entity</Text>
            </TouchableOpacity>
              <TouchableOpacity onPress={() => setOption('3')} style={{backgroundColor:option == '3' ? '#00A0AE' :'#D3D3D3',padding:5,borderRadius:5}}>
          <Image source={Images.reseller}/>
          <Text style={{ color: 'black', fontWeight: '700', fontSize: 15,textAlign:'center' }}>Reseller</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',width:'47%', height: 50, justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={previousFromMultiple}>
            <Text style={{ color: 'white', fontSize: 16 }}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',width:'47%', height: 50, justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={nextFromMultiple}>
            <Text style={{ color: 'white', fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
          </View>
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
          navigation.navigate('Signup')
        }} style={{
          backgroundColor: 'lightgray', paddingVertical: 15, paddingHorizontal: 5, marginTop: 15
          , alignItems: 'center'
        }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }} >Don't have an account? <Text style={{ color: 'blue' }}>Create an account</Text></Text>

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

export default LoginScreen;
