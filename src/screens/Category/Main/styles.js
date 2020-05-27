import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButton: {
    top: 40,
    left: 10,
  },
  content: {
    alignItems: 'center',
    top: 40,
  },
  contentTitle: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    top: 20,
  },
  pickerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  month: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
