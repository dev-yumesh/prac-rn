import React, {useState} from 'react';
import {Input, Icon, Button} from '@rneui/themed';
import {Image, ScrollView, Text, View, ToastAndroid} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import commonStyles from '../utils/commonStyles';
import {images} from '../utils/images';
import LoaderScreen from './LoaderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PRESCRIPTION_STATUS,
  generateId,
  prescriptionArrayName,
} from '../utils/constants';

const UploadPrescription = () => {
  const countries = [
    'Person 1',
    'Person 2',
    'Person 3',
    'Person 4',
    'Person 5',
  ];
  const [date, setDate] = useState(null);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [prescriptionData, setPrescriptionData] = useState({
    person: '',
    mobile: '',
    title: '',
    date: new Date().toString(),
    description: '',
    imageUri: '',
    status: PRESCRIPTION_STATUS.submitted,
  });

  const handlePrescriptionData = (val, field) => {
    setPrescriptionData(pre => ({...pre, [field]: val}));
  };

  const checkExisting = (arrayToCheck = []) => {
    
    
    let itemId = generateId();
    const existingItem = arrayToCheck.find(
      item => (item.id = itemId),
    );
    if (existingItem) {
       checkExisting();
    }
    return itemId
  };

  const uploadPrescriptionAsync = async () => {
    try {
      setLoading(true);
      const prescriptions = await AsyncStorage.getItem(prescriptionArrayName);
      const parsedPrescriptionData = JSON.parse(prescriptions);
      let itemId = checkExisting()

      const uploadData = {id: itemId, ...prescriptionData};
      parsedPrescriptionData.push(uploadData);
      await AsyncStorage.setItem(
        prescriptionArrayName,
        JSON.stringify(parsedPrescriptionData),
      );
      setLoading(false);
      ToastAndroid.showWithGravity('Prescription added', 100, ToastAndroid.TOP);
      setPrescriptionData({
        person: '',
        mobile: '',
        title: '',
        date: new Date().toString(),
        description: '',
        imageUri: '',
        status: PRESCRIPTION_STATUS.submitted,
      });
      setDate(null);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', paddingHorizontal: '3%'}}>
      <View style={{marginTop: '10%'}}>
        <SelectDropdown
          data={countries}
          defaultButtonText={
            prescriptionData.person ? prescriptionData.person : 'Select Person'
          }
          buttonStyle={commonStyles.inputStyle}
          buttonTextStyle={{position: 'absolute', left: 50}}
          dropdownIconPosition="left"
          renderDropdownIcon={() => (
            <Icon name="user-circle" type="font-awesome" size={30} />
          )}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            handlePrescriptionData(selectedItem, 'person');
          }}
          // buttonTextAfterSelection={(selectedItem, index) => {
          //   return selectedItem;
          // }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />

        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <View style={{width: '30%', justifyContent: 'space-between'}}>
            <Input
              placeholder="+91"
              placeholderTextColor={'#000'}
              disabled
              containerStyle={{paddingHorizontal: 0}}
              inputContainerStyle={commonStyles.inputStyle}
              leftIcon={() => (
                <Image
                  source={images.indiaFlag}
                  style={{height: 25, width: 25}}
                  resizeMode="contain"
                />
              )}
            />
          </View>
          <View style={{width: '70%'}}>
            <Input
              placeholder="Phone Number"
              value={prescriptionData.mobile}
              keyboardType="phone-pad"
              onChangeText={val => handlePrescriptionData(val, 'mobile')}
              containerStyle={{paddingLeft: 10, paddingRight: 0}}
              inputContainerStyle={commonStyles.inputStyle}
            />
          </View>
        </View>

        <Input
          placeholder="Title"
          value={prescriptionData.title}
          onChangeText={val => handlePrescriptionData(val, 'title')}
          containerStyle={{paddingHorizontal: 0}}
          inputContainerStyle={commonStyles.inputStyle}
        />

        <Button
          title={
            date !== null
              ? moment(new Date(date)).format('DD-MM-YYYY')
              : 'DD-MM-YYYY'
          }
          onPress={() => setOpenDateModal(true)}
          buttonStyle={{backgroundColor: 'transparent'}}
          titleStyle={{color: '#0008', marginLeft: 15}}
          icon={
            <Icon name="calendar" type="entypo" size={30} color={'#0008'} />
          }
          iconPosition="left"
          containerStyle={commonStyles.uploadButton}
        />

        <Input
          placeholder="Enter Description Here"
          placeholderTextColor={'#000'}
          onChangeText={val => handlePrescriptionData(val, 'description')}
          multiline
          value={prescriptionData.description}
          containerStyle={{paddingHorizontal: 0, marginTop: 20}}
          inputContainerStyle={commonStyles.textArea}
        />

        <Button
          title={
            prescriptionData.imageUri ? prescriptionData.imageUri : 'Add Image'
          }
          onPress={async () => {
            await launchImageLibrary({mediaType: 'photo'}, image => {
              console.log('image', image.assets[0].uri);
              handlePrescriptionData(image.assets[0].uri, 'imageUri');
            });
          }}
          buttonStyle={{backgroundColor: 'transparent'}}
          titleStyle={{color: '#0008', marginLeft: 15}}
          containerStyle={commonStyles.uploadImage}
        />

        <DatePicker
          modal
          mode="date"
          open={openDateModal}
          date={new Date()}
          onConfirm={date => {
            setOpenDateModal(false);
            setDate(date);
            handlePrescriptionData(date, 'date');
          }}
          onCancel={() => {
            setOpenDateModal(false);
          }}
        />
        {/* <Input
          placeholder="Select Person"
          inputContainerStyle={{
            backgroundColor: '#0002',
            borderBottomWidth: 0,
            height: 60,
            paddingHorizontal: 15,
            borderRadius: 15,
          }}
          leftIcon={() => (
            <Icon name="user-circle" type="font-awesome" size={30} />
          )}
        /> */}
        <Button
          title={'Upload Prescription'}
          loading={loading}
          onPress={uploadPrescriptionAsync}
          containerStyle={{marginTop: 20, alignSelf: 'center', width: '80%'}}
          buttonStyle={{height: 40, borderRadius: 8, alignItems: 'center'}}
        />
      </View>
    </ScrollView>
  );
};

export default UploadPrescription;
