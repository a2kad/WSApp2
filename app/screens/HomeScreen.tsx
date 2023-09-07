import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: RouterProps) => {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Button onPress={()=> navigation.navigate('Products')} title='Open Products' />
            <Button onPress={()=> FIREBASE_AUTH.signOut()} title='Logout' />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})