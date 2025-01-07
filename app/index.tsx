import * as React from 'react';
import { View } from "react-native";
import Login from './auth/loginScreen.js';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'white'
      }}
    >
      <Login></Login>
    </View>
  );
}
