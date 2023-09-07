import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import ProductScreen from './app/screens/ProductScreen';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout (){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name='Home' component={HomeScreen} />
      <InsideStack.Screen name='Products' component={ProductScreen} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user)=>{
      console.log('User', user);
      setUser(user);
    });
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      {user ? <Stack.Screen options={{ headerShown: false }} name="Inside" component={InsideLayout} /> : <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


