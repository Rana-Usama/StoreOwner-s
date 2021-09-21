import React from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { RFPercentage } from "react-native-responsive-fontsize";

//custom fonts
import { LibreBaskerville_400Regular } from "@expo-google-fonts/libre-baskerville"
import { Philosopher_700Bold, useFonts } from "@expo-google-fonts/philosopher";
import { Montserrat_200ExtraLight, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { Quicksand_500Medium, Quicksand_400Regular, Quicksand_700Bold } from "@expo-google-fonts/quicksand"

//screens
import SplashScreen from "./app/screens/SplashScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import Colors from "./app/config/Colors";
import LoginNumberScreen from './app/screens/LoginNumberScreen';
import SentCodeScreen from './app/screens/SentCodeScreen';
import TypeCode from './app/screens/TypeCode';
import SignupStep2 from './app/screens/SignupStep2';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MyShelvesScreen from './app/screens/MyShelvesScreen';
import MyShelvesBookedScreen from './app/screens/MyShelvesBookedScreen';
import ViewShelfEditScreen from './app/screens/ViewShelfEditScreen';
import MyBookings from './app/screens/MyBookings';
import NotificationScreen from './app/screens/NotificationScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import CreateStoreScreen from './app/screens/CreateStoreScreen';
import HomeScreen from './app/screens/HomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import ChooseStore from './app/screens/ChooseStore';
import Store1Screen from './app/screens/Store1Screen';
import Store2Screen from './app/screens/Store2Screen';
import Order1Screen from './app/screens/Order1Screen';
import CartDetails2 from './app/screens/CartDetails2';
import CalendarScreen from './app/screens/CalendarScreen';

import AppDrawer from './app/components/common/AppDrawer';
import MyProfileScreen from './app/screens/MyProfileScreen';
import MyProfileEditScreen from './app/screens/MyProfileEditScreen';
import PaymentMethodScreen from './app/screens/PaymentMethodScreen';
import TypeLocationScreen from './app/screens/TypeLocationScreen';
import ChooseLocation from './app/screens/ChooseLocation';
import PopUp from './app/components/common/PopUp';
import MyStoresScreen from './app/screens/MyStoresScreen';
import CreateShelfStep1 from './app/screens/CreateShelfStep1';
import CreateShelfStep2 from './app/screens/CreateShelfStep2';
import CreateShelfStep3 from './app/screens/CreateShelfStep3';
import ViewBookingScreen from './app/screens/ViewBookingScreen';
import Payments from './app/screens/Payments';
import RequestPayment from './app/screens/RequestPayment';
import BankInformation from './app/screens/BankInformation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,
    LibreBaskerville_400Regular,
    Montserrat_200ExtraLight,
    Montserrat_500Medium,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_700Bold,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  // screeen which have drawer icon
  const HomeDrawer = () => {
    return <Drawer.Navigator initialRouteName="DashboardScreen" drawerType={"front"} overlayColor="transparent" edgeWidth={100} drawerStyle={{ backgroundColor: Colors.white, width: "75%" }} drawerContent={(props) => <AppDrawer {...props} />}  >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ChooseStore" component={ChooseStore} />
      <Drawer.Screen name="Store1Screen" component={Store1Screen} />
      <Drawer.Screen name="Store2Screen" component={Store2Screen} />
      <Drawer.Screen name="Order1Screen" component={Order1Screen} />
      <Drawer.Screen name="CartDetails2" component={CartDetails2} />
      <Drawer.Screen name="CalendarScreen" component={CalendarScreen} />
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="CreateStoreScreen" component={CreateStoreScreen} />
      <Drawer.Screen name="MyShelvesScreen" component={MyShelvesScreen} />
      <Drawer.Screen name="MyShelvesBookedScreen" component={MyShelvesBookedScreen} />
      <Drawer.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
      <Stack.Screen name="TypeLocationScreen" component={TypeLocationScreen} />
      <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
      <Stack.Screen name="PopUp" component={PopUp} />
      <Stack.Screen name="ViewShelfEditScreen" component={ViewShelfEditScreen} />
      <Stack.Screen name="MyStoresScreen" component={MyStoresScreen} />
      <Stack.Screen name="Payments" component={Payments} />
    </Drawer.Navigator>
  }

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeDrawer">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BankInformation" component={BankInformation} />
        <Stack.Screen name="RequestPayment" component={RequestPayment} />
        <Stack.Screen name="ViewBookingScreen" component={ViewBookingScreen} />
        <Stack.Screen name="CreateShelfStep1" component={CreateShelfStep1} />
        <Stack.Screen name="CreateShelfStep2" component={CreateShelfStep2} />
        <Stack.Screen name="CreateShelfStep3" component={CreateShelfStep3} />
        <Stack.Screen name="MyProfileEditScreen" component={MyProfileEditScreen} />
        <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="MyBookings" component={MyBookings} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginNumberScreen" component={LoginNumberScreen} />
        <Stack.Screen name="SentCodeScreen" component={SentCodeScreen} />
        <Stack.Screen name="TypeCode" component={TypeCode} />
        <Stack.Screen name="SignupStep2" component={SignupStep2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Write "Homedrawer" at initialRouteName to see ordering spot screens
