import { useState } from "react";
import { CheckBox, Icon } from "@rneui/themed";
import { View, Text, StyleSheet,   } from "react-native";


const RenderAddressItem = ({ data }) => {
    const [check, setCheck] = useState(false);
  
    return (
      <View
        style={styles.container}>
        <View>
          <Text style={styles.title}>
            {data.addressGroup}
          </Text>
          <Text>{data.address}</Text>
        </View>
        <View style={styles.bottomInnerContainer} >
          <Text>Edit</Text>
          <CheckBox
          size={20}
            containerStyle={styles.checkboxContainer}
            wrapperStyle={styles.checkboxWrapper}
            style={{ borderRadius:20}}
            checkedIcon={<Icon name='checkcircleo' color={"#fabe64"} type='antdesign' />}
            uncheckedIcon={<Icon name='circle' color={"#fabe64"} type='entypo' />}
            checked={check}
            onPress={() => setCheck(!check)}
          />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container : {
        backgroundColor: '#ff9700',
        width: 160,
        marginLeft: 20,
        borderRadius: 15,
        padding: 15,
        justifyContent: 'space-between',
      },
    title:{fontSize: 22, fontWeight: '500', color: '#fff'},
    bottomInnerContainer:{flexDirection:"row", alignItems:"center", justifyContent:"space-between" },
    checkboxContainer:{  padding:0, borderRadius:20, borderWidth:0 },
    checkboxWrapper:{ padding:0, borderRadius:20, borderWidth:0 }
    
  })

  export default RenderAddressItem