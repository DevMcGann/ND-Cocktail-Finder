import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '50%',
    width: '90%',
    borderRadius: 40,
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 15,
    flex: 1,
  },
  container_imagen: {
    height: 80,
    width: 80,
  },
  imagen: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  texto: {
    color: 'black',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
});
export default styles;
