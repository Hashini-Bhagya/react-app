import { useState } from 'react';
import Input from './Input.jsx';
import List from './List.jsx';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleRemoveTodo = (itemToRemove) => {
      setTodos(todos.filter(todo => todo !== itemToRemove));
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText(''); 
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Input text={todoText} setText={setTodoText} onAddTodo={handleAddTodo} />
      <List items={todos} setItems={setTodos} />
    </div>
  );
}

export default App;