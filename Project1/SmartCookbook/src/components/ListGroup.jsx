function ListGroup() {
  const items = ["Coffee", "Tea", "Hot Chocolate", "Lemonade", "Italian Soda"];

  return (
    <>
      <h1> My list of items </h1>
      {items.map((item) => <button type="button" class="btn btn-primary" key={item}>{item}</button>
      )}
    </>
  );
}
export default ListGroup;