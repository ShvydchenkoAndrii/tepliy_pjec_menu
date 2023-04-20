export default function ShowMenuPartHotDrinks(items) {
  return items.map((item) => {
    return (
      <div key={item.name} className="partItemHotDrinks">
        <div>
          <h2 className="itemName">{item.name}</h2>
          <p className="itemDescrip">{item.description}</p>
        </div>
        <div className="itemPortionPriceHotDrinks">
          <p>{item.portion}</p>
          <p>{item.price}</p>
        </div>
      </div>
    );
  });
}
