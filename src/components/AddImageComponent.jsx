import { Icon } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddImageComponent = () => {
    return (
      <View
        style={styles.container}>
        <Icon name="pluscircleo" type="antdesign" size={30} color={'#fabe64'} />
        <Text
          style={styles.title}>
          Add Image
        </Text>
      </View>
    );
  };

export default AddImageComponent

  const styles = StyleSheet.create({
    container:{
        height: 140,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },

      title:{
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
      }
    
  })