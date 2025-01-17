import { Participant } from '@/src/components/Participant';
import { styles } from './styles';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';


export const CONFIG = '';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!");

    }

    setParticipants(prevState => [...prevState, participantName]);    
    setParticipantName('');
  }

  function handleParticipatRemove(name: string) {

    

    Alert.alert("Remover participante", `Remover o participante ${name} da lista?`, [
      {
        text: 'Sim', 
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      }, 
      {
        text: 'Não', 
        style: 'cancel'
      }
    ] )

    // alert(`removendo participante ${name}`)
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipatRemove(item)}
          />
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nenhum participante adicionado, adicione na lista de presença</Text>
        )}
      />






    </View>
  )
}
