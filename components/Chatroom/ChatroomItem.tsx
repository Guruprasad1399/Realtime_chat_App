import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ChatroomItem({ chatroom }) {
  const user = chatroom.users[1];

  const navigation = useNavigation();

  const Onpress = () => {
    navigation.navigate("ChatRoom", { id: chatroom.id });
  };

  return (
    <Pressable onPress={Onpress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.profilepic}
      />
      {chatroom.newMessage && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatroom.newMessage}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatroom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatroom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
