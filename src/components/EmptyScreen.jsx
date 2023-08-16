import React from 'react';
import {View, Text} from 'react-native';

const EmptyScreen = ({title = 'No item available'}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:"#000", fontSize:18, fontWeight:"600" }} >{title}</Text>
    </View>
  );
};

export default EmptyScreen;
