/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-floating-decimal */
/* eslint-disable prettier/prettier */


import React,{useState,useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles.js';
import Cancel_Button from '../../components/Buttons/Cancel/index.js';


const Header = ({navigation, callback, cancel}) => {

    const [input, setInput] = useState(''); //solo para leer el input
    const [query, setQuery] = useState(null); //cuando el input es >= 3 setea la busqueda para mandar a la Screen
    
    useEffect( ()=>{
        if (input.length >= 3){
           setQuery(input);
            callback_from_child(query);
        }
        
    }, [input, query]);

    const handleInput = value => {
        setInput(value);   
    };

    const callback_from_child = (data) => {
        callback(data);
    };

    const callback_cancel = () =>{
        cancel();
    };

    return ( 
        <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
                {query ? 
                        <Cancel_Button onPress={() => {
                            setQuery(null);
                            setInput('');
                            callback_cancel();
                        }}
                        text="Cancel"
                        />
                            
                    : 
                        <TouchableOpacity  onPress={() => {navigation.navigate('Home');}}>
                            <Icon name="reply" size={30} color="black" style={styles.back}/>
                        </TouchableOpacity>
                }
            </View>

            <View style={styles.inputContinaer}>
                <TextInput 
                style={styles.input}
                placeholder="Search"
                value={input}
                 name="input"
                 onChangeText={(inputValue) => handleInput(inputValue)}
                />
            </View> 

        </View>
     );
};
 

Header.propTypes = {
    callback : PropTypes.func,
    cancel : PropTypes.func,
    navigation: PropTypes.object,
    input:PropTypes.string,
};

export default Header;