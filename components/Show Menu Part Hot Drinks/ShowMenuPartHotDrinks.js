export default function ShowMenuPartHotDrinks(items) {
  return items.map((item) => {
    return (
      <div key={item.name} className="partItemHotDrinks">
        <div>
          <h2 className="itemName">{item.name}</h2>
          <p className="itemDescripHotDrinks">{item.description}</p>
        </div>
        <div className="itemPortionPriceHotDrinks">
          <p className="itemPortion">{item.portion}</p>
          <p className="itemPrice">{item.price}</p>
        </div>
      </div>
    );
  });
}
