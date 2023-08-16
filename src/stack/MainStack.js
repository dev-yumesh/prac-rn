import React, { useEffect } from 'react';
import { Image } from "react-native";
import UploadPrescription from '../screens/UploadPrescription';
import MyPrescription from '../screens/MyPrescription';
import OrderStatus from '../screens/OrderStatus';
import OrderSummary from '../screens/OrderSummary';
import SelectPatientAndAddress from '../screens/SelectPatientAndAddress';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { prescriptionArrayName } from '../utils/constants';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {

    (async function(){
      const prescriptionData = await AsyncStorage.getItem(prescriptionArrayName)
      console.log('prescriptionData', prescriptionData)
      if(!prescriptionData){
        await AsyncStorage.setItem(prescriptionArrayName,"[]")
      }
    })()

  }, [])
  

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={()=>({
      headerShadowVisible:false
      
    })} >
      <Stack.Screen name="Home" component={Home}
      options={{
        title: 'Home',
      }}
      />
      <Stack.Screen
        name="UploadPrescription"
        component={UploadPrescription}
        options={{
          title: 'Upload Prescription',
          headerTitleAlign: 'center',

        }}
      />
      <Stack.Screen name="MyPrescription" component={MyPrescription} options={{
          title: 'My Prescriptions',
          headerTitleAlign: 'center',

        }} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} 
      options={{
          title: 'Order Status',
          headerTitleAlign:"center"

        }} 
        />
      <Stack.Screen name="OrderSummary" component={OrderSummary} 
       options={{
        title:"Order Summary"
       }}
      />
      <Stack.Screen
        name="SelectPatientAndAddress"
        component={SelectPatientAndAddress}
        options={{
          title: 'Select Patient & Address',
          headerTitleAlign:"center"

        }} 
      />
    </Stack.Navigator>
  );
};

export default MainStack;
