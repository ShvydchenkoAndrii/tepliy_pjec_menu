import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Breakfasts() {
  const breakfasts = [
    {
      name: "Вареники з сиром запечені у сметані",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Тартіні з куркою су-від",
      portion: "??",
      price: "??",
      description: "скрембл, тост, мікс салату, крем сир, курка",
    },
    {
      name: "Тартіні з лососем",
      portion: "??",
      price: "??",
      description: "скрембл, тост, мікс салату, крем сир, слабосолений лосось",
    },
    {
      name: "Налисники з сиром",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Сирнички зі сметаною та варенням",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">СНІДАНКИ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {breakfasts.map((item) => {
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
