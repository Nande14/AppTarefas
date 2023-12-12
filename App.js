import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, { key: String(tasksList.length + 1), task }]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Tarefa"
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholderTextColor="#ffffff"
        />
        <Button title="Adicionar" onPress={addTask} color="#0000FF" />
      </View>
      <FlatList
        data={tasksList}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item.task}</Text>}
        keyExtractor={(item) => item.key}
      />
      <View style={styles.footer}>
        <Text style={{ color: '#0000FF' }}>{`Total de Tarefas: ${tasksList.length}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 8,
    color: '#ffffff',
    borderColor: '#0000FF',
  },
  taskItem: {
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#0000FF',
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  footer: {
    marginTop: 20,
  },
});
