function List({ items }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>No items to display. Add one above!</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;