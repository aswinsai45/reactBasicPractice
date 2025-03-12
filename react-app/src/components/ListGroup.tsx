function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    //{ items.map((item) => (<li>{item}</li>))} is a JSX expression that renders a list of items
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
