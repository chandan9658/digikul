
// import React, { useEffect,useState, useRef } from 'react';
// import { WebView } from 'react-native-webview';
// import { PermissionsAndroid, View, ActivityIndicator, StyleSheet, BackHandler } from 'react-native';

// const App = () => {
//   const webviewref= useRef(null);
// const [canGoBack,setCanGoBack]=useState(true);
// const [canGoForward,setCanGoForward]=useState(false);
// const [currentUrl,setCurrentUrl]=useState('https://digikul.in/login');
// const backAction=()=>{
//   if(canGoBack){    
//     webviewref.current.goBack()
//     return true;

//   }else{

//     BackHandler.exitApp();
//     return false;
//   }
  

// }
// useEffect(()=>{
//   BackHandler.addEventListener('hardwareBackPress', backAction);
//   ()=>BackHandler.removeEventListener('hardwareBackPress',backAction)
// },[canGoBack])
//   return (
//         <WebView
//           ref={webviewref}
//           source={{ uri:currentUrl}}
//           onLoad={() => setCanGoBack(true)}
//           onNavigationStateChange={(navState)=>{
//             console.log(navState)
//             setCanGoBack(navState.canGoBack);
//             setCanGoForward(navState.canGoForward);
//             setCurrentUrl(navState.url)
//           }}
         
//         />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
// src/screens/LoginScreen.js
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );};
// import React, { useState } from 'react';

// const App = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement your authentication logic here
//     // For simplicity, we'll just navigate to another screen
//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default App;
