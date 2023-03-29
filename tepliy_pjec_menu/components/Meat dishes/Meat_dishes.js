import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function MeatDishes() {
  const meatDishes = [
    {
      name: "Печена ковбаска",
      portion: "370",
      price: "??",
      description: "подається з яблуками та цибулькою",
    },
    {
      name: "Торбинка пічника ",
      portion: "400",
      price: "??",
      description: "дерун із тушкованим язиком та грибами",
    },
    {
      name: "Кишка на кельні",
      portion: "300",
      price: "??",
      description: "кров'янка",
    },
    {
      name: "Рушта",
      portion: "",
      price: "??",
      description: "запечені ребра",
    },
    {
      name: "Кармонадля",
      portion: "",
      price: "??",
      description: "свинина на кістці в паніровці",
    },
    {
      name: "Шніцель по-віденськи",
      portion: "400",
      price: "??",
      description: "яловичий подається з картоплею пюре",
    },
    {
      name: '"А той індик..."',
      portion: "",
      price: "??",
      description: "запечене стегно індички",
    },
    {
      name: "Стейк свинячий",
      portion: "450",
      price: "??",
      description: "",
    },
    {
      name: "Телячі медальйони",
      portion: "",
      price: "??",
      description: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">М'ЯСНІ СТРАВИ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {meatDishes.map((item) => {
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
