import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import Checkbox from 'expo-checkbox';
import axios from 'axios';


//Send a post request to the backend
const api = axios.create({
  baseURL: 'http://127.0.0.1:5000'
})

const handleSubmit = async (card1, card2, checked, position) => {
  const res = await api.post('/get_optimal_action', {
    card1_value: card1,
    card2_value: card2,
    are_suited: checked,
    player_name : 'bob',
    position : position,
    min_bet : 10,

  })
  console.log(res.data)
  showOptimalAction(res.data)

  if(res.status === 200){
    console.log("Success")
  }
  else{
    console.log("Failure")
  }
}

const showOptimalAction = (action) =>{
  
  alert(action["optimal_action"])

}

// const get_optimal_action = async () => {
//   const res = await api.post('/get_optimal_action', {
    
//   })
// }



const customInput = () => {
  
  const [card1, setCard1] = React.useState("")
  const [card2, setCard2] = React.useState("")

  const [checked, checkTheBox] = React.useState(false)

  //Possible inputs for drop down box
  const data = [
    {key: 'A', value: 'A'},
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
    {key: '5', value: '5'},
    {key: '6', value: '6'},
    {key: '7', value: '7'},
    {key: '8', value: '8'},
    {key: '9', value: '9'},
    {key: '10', value: '10'},
    {key: 'J', value: 'Jack'},
    {key: 'Q', value: 'Queen'},
    {key: 'K', value: 'King'},

  ];

  //Function to deal with button press
  const handlePress = () => {
    console.log('Submit');
    
    // Add logic for the "Submit" button here -- route backend
    alert(
      data.find((item) => item.key === card1)?.value + "," + 
      data.find((item) => item.key === card2)?.value + "\n" + 
      position + "\n" +
      (checked ? "suited" : "not suited")
    )
    
    handleSubmit(card1, card2, checked, position)
  };

  const [position, setPosition] = React.useState("")
  const positionData = ['SB', 'BB', '1', '2', '3', 'D'];


  return (
    <>
      <View style = {styles.container}>
        <Text style = {styles.title}>
          Study Mode
        </Text>

        <Text style = {styles.subtitle}>
          Select your cards
        </Text>

        <View style = {{paddingHorizontal: 20, paddingVertical: 10, flex: 1}}>
          <View style = {styles.dropdownWrapper}>
            <View style = {{backgroundColor: 'gray', borderRadius: 10}}>
              <SelectList
                data = {data} 
                setSelected = {setCard1}
                
                dropdownStyles = {{
                  backgroundColor: 'gray', 
                }}
                placeholder = "Select a card"
              />
            </View>

            <View style = {{backgroundColor: 'gray', borderRadius: 10}}>
              <SelectList
                data = {data} 
                setSelected = {setCard2}
                dropdownStyles = {{
                  backgroundColor: 'gray', 
                  
                }}
                placeholder = "Select a card"
              />
            </View>
          </View>

          
          <View style = {styles.standard}>
            
            <TouchableOpacity
              
              style = {{
                backgroundColor: checked ? 'green' : 'gray',
                borderRadius: 10,
                width: 315,
                height: 50,
              }}
              onPress = {() => checkTheBox(!checked)}
              >
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}>Suited</Text>
              
              </TouchableOpacity>
               
          </View> 

          
          <View style = {styles.standard}>
            <TouchableOpacity
              style = {styles.button}
                
              onPress = {handlePress}
            >
              <Text style = {{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>Submit</Text>
            </TouchableOpacity>
          </View>
          
          
          <View style = {{flexDirection: 'row'}} >
            {positionData.map((pos, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  margin: 10,
                  backgroundColor: 'gray',
                  borderRadius: 50,
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setPosition(pos);
                  console.log(pos);
                }}
              >
                <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>{pos}</Text>
              </TouchableOpacity>
            ))}
          </View>
          

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    
  },
  standard: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,

  },
  
  button: {
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,

  },
  dropdownWrapper: {
    margin: 10,
    //spaceBetween: 10,
    
    flexDirection: 'row',
    justifyContent: 'space-between',

    
    
  },
  title: {
    color: 'white',
    fontSize: 30, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 40,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20

  },
  circlebutton: {
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:50,
  },

})

export default customInput;
