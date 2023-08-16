import {Icon, CheckBox, Button} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, ScrollView, Text, View, StyleSheet} from 'react-native';
import RenderAddressItem from '../components/RenderAddressItem';
import RenderPatientItem from '../components/RenderPatientItem';
import EmptyPatientListComponent from '../components/EmptyPatientListComponent';
import EmptyAddressListComponent from '../components/EmptyAddressListComponent';

const SelectPatientAndAddress = () => {
  const patients = [
    {
      id: 1,
      name: 'Patient 1',
      patientGroup: 'GrandPatient',
    },
    {
      id: 2,
      name: 'Patient 2',
      patientGroup: 'GrandPatient',
    },
    {
      id: 3,
      name: 'Patient 3',
      patientGroup: 'Children',
    },
    {
      id: 4,
      name: 'Patient 4',
      patientGroup: 'GrandPatient',
    },
    {
      id: 5,
      name: 'Patient 5',
      patientGroup: 'Normal',
    },
  ];

  const addresses = [
    {
      id: 1,
      address: '123 Main Street, CityA, CountryX',
      addressGroup: 'Home',
    },
    {
      id: 2,
      address: '456 Elm Avenue, CityB, CountryY',
      addressGroup: 'Company',
    },
    {
      id: 3,
      address: '789 Oak Lane, CityC, CountryZ',
      addressGroup: 'Home',
    },
    {
      id: 4,
      address: '987 Pine Road, CityD, CountryW',
      addressGroup: 'Home',
    },
    {
      id: 5,
      address: '654 Maple Boulevard, CityE, CountryV',
      addressGroup: 'Company',
    },
  ];

  return (
    <ScrollView style={{paddingHorizontal: '5%', backgroundColor:"#fff"  }}>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Patient</Text>
        <View>
          <FlatList
            horizontal
            data={patients}
            ListEmptyComponent={() => <EmptyPatientListComponent />}
            ListHeaderComponent={() => <EmptyPatientListComponent />}
            renderItem={({item, index}) => <RenderPatientItem data={item} />}
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Addresses</Text>
        <View>
          <FlatList
            horizontal
            data={addresses}
            ListEmptyComponent={() => <EmptyAddressListComponent />}
            ListHeaderComponent={() => <EmptyAddressListComponent />}
            renderItem={({item, index}) => <RenderAddressItem data={item} />}
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Payment Methods</Text>
        <View style={styles.paymentMethodItemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="dollar" size={20} type="font-awesome" color={'#0005'} />
            <Text style={[styles.title, {fontSize: 18, marginLeft: 10}]}>
              Cash
            </Text>
          </View>
          <View>
            <CheckBox
              size={20}
              containerStyle={styles.checkboxContainer}
              wrapperStyle={styles.checkboxWrapper}
              style={{borderRadius: 20}}
              checkedIcon={
                <Icon name="checkcircle" color={'#fabe64'} type="antdesign" />
              }
              uncheckedIcon={
                <Icon name="circle" color={'#fabe64'} type="entypo" />
              }
              checked={true}
            />
          </View>
        </View>
        <View style={styles.paymentMethodItemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="credit-card" size={20} type="feather" color={'#0005'} />
            <Text style={[styles.title, {fontSize: 18, marginLeft: 10}]}>
              Pay via Card
            </Text>
          </View>
          <View>
            <CheckBox
              size={20}
              containerStyle={styles.checkboxContainer}
              wrapperStyle={styles.checkboxWrapper}
              style={{borderRadius: 20}}
              checkedIcon={
                <Icon name="checkcircle" color={'#fabe64'} type="antdesign" />
              }
              uncheckedIcon={
                <Icon name="circle" color={'#0002'} type="entypo" />
              }
              checked={false}
            />
          </View>
        </View>
        <Button
         containerStyle={{marginTop:"20%", borderRadius:8}}
         buttonStyle={{backgroundColor:"#07a9f1"}}
         title={"Continue"}
        />
      </View>
    </ScrollView>
  );
};

export default SelectPatientAndAddress;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  checkboxContainer: {padding: 0, borderRadius: 20, borderWidth: 0},
  checkboxWrapper: {padding: 0, borderRadius: 20, borderWidth: 0},
  paymentMethodItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    padding: 10,
    borderBottomWidth:0.5,
    borderColor:"#0002"
  },
});
