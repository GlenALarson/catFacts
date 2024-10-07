import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import React, { useState, useEffect } from 'react';

// App gets daily cat facts from the API and displays them.

const URL = 'https://cat-fact.herokuapp.com/facts'

export default function App() {
  
  const [facts, setFacts] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then((json) => {
        var data = []
        for (let i = 0; i <= 4; i++) {
          data.push(json[i].text)
        }
        setFacts(data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Random cat facts</Text>
      <Text style={styles.text}>{facts[0]}</Text>
      <Text style={styles.text}>{facts[1]}</Text>
      <Text style={styles.text}>{facts[2]}</Text>
      <Text style={styles.text}>{facts[3]}</Text>
      <Text style={styles.text}>{facts[4]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
  }
});
