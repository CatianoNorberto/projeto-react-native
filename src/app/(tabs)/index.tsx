import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Alert, FlatList } from 'react-native'

import { Header } from '../components/Header'
import { Task } from '../components/Task'
import { Highlight } from '../components/Highlight'

import { 
  Container, 
  FormContainer, 
  FormInput, 
  FormButtontContainer,
  FormButtonContent,
  FormButtonText,
  FormButton,
  CounterContainer,
  CounterHeader,
  CriadaText,
  Criada,
  CompletedText,
  Completed,
  Counter,
  CounterCompleted,
  Divider,
  FlatListContainer
} from './styles'

export function Home(){
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>([]);
  const [taskInfo, setTaskInfo] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  function handleTaskAdd() {
    if (tasks.some(task => task.name === taskInfo)) {
      return Alert.alert('Tarefa existe', 'Já existe uma tarefa na lista com esse nome.');
    }

    setTasks(prevState => [...prevState, { name: taskInfo, completed: false }]);
    setTaskInfo('');
  }

  function handleTaskRemove(name: string) {
    Alert.alert('Remover', `Remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.name !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleTaskCompleteToggle(name: string) {
    setTasks(prevState =>
      prevState.map(task =>
        task.name === name ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const totalTasks = tasks.length;
  const completedTasksCount = tasks.filter(task => task.completed).length;

  return(
    <Container>
      <Header/>
      <FormContainer>
        <FormInput 
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskInfo}
          value={taskInfo}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          isFocused={isInputFocused as boolean}
        />
        <FormButton 
          onPress={handleTaskAdd}
        >
          <FormButtontContainer>
            <FormButtonContent>
              <FormButtonText>
                +
              </FormButtonText>
            </FormButtonContent>
          </FormButtontContainer>
        </FormButton>
      </FormContainer>

      <CounterContainer>
        <CounterHeader>
          <CriadaText>
            <Criada>Criadas</Criada>
            <Counter>{totalTasks}</Counter>
          </CriadaText>
          <CompletedText>
            <Completed>Concluídas</Completed>
            <CounterCompleted>{completedTasksCount}</CounterCompleted>
          </CompletedText>
        </CounterHeader>
        <Divider></Divider>
      </CounterContainer>
      
      <FlatListContainer>
        <FlatList
          data={tasks}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Task
              tasks={item.name}
              onComplete={() => handleTaskCompleteToggle(item.name)}
              oneRemove={() => handleTaskRemove(item.name)}
              completed={item.completed}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <Highlight
                title="Você ainda não tem tarefas cadastradas"
                subtitle="Crie tarefas e organize seus itens a fazer"
              />
            </>
          )}
        />
      </FlatListContainer>
    </Container>
  )
}