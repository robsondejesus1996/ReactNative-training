import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#585858',
    padding: 24
  },

  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },

  eventDate: {
    color: '#fff',
    fontSize: 16
  }, 

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25', 
    borderRadius: 5, 
    color: '#fff',
    padding: 16, 
    fontSize: 16,
    marginRight: 12
  }, 

  buttonText:{
    color: '#fff', 
    fontSize: 24, 
    textAlign: 'center'
  },

  button:{
    width: 56, 
    height: 56,
    borderRadius: 5, 
    backgroundColor: '#31c767', 
    alignItems: 'center', 
    justifyContent: 'center',
  }, 

  form:{
   width: '100%', 
   flexDirection: 'row', 
   marginTop: 36, 
   marginBottom: 42, 
  }
});