import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AntDesign as Icon } from '@expo/vector-icons';

import { Container, Content } from './styles';

interface TaskProps {
  tasks: string;
  onComplete: () => void;
  oneRemove: () => void;
  completed: boolean;
}

export function Task({ tasks, onComplete, oneRemove, completed }: TaskProps) {
  const [checked, setChecked] = useState(completed);

  const handleCompleteToggle = () => {
    setChecked(!checked);
    onComplete();
  };

  return (
    <Container>
      <Content>
        <RadioButton
          value='first'
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleCompleteToggle}
        />
        <Text
          style={[
            styles.taskText,
            { color: checked ? 'gray' : '#FFFFFF', textDecorationLine: checked ? 'line-through' : 'none' },
          ]}
        >
          {tasks}
        </Text>
        <TouchableOpacity onPress={oneRemove}>
          <Icon name="delete" size={24} color="gray" />
        </TouchableOpacity>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  taskText: {
    width: 250,
    fontWeight: '400',
  },
});
