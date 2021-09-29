/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Auth } from "aws-amplify";
import {
  ColorSchemeName,
  View,
  Text,
  Image,
  useWindowDimensions,
  Alert,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import UsersScreen from "../screens/UsersScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          title: "Users",
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const logout = () => {
    Alert.alert("Warning", "Do you want to log out?", [
      {
        text: "Yes",
        onPress: () => Auth.signOut(),
      },
      {
        text: "No",
        onPress: () => {
          console.log("Ok");
        },
      },
    ]);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          marginLeft: -10,
        }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 29,
          fontWeight: "bold",
        }}
      >
        Signal
      </Text>
      <Ionicons
        name="ios-exit-outline"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
        onPress={logout}
      />
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
      <Pressable onPress={() => navigation.navigate("UsersScreen")}>
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </Pressable>
    </View>
  );
};

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 30,
        marginLeft: -32,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, marginLeft: 15, fontWeight: "bold" }}>
        {props.children}
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};
