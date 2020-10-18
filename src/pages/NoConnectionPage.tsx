import 'react-native-gesture-handler';
import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';

type NavigationProps = {
  navigation:  StackNavigationProp <any,'NoConnection'>;
};

export const NoConnectionPage = (props: NavigationProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No connection page</Text>
        </View>
    );
}