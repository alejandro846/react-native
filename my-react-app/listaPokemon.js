import React from "react";
import {Text} from 'react-native';
export class ListaPokemon extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
    return (<Text>{this.props.pokemon}</Text>);
    }

}
export default ListaPokemon;