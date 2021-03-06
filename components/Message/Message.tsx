import React from "react";
import { View, Text, StyleSheet } from "react-native";

const blue = "#3777f0";
const grey = "lightgrey";
const myID = "u1";

const Message = ({ message }) => {
  const isMe = message.user.id === myID;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.leftcontainer : styles.rightContainer,
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  leftcontainer: {
    backgroundColor: "#3777f0",
    marginLeft: "auto",
    marginRight: 10,
  },
  rightContainer: {
    backgroundColor: "lightgrey",
    marginLeft: 10,
    marginRight: "auto",
  },
});

export default Message;
