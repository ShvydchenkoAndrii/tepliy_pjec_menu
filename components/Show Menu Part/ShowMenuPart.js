export default function ShowMenuPart(items) {
  return items.map((item) => {
    return (
      <div key={item.name} className="partItem">
        <div className="itemPicture">
          <img src={item.image}></img>
        </div>
        <h2 className="itemName">{item.name}</h2>
        <p className="itemDescrip">{item.description}</p>
        <p className="itemPortion">{item.portion}</p>
        <p className="itemPrice">{item.price}</p>
      </div>
    );
  });
}
