import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Vodka() {
  const vodka = [
    {
      name: "Лемберг",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Львівська шляхетна",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Львівська з перцем",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Finlandia",
      portion: "??",
      price: "??",
      description: "оригінал, журавлина",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ГОРІЛКА</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {vodka.map((item) => {
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
