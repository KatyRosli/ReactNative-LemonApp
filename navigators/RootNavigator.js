import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name='WelcomeScreen'
      component={WelcomeScreen}
      options={{
        headerTitle: 'Welcome',
        headerTitleAlign: 'center'
      }}
      />
      <Stack.Screen
      name='SubscribeScreen'
      component={SubscribeScreen}
      options={{
        headeTitle: 'Subscribe',
        headeTitleAlign: 'center'
      }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;