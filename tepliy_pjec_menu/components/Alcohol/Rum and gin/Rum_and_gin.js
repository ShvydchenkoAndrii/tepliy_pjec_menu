import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function RumAndGin() {
  const rumAndGin = [
    {
      name: "Capitan Morgan Spiced gold original?",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Bacardi Spiced",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Gordon's London dry gin",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">РОМ, ДЖИН</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {rumAndGin.map((item) => {
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
