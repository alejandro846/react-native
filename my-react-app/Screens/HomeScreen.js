import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class HomeScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Esta es mi app de pokemon</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });