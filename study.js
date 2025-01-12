import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import Checkbox from 'expo-checkbox';

const customInput = () => {
  
  const [card1, setCard1] = React.useState("")
  const [card2, setCard2] = React.useState("")

  const [checked, checkTheBox] = React.useState(false)

  //Possible inputs for drop down box
  const data = [
    {key: '1', value: 'A'},
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
    {key: '5', value: '5'},
    {key: '6', value: '6'},
    {key: '7', value: '7'},
    {key: '8', value: '8'},
    {key: '9', value: '9'},
    {key: '10', value: '10'},
    {key: '11', value: 'Jack'},
    {key: '12', value: 'Queen'},
    {key: '13', value: 'King'},
  ];

  return (
    <>
      <View style = {styles.container}>

        <Text style = {{fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 40}}>
          Select your cards
        </Text>

        <View style = {{paddingHorizontal: 20, paddingVertical: 30, flex: 1}}>
          <View style = {styles.dropdownWrapper}>
            <SelectList
              data = {data} 
              setSelected = {setCard1}
              dropdownStyles = {{backgroundColor: 'gray'}}
              placeholder = "Select a card"
            />
          </View>

          <View style = {styles.dropdownWrapper}>
            <SelectList
              data = {data} 
              setSelected = {setCard2}
              dropdownStyles = {{backgroundColor: 'gray'}}
              placeholder = "Select a card"
            />
          </View>

          
          <View style = {styles.standard}>
            <Text style = {styles.checkBoxText}>Suited?</Text>
            <Checkbox
              style = {styles.checkBox}
              value = {checked} 
              onValueChange = {checkTheBox} 
            />
          </View> 

          <View style = {styles.standard}>
            <TouchableOpacity
              style = {styles.button}
                
              onPress = {() => 
                alert(
                  data.find((item) => item.key === card1)?.value + "," + 
                  data.find((item) => item.key === card2)?.value + "\n" + 
                  (checked ? "suited" : "not suited")
                )
              }
            >
              <Text style = {{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Submit</Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
    </>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  standard: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,

  },
  checkBox: {

    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
    marginLeft: 20

    
  },
  checkBoxText: {
    //flex: 1,
    backgroundColor: 'white',
    //textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 0,
   
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,

  },
  dropdownWrapper: {
    marginTop: 20,
  }

})
export default customInput;


