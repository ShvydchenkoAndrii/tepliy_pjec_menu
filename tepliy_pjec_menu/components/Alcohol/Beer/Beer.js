import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Beer() {
  const beerFromKeg = [
    {
      name: "Львівське світле",
      portion: "0,3/0,5",
      price: "100",
      description: "",
    },
    {
      name: "Kronenbourg blanc",
      portion: "0,3/0,5",
      price: "100",
      description: "",
    },
  ];

  const bottleBeer = [
    {
      name: "Львівське світле",
      portion: "0,3/0,5",
      price: "150",
      description: "",
    },
    {
      name: "Kronenbourg blanc",
      portion: "0,3/0,5",
      price: "100",
      description: "",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ПИВО</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <h2 className="my-4 font-bold">Пиво розливене:</h2>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (л)</p>
          <p>Ціна (грн)</p>
        </div>
        {beerFromKeg.map((item) => {
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
      <h2 className="my-4 font-bold">Пиво пляшкове:</h2>
      {bottleBeer.map((item) => {
        return (
          <div className="grid grid-cols-3">
            <h2>{item.name}</h2>
            <p>{item.portion}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}
