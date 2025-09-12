 function Input({ text, setText, onAddTodo }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onAddTodo();
          }
        }}
        placeholder="Enter a new todo"
      />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
}

export default Input; 