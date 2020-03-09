import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: '15%',
    minHeight: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  content: {
    height: '100%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: '#20b3c7',
  },
  defaultText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 20,
    textAlign: 'center',
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 30,
    textAlign: 'center',
  },
});

export default styles;
