import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
  },
  header: {
    alignSelf: 'center',
    top: 50,
  },
  content: {
    flex: 1,
    marginVertical: 10,
    marginTop: 30,
  },
  contentTop: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 70,
    bottom: 20,
    justifyContent: 'space-between',
  },
  textMes: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  order: {
    flexDirection: 'row',
  },
  drawerButton: {
    top: 40,
    left: 10,
  },
});

export default styles;
