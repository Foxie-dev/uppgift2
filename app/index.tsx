import { useState } from 'react';
import { Image, StyleSheet, Platform, Text, View, Button, TextInput } from 'react-native';
export default function Index() {
  const [counter, setCounter] = useState(0); // we define the constant 

  // we define 3 functions, plus, minus and reset
  
  function dosomeplus() {                   
      setCounter(counter + 1);
  }
  function dosomeminus() {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  }
  function reset () {
    setCounter(0);
  }
  // we style the buttons and decide buttons location in the screen
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text style= {{fontSize: 150}}>{counter}</Text>
     
      <View style={{ backgroundColor: "green", width : 155, height: 50, justifyContent: 'center', alignItems: "center", marginBottom: 10}}>
      <Button
        onPress={dosomeplus}
        title="PLUS"
        color="white"
      />
      </View>
      <View style={{ backgroundColor: "red", width : 155, height: 50, justifyContent: 'center', alignItems: "center", marginBottom: 15}}>
      <Button
        onPress={dosomeminus}
        title="MINUS"
        color="white"
      />
      
      </View>


      {counter > 0 && (
      <View style={{ backgroundColor: "cyan", width : 175, height: 40, justifyContent: 'center', alignItems: "center"}}>
      <Button
        onPress={reset}
        title="Reset"
        color="white"
      />
      </View>
      )}
    </View>
  );
}