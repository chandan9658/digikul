// src/screens/HomeScreen.js
import { WebView } from 'react-native-webview';
import React, { useEffect,useState, useRef } from 'react';

import {  View, Text, Button, StyleSheet, BackHandler } from 'react-native';


const HomeScreen = () => {
    const webviewref= useRef(null);
// const [canGoBack,setCanGoBack]=useState(true);
// const [canGoForward,setCanGoForward]=useState(false);
// const [currentUrl,setCurrentUrl]=useState('https://app.continuakids.com');
// const backAction=()=>{
//   if(canGoBack){    
//     webviewref.current.goBack()
//     return true;

//   }else{

//     BackHandler.exitApp();
//     return false;
//   }
// }
  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   // For simplicity, we'll navigate back to the login screen
  //   navigation.navigate('Login');
  // };
  // useEffect(()=>{
  //     BackHandler.addEventListener('hardwareBackPress', backAction);
  //     ()=>BackHandler.removeEventListener('hardwareBackPress',backAction)
  //   },[canGoBack])
  return (
    <View style={styles.container}>
      <WebView
          ref={webviewref}
          source={{ uri:'https://app.continuakids.com'}}
          // onLoad={() => setCanGoBack(true)}
          // onNavigationStateChange={(navState)=>{
          //   console.log(navState)
          //   setCanGoBack(navState.canGoBack);
          //   setCanGoForward(navState.canGoForward);
          //   setCurrentUrl(navState.url)
          // }}
         
        />
     </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
