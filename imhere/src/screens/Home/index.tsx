import { styles } from './styles';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';


export const CONFIG = '';

export function Home() {

  function handleParticipantAdd() {
    console.log('Hello world!')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 1 de janeiro de 2025</Text>


      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
