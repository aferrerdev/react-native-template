import 'react-native-gesture-handler';
import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';

type NavigationProps = {
  navigation:  StackNavigationProp<any,'SignIn'>;
};

export const SignInScreen = (props: NavigationProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignInScreen</Text>
        <Button
            title="Go to Details"
            onPress={() => props.navigation.navigate('SignUp')}
        />
        </View>
    );
}