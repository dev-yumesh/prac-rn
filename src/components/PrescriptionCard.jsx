import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Icon } from "@rneui/themed";
import moment from 'moment'
import { images } from '../utils/images';

const PrescriptionCard = ({ prescription, handleDelete = ()=>null }) => {
    return (
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: '#0005',
            marginTop: 10,
            padding: 10,
            borderRadius: 15,
          }}>
          <Image
            alt={'prescription' + prescription.id}
            source={
              prescription.imageUri
                ? {uri: prescription.imageUri}
                : images.blankImg
            }
            style={{height: 120, width: '30%'}}
            resizeMode="contain"
          />
          <View
            style={{
              marginTop: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '68%',
              marginLeft: 10,
            }}>
            <View>
              <Text
                style={{color: '#0005', fontSize: 20, fontWeight: '600'}}>
                Uploaded
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#000'}}>
                  {prescription.date
                    ? moment(new Date(prescription.date)).format(
                        'DD MMM YYYY ',
                      )
                    : moment(new Date()).format('DD MMM YYYY')}
                </Text>
                <Text
                  style={{
                    color: '#0005',
                    fontSize: 10,
                    alignSelf: 'flex-end',
                    marginLeft: 5,
                    fontWeight: '600',
                  }}>
                  {prescription.date
                    ? moment(new Date(prescription.date)).format('hh:mm A')
                    : moment(new Date()).format('hh:mm A')}
                </Text>
              </View>
              <Text
                style={{
                  color: '#fabe64',
                  fontSize: 18,
                  marginTop: 15,
                  fontWeight: '600',
                }}>
                Submitted
              </Text>
            </View>
            <TouchableOpacity onPress={handleDelete} >
              <Icon
                type="antdesign"
                name="delete"
                size={20}
                color={'#fabe64'}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
}

export default PrescriptionCard