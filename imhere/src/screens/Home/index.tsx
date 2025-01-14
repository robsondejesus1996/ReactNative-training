import { Participant } from '@/src/components/Participant';
import { styles } from './styles';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';


export const CONFIG = '';

export function Home() {

  const participants = ['Rodrigo', 'Robson', 'Diego', 'Caio', 'Ana', 'Maria', 'João', 'Pedro', 'Lucas', 'Gabriel', 'Rafael', 'Ricardo', 'Fernando', 'Juliana', 'Carla', 'Amanda', 'Bruna', 'Bianca', 'Camila', 'Isabela', 'Larissa', 'Mariana', 'Tatiana', 'Vivian', 'Yasmin', 'Zuleica'];

  function handleParticipantAdd() {
    console.log('Hello world!')
  }

  function handleParticipatRemove(name: string) {
    alert(`removendo participante ${name}`)
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

      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map((participant => {
          return (
            <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipatRemove('Robson')} 
            />
          )
        }))
      }
      </ScrollView>



    </View>
  )
}
