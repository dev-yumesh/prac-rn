import { Icon } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptyAddressListComponent = () => {
    return (
      <View
        style={styles.container}>
        <Icon name="pluscircleo" type="antdesign" size={30} color={'#fabe64'} />
        <Text
          style={styles.title}>
          Add Address
        </Text>
      </View>
    );
  };

export default EmptyAddressListComponent

  const styles = StyleSheet.create({
    container:{
        height: 140,
        width: 100,
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