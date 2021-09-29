import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ChatroomItem({ chatroom }) {
  const user = chatroom.users[1];
  return (
    <View style={styles.container}>
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
    </View>
  );
}
