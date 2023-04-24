export default function ShowMenuPart(items) {
  return items.map((item) => {
    return (
      <div key={item.name} className="partItem">
        <div className="itemPicture">
          <img
            src={item.image !== "" ? item.image : "no-image-yet.png"}
            alt="зображення страви чи напою"
          ></img>
        </div>
        <h2 className="itemName">{item.name}</h2>
        <p className="itemDescrip">{item.description}</p>
        <div className="itemPortionPrice">
          <p className="itemPortion">{item.portion}</p>
          <p className="itemPrice">{item.price}</p>
        </div>
      </div>
    );
  });
}
