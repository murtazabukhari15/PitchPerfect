import { Stack } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';
import Loader, { loaderRef } from '../component/loaderComponent.js'; // Import the Loader component
import UIModal, { modalRef } from '../component/modalComponent.js';
import {GlobalProvider} from '../utility/globalStorage.js';

export default function RootLayout() {
  const router = useRouter();
  const logoHeaderOption = {
    headerShown:true,
    title:'', 
    headerLeft: () => (
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
            onPress={() => router.back()}
          />
    ),
    headerRight: () => (
          <Image
            source={require('../assets/images/loginLogo.png')} // Replace with your company logo URL
            style={{ width: 36, height: 36, marginRight: 10 }}
            resizeMode="contain"
          />
    ), 
    headerShadowVisible:false
  }
  return (
    <GlobalProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="auth/loginScreen"  options={{headerShown:false}} />
        <Stack.Screen name="auth/sigupScreen"  options={logoHeaderOption}/>
        <Stack.Screen name="auth/forgetPasswordScreen"  options={logoHeaderOption}/>
        <Stack.Screen name="auth/resetPasswordScreen"  options={logoHeaderOption}/>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
      <Loader ref={loaderRef} />
      <UIModal ref={modalRef} />
    </GlobalProvider>
  )
}
