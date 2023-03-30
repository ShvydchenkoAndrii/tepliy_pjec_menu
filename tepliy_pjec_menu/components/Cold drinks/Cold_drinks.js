import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function ColdDrinks() {
  const coldDrinks = [
    {
      name: "Узвар",
      portion: "1",
      price: "??",
      description: "",
    },
    {
      name: "Pepsi",
      portion: "0,33",
      price: "??",
      description: "скло",
    },
    {
      name: "Coca Cola",
      portion: "0,33",
      price: "??",
      description: "скло",
    },
    {
      name: "Соки та нектари",
      portion: "0,2",
      price: "??",
      description: "в асортименті",
    },
    {
      name: "Поляна Квасова",
      portion: "0,5",
      price: "??",
      description: "",
    },
    {
      name: "Моршинська",
      portion: "0,33/0,5/0,75 ??",
      price: "??",
      description: "в асортименті",
    },
    {
      name: "Квас",
      portion: "0,5",
      price: "??",
      description: "сезонний",
    },
    {
      name: "Фруктова вода",
      portion: "0,5",
      price: "??",
      description: "дюшес, сітро",
    },
    {
      name: "Молочний коктейль",
      portion: "0,2",
      price: "??",
      description: "сезонний",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
        <h1 className="partName">ХОЛОДНІ НАПОЇ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Об'єм (л)</p>
          <p>Ціна (грн)</p>
        </div>
        {coldDrinks.map((item) => {
          return (
            <div className="partItem">
              <div>
                <h2 className="itemName">{item.name}</h2>
                <p className="itemDescrip">{item.description}</p>
              </div>
              <p>{item.portion}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
