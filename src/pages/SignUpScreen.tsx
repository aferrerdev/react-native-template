import 'react-native-gesture-handler';
import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';

type NavigationProps = {
  navigation:  StackNavigationProp<any,'SignUp'>;
};

export const SignUpScreen = (props: NavigationProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => props.navigation.navigate('SignIn')}
        />
        </View>
    );
}