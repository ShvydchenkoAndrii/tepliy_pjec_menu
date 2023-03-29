import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function MainDishes() {
  const mainDishes = [
    {
      name: "Банош",
      portion: "200",
      price: "??",
      description: "подається з овечою бринзою та шкварками",
    },
    {
      name: "Яворівський пиріг",
      portion: "270",
      price: "??",
      description: "з грибною мачанкою",
    },
    {
      name: "Картопля фрі",
      portion: "250",
      price: "??",
      description: "",
    },
    {
      name: "Бульба з братрури",
      portion: "250",
      price: "??",
      description: "печена картопля зі шпондером",
    },
    {
      name: "Терті пляцки зі сметаною",
      portion: "250",
      price: "??",
      description: "деруни",
    },
    {
      name: "Вареники з картоплею та сиром",
      portion: "250",
      price: "??",
      description: "",
    },
    {
      name: "Вареники з вишнями",
      portion: "250",
      price: "??",
      description: "",
    },
    {
      name: "Пироги з пательні",
      portion: "250",
      price: "??",
      description: "смажені вареники подаються зі шкварками",
    },
    {
      name: "Палянички з білими грибами",
      portion: "220",
      price: "??",
      description: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ОСНОВНІ СТРАВИ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {mainDishes.map((item) => {
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
