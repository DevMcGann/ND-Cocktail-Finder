import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row' /*row-reverse cuando hay query?*/,
    minHeight: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 4,
  },

  iconContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContinaer: {
    flex: 1,
  },
  input: {
    backgroundColor: 'lightgrey',
    height: '50%',
    width: '95%',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 20,
  },
});

export default styles;
