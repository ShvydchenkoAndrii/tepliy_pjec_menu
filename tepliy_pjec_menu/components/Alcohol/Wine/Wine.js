import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Wine() {
  const whiteWine = [
    {
      name: "Колоніст Шардоне",
      portion: "??",
      price: "??",
      description: "Україна, сухе",
    },
    {
      name: "Kartuli Vazi Цинандалі",
      portion: "??",
      price: "??",
      description: "Грузія, сухе",
    },
    {
      name: "Колоніст Рислінг",
      portion: "??",
      price: "??",
      description: "Україна, н/сухе",
    },
    {
      name: "Chateau Chizay Moscato",
      portion: "??",
      price: "??",
      description: "Україна, н/солодке",
    },
  ];

  const redWine = [
    {
      name: "Колоніст Кабарне",
      portion: "??",
      price: "??",
      description: "Україна, сухе",
    },
    {
      name: "Kartuli Vazi Сапераві",
      portion: "??",
      price: "??",
      description: "Грузія, сухе",
    },
    {
      name: "Chizay Pino Noir",
      portion: "??",
      price: "??",
      description: "Україна, н/солодке",
    },
    {
      name: "Chizay Merlo",
      portion: "??",
      price: "??",
      description: "Україна, н/сухе",
    },
    {
      name: "Вино домашнє",
      portion: "??",
      price: "??",
      description: "",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ВИНО</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <h2 className="my-4 font-bold">Біле вино:</h2>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {whiteWine.map((item) => {
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
      <h2 className="my-4 font-bold">Червоне вино:</h2>
      {redWine.map((item) => {
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
  );
}
