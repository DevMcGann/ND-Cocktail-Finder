import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    borderRadius: 40,
    padding: 22,
    backgroundColor: 'white',
    marginBottom: 15,
    flex: 1,
  },
  container_imagen: {
    height: 100,
    width: 100,
  },
  imagen: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  texto: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
});
export default styles;
