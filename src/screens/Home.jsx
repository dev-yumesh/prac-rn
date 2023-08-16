import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button} from '@rneui/themed';
const Home = ({navigation}) => {
  return (
    <ScrollView style={{paddingHorizontal: '5%', backgroundColor:"#fff" }}>
      <View style={{marginTop: '10%'}}>
        <Button
          title={'Upload Prescription'}
          containerStyle={{marginTop: 20}}
          buttonStyle={{backgroundColor: '#4087a6', borderRadius: 8}}
          onPress={() => navigation.navigate('UploadPrescription')}
        />

        <Button
          title={'My Prescription'}
          containerStyle={{marginTop: 20}}
          buttonStyle={{backgroundColor: '#4087a6', borderRadius: 8}}
          onPress={() => navigation.navigate('MyPrescription')}
        />

        <Button
          title={'Order Summary'}
          containerStyle={{marginTop: 20}}
          buttonStyle={{backgroundColor: '#4087a6', borderRadius: 8}}
          onPress={() => navigation.navigate('OrderSummary')}
        />

        <Button
          title={'Order Status'}
          containerStyle={{marginTop: 20}}
          buttonStyle={{backgroundColor: '#4087a6', borderRadius: 8}}
          onPress={() => navigation.navigate('OrderStatus')}
        />

        <Button
          title={'Select Patient and Address'}
          containerStyle={{marginTop: 20}}
          buttonStyle={{backgroundColor: '#4087a6', borderRadius: 8}}
          onPress={() => navigation.navigate('SelectPatientAndAddress')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
