function DessertsList(props) {
  // Implement the component here.
  const lowCalorieDesserts = props.data.filter(
    (dessert) => dessert.calories <= 500
  );
  const sortedDesserts = lowCalorieDesserts.sort(
    (a, b) => a.calories - b.calories
  );
  const sortedLowCalorieDesserts = sortedDesserts.map((dessert) => {
    const desCal = `${dessert.name} - ${dessert.calories} cal`;
    return <li>{desCal}</li>;
  });

  return <ul>{sortedLowCalorieDesserts}</ul>;
}

export default DessertsList;
