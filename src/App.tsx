import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// App pages (screens)
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { SignInScreen } from './pages/SignInScreen';
import { SignUpScreen } from './pages/SignUpScreen';
import { NoConnectionPage } from './pages/NoConnectionPage';

const Stack = createStackNavigator();
const isSignedIn = false;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        {
          isSignedIn ? (
            <>
              <Stack.Screen name="Dashboard" component={DashboardPage} />
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Profile" component={ProfilePage} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="NoConnection" component={NoConnectionPage} />
            </>
          )
          }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
