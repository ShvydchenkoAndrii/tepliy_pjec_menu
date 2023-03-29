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
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ХОЛОДНІ НАПОЇ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (л)</p>
          <p>Ціна (грн)</p>
        </div>
        {coldDrinks.map((item) => {
          return (
            <div className="grid grid-cols-3">
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <p>{item.portion}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
