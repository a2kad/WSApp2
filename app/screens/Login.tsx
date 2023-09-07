import { View, Text, Platform, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const reponse = await signInWithEmailAndPassword(auth, email, password);
            console.log(reponse);

        } catch (error: any) {
            console.log(error);
            alert('Sign In faled : ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const reponse = await createUserWithEmailAndPassword(auth, email, password);
            console.log(reponse);
            alert('Check your emails!');
        } catch (error: any) {
            console.log(error);
            alert('Sign Up faled : ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.top} >
                <Text style={styles.textTop}>
                    Bienvenue sur WebSolidarité App
                </Text>
                <Text style={styles.textSubTop}>
                Renseigner votre numéro de téléphone et e-mail pour continuer
                </Text>
            </View>
            <View style={styles.middle} >
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                    <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
                    {
                        loading ? <ActivityIndicator size="large" color="#0000ff" />
                            : <>
                                <Button title='Login' onPress={signIn} />
                                <Button title='Create Account' onPress={signUp} />
                            </>
                    }
                </KeyboardAvoidingView>
            </View>
            <View style={styles.bottom} >
                <Text>
                    Bienvenue sur WebSolidarité App
                </Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    top: {
        flex: 0.33,
        marginTop:35,
        justifyContent: 'center',
    
    },
    middle: {
        flex: 0.33,
        backgroundColor: 'beige',
        
    },
    bottom: {
        flex: 0.33,
        backgroundColor: 'pink',
        marginBottom:35,
    },
    textTop:{
        fontSize: 36,
        fontWeight: '600'
    },
    textSubTop:{
        fontSize: 28,
        marginTop: 20,
        color: '#666',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    }
})