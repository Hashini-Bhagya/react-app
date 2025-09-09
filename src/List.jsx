function List(props) {
  return (
    <div>
     {props.items.map((item) => {
        return (
            <div key={item} style={{display: "flex"}}>
                <div>{item}</div>
                <button 
                onClick={() => {
                    const filteredItem = props.items.filter((fitem) => {
                        if (fitem !== item) {
                            return true;
                        }
                        return false;
                    });

                    props.setItems(filteredItem);
                }}>delete</button>

            </div>
        )
     })}
     
    </div>
  );
}

export default List;