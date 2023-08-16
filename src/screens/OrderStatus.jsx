import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Button } from "@rneui/themed";

const OrderStatus = () => {
  const labels = [
    'Call With Pharmacist',
    'Free Doctor consultation',
    'Track your order',
    '',
  ];
  const customStyles = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 15,
    separatorStrokeWidth: 5,
    currentStepStrokeWidth: 8,
    stepStrokeCurrentColor: '#aaaaaa',
    stepStrokeWidth: 8,
    stepStrokeFinishedColor: '#4087a6',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#4087a6',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#999999',
  };

  return (
    <ScrollView style={{ paddingHorizontal: '5%', backgroundColor:"#fff"}}  >
      <View style={{marginTop:50}} >
        <Text style={styles.title}>We have received your order !</Text>
        <Text style={styles.subtitle}>We will get you touch in shortly</Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Order Id : 1548</Text>
        <Text style={styles.subtitle}>
          Estimate Delivery Date : 24 - 27 May{' '}
        </Text>
      </View>
      <View style={{minHeight: 200, marginTop: 20, paddingHorizontal:15 }}>
        <StepIndicator
          customStyles={{...customStyles}}
          currentPosition={1}
          labels={labels}
          direction="vertical"
          stepCount={4}
          renderLabel={({label, position}) => {
            return (
              <View style={{minWidth: '100%', marginTop: '5%', marginLeft:15 }}>
                <Text style={{color: '#0008', fontSize: 16, fontWeight: '600'}}>
                  {label}
                </Text>
                <Text style={{color: '#0005', fontWeight: '600'}}>
                  {position == 0
                    ? 'Our pharmacist are required to confirm the medicines in your prescription on call'
                    : ''}
                </Text>
              </View>
            );
          }}
        />
        <Button containerStyle={{marginTop:30, width:"80%", alignSelf:"center", borderRadius:8, backgroundColor:"#4087a6" }} buttonStyle={{ backgroundColor:"#4087a6" }} >
          Call Now
        </Button>
      </View>
    </ScrollView>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#0008',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0005',
  },
});
