import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    backgroundColor: '#20b3c7',
  },
  icon: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  logoContainer: {
    height: '20%',
    marginBottom: 25,
  },
  Touchable: {
    backgroundColor: 'white',
    height: '7%',
    width: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTouchable: {
    fontSize: 18,
    fontWeight: 'bold',
    //FontFamily -> Renombrar la fuente a como figura en el metadata, sino no anda en IOS.
  },
});

export default styles;
