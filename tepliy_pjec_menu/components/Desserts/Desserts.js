import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Desserts() {
  const desserts = [
    {
      name: "Львівський сирник",
      portion: "за 100г",
      price: "??",
      description: "",
    },
    {
      name: "Штрудель яблучний",
      portion: "за 100г",
      price: "??",
      description: "",
    },
    {
      name: "Львівські андрути",
      portion: "100",
      price: "??",
      description: "",
    },
    {
      name: "Спартак",
      portion: "100",
      price: "??",
      description: "",
    },
    {
      name: "Зимний п'єц",
      portion: "150",
      price: "??",
      description: "морозиво пломбір з варенням та школадною присипкою",
    },
    {
      name: "Горіх в шоколаді",
      portion: "за 100г",
      price: "??",
      description:
        "три види горіхів, шоколад, пісочне тісто, подається теплим з кулькою морозива",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ДЕСЕРТИ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {desserts.map((item) => {
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
