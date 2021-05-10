import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo} />
            <AppForm
                initialValues={{ email:"", password:"" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email" 
                    name="email"
                    placeholder="Email" 
                    textContentType="emailAddress"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock" 
                    name="password"
                    placeholder="Password" 
                    textContentType="password"
                    secureTextEntry={true}
                />
                <AppSubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});