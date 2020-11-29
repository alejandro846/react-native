import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Unorderedlist from 'react-native-unordered-list';

export class InfoScreen extends Component {

constructor(props){
    super(props);

    this.state= {
        loading: false,
        pokemon: [],
        URL:'https://jsonplaceholder.typicode.com/todos'

    }
    
    }
    


componentDidMount(){
this.getPokemon();

};

getPokemon = () => {

    this.setState({ loading:true })

    fetch(this.state.URL)
    .then(res => res.json())
    .then( res => {

        this.setState({

            pokemon: res.results,
            URL: res.next,
            loading: false

        })

    });


};


render() {
    if(this.state.loading){

        return(
            <View styles={styles.container}>
       
<Text >Descargando pokemon </Text>
         </View>
);

}
return(
    <View styles={styles.container}>
<Text >Listado de pokemon</Text>
 </View>
);

    return(
        <View styles={{flex: 1, paddingtop:50, paddingLeft:5}}>
            <FlatList
            data={this.state.pokemon}
            renderItem={
                ({item}) => <Text> { item.name} </Text>
            }
            keyExtractor={(item, index)=> index.toString()}
            />
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