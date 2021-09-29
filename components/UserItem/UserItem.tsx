import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function UserItem({ user }) {
  const navigation = useNavigation();

  const Onpress = () => {
    //Create a chat room
  };

  return (
    <Pressable onPress={Onpress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.profilepic}
      />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}
