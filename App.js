import React from 'react';
import { StyleSheet, Text,  View,  KeyboardAvoidingView, Image  } from 'react-native';
import LoginFormTest from './app/components/pages/LoginFormTest';
import LoginForm from './app/components/pages/LoginForm';
import SignUpForm from './app/components/pages/SignUpForm';
import SignUp from './app/components/pages/router';

export default class App extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                <SignUp/>
                </View> 
    );
}
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container:{
        flex: 1, 
    },
});