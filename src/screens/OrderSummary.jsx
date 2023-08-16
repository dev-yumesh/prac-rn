import {Button, CheckBox, Icon} from '@rneui/themed';
import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import AddImageComponent from '../components/AddImageComponent';
const OrderSummary = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff', paddingHorizontal: '5%'}}>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Medicines</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Button title={'Edit Medicine'} buttonStyle={styles.medicineBtn} />
          <Button title={'Add Medicine'} buttonStyle={styles.medicineBtn} />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Prescriptions</Text>
        <AddImageComponent />
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
      </View>
      <View
        style={[
          styles.paymentMethodItemContainer,
          {backgroundColor: '#f1f1f1', borderBottomWidth: 0},
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={[
              styles.title,
              {fontSize: 18, marginLeft: 10, fontWeight: '500', color: '#0008'},
            ]}>
            Estimated Delivery
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.title,
              {fontSize: 18, marginLeft: 10, color: '#0008'},
            ]}>
            24 - 25 May
          </Text>
        </View>
      </View>
      <View style={[{borderBottomWidth: 0, top: 50}]}>
        <Text style={[styles.title]}>Deliver To</Text>
        <Text
          style={[
            styles.title,
            {fontSize: 16, fontWeight: '500', color: '#0008'},
          ]}>
          87, Great North Road, ALTON
        </Text>
      </View>
      <Button
        containerStyle={{marginTop: '20%', borderRadius: 8}}
        buttonStyle={{backgroundColor: '#07a9f1'}}
        title={'Continue'}
      />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },

  medicineBtn: {
    borderRadius: 8,
    backgroundColor: '#fd9801',
    paddingHorizontal: 20,
  },

  checkboxContainer: {padding: 0, borderRadius: 20, borderWidth: 0},
  checkboxWrapper: {padding: 0, borderRadius: 20, borderWidth: 0},
  paymentMethodItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#0002',
  },
});
