import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import CancelButton from '../Buttons/Cancel';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Header = ({navigation, callback, cancel}) => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const callbackFromChild = data => {
      callback(data);
    };

    if (input.length >= 3) {
      setQuery(input);
      callbackFromChild(query);
    }
  }, [callback, input, query]);

  const handleInput = value => {
    setInput(value);
  };

  const callbackCancel = () => {
    cancel();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        {query ? (
          <CancelButton
            onPress={() => {
              setQuery(null);
              setInput('');
              callbackCancel();
            }}
            text="Cancel"
          />
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="reply" size={30} color="black" style={styles.back} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContinaer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={input}
          name="input"
          onChangeText={inputValue => handleInput(inputValue)}
        />
      </View>
    </View>
  );
};

Header.propTypes = {
  callback: PropTypes.func,
  cancel: PropTypes.func,
  navigation: PropTypes.object,
  input: PropTypes.string,
};

export default Header;
