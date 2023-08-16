import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import EmptyScreen from '../components/EmptyScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {prescriptionArrayName} from '../utils/constants';
import moment from 'moment';
import {images} from '../utils/images';
import {Icon} from '@rneui/themed';
import PrescriptionCard from '../components/PrescriptionCard';
import LoaderScreen from './LoaderScreen';

const MyPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPrescriptionsAsync = async () => {
    setLoading(true)
    let data = await AsyncStorage.getItem(prescriptionArrayName);
    if (data) {
      setPrescriptions(JSON.parse(data));
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPrescriptionsAsync()
  }, []);

  const handleDelete = async itemid => {
    try {
      let shadowData = [...prescriptions];
      let filteredItem = shadowData.filter(item => item.id !== itemid);
      await AsyncStorage.setItem(
        prescriptionArrayName,
        JSON.stringify(filteredItem),
      );
      await loadPrescriptionsAsync()
    } catch (error) {
      alert('Unable to delete');
    }
  };

  if(loading) return <LoaderScreen/>

  return (
    <ScrollView style={{paddingHorizontal: '5%', backgroundColor:"#fff" }}>
      <Text>MyPrescription</Text>
      {prescriptions.length ? (
        prescriptions.map(prescription => (
          <PrescriptionCard
            key={'prescriptionItem' + prescription.id}
            prescription={prescription}
            handleDelete={() => handleDelete(prescription.id)}
          />
        ))
      ) : (
        <EmptyScreen />
      )}
    </ScrollView>
  );
};

export default MyPrescription;
