import "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, ConfigProvider, ScrollView } from "native-base";
import RegistrationForm from "./src/components/RegistrationForm";
import Login from "./src/components/Login";
import WelcomeScreen1 from "./src/components/WelcomeScreen1";
import AuctionScreen from "./src/components/AuctionScreen";
import CarCategory from "./src/components/categories/CarCategory";
import AdminAuctionBidding from "./src/admin/AdminAuctionBidding";
import AntiqueItem from "./src/components/categories/AntiqueItem";
import GeneralItem from "./src/components/categories/GeneralItem";
import NumberPlates from "./src/components/categories/NumberPlates";
import HouseAuction from "./src/components/categories/HouseAuction";
import ArtAuction from "./src/components/categories/ArtAuction";
import TenderScreen from "./src/components/TenderScreen";
import HomeScreen from "./src/components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import BiddingScreen from "./src/components/BiddingScreen";
import AdminPanel from "./src/admin/AdminPanel";
import AdminTenderContracts from "./src/admin/AdminTenderContracts";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import AccountSetting from "./src/components/AccountSetting";
import ProfilePage from "./src/components/ProfilePage";
import Logout from "./src/components/Logout";
import HomeScreenUser from "./src/components/HomeScreenUser";
import image from "./src/components/image";
import ManageUsers from "./src/admin/ManageUsers";
import AddUser from "./src/admin/AddUser";
import UserSetting from "./src/components/UserSetting";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='WelcomeScreen1'
        options={{ headerShown: false }}
        component={WelcomeScreen1}
      />
      <Stack.Screen
        name='Login'
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name='RegistrationForm'
        options={{ headerShown: false }}
        component={RegistrationForm}
      />
      <Stack.Screen
        name='HomeScreen'
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name='AuctionScreen'
        options={{ headerShown: false }}
        component={AuctionScreen}
      />
      <Stack.Screen
        name='AntiqueItem'
        options={{ headerShown: false }}
        component={AntiqueItem}
      />
      <Stack.Screen
        name='TenderScreen'
        options={{ headerShown: false }}
        component={TenderScreen}
      />
      <Stack.Screen
        name='BiddingScreen'
        options={{ headerShown: false }}
        component={BiddingScreen}
      />
      <Stack.Screen
        name='AdminPanel'
        options={{ headerShown: false }}
        component={AdminPanel}
      />
      <Stack.Screen
        name='AdminTenderContracts'
        options={{ headerShown: false }}
        component={AdminTenderContracts}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Home'
          drawerStyle={{ backgroundColor: "red" }}
        >
          <Drawer.Screen
            name='Login'
            component={Login}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='log-in' size={size} color='red' />
              ),
            }}
          />
          <Drawer.Screen
            name='RegistrationForm'
            component={RegistrationForm}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='person-add' size={size} color='red' />
              ),
            }}
          />

          <Drawer.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='md-home' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='Account Setting'
            component={AccountSetting}
            options={{
              drawerIcon: ({ size, color }) => (
                <FontAwesome name='cog' size={size} color='red' />
              ),
            }}
          />
          <Drawer.Screen
            name='Logout'
            component={Logout}
            options={{
              drawerIcon: ({ size, color }) => (
                <FontAwesome name='sign-out' size={size} color='red' />
              ),
            }}
          />
          <Drawer.Screen
            name='AntiqueItem'
            component={AntiqueItem}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='md-home' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='AdminAuctionBidding'
            component={AdminAuctionBidding}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='md-home' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='AuctionScreen'
            component={AuctionScreen}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='hammer' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='TenderScreen'
            component={TenderScreen}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='BiddingScreen'
            component={BiddingScreen}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />

          <Drawer.Screen
            name='AdminPanel'
            component={AdminPanel}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='AdminTenderContracts'
            component={AdminTenderContracts}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />

          <Drawer.Screen
            name='Profile'
            component={ProfilePage}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />

          <Drawer.Screen
            name='HomeScreenUser'
            component={HomeScreenUser}
            options={{
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='ManageUsers'
            component={ManageUsers}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='AddUser'
            component={AddUser}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
          <Drawer.Screen
            name='UserSetting'
            component={UserSetting}
            options={{
              drawerIcon: ({ size }) => (
                <Ionicons name='receipt' size={size} color='red' />
              ),
              drawerItemStyle: { height: 0 },
            }}
          />
        </Drawer.Navigator>

      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
