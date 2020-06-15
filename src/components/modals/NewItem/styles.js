import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    top: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: ' rgba(0, 0, 0, 0.3)',
    zIndex: 4,
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 100,
    elevation: 15,
    position: 'absolute',
  },
  modalForm: {
    padding: 20,
    marginVertical: 10,
  },
  modaltTitle: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    fontFamily: '',
  },
  input: {
    top: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    width: 200,
  },
  modalButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 10,
  },
  datePicker: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButton: {
    flex: 1,
    backgroundColor: '#00008b',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryPicker: {
    top: 5,
  },
});

export default styles;
