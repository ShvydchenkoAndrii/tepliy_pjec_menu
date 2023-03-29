import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Coffee() {
  const coffee = [
    {
      name: "Кава з п'єца",
      portion: "75",
      price: "100",
      description: "готується в турці на вогні",
    },
    {
      name: "Кава по-львівськи",
      portion: "75",
      price: "100",
      description: "готується на піску",
    },
    {
      name: "Еспресо",
      portion: "35",
      price: "100",
      description: "е",
    },
    {
      name: "Американо",
      portion: "130",
      price: "100",
      description: "",
    },
    {
      name: "Флет вайт",
      portion: "180",
      price: "100",
      description: "",
    },
    {
      name: "Капучино",
      portion: "150",
      price: "100",
      description: "",
    },
    {
      name: "Лате",
      portion: "200",
      price: "100",
      description: "",
    },
    {
      name: "Лате з медом",
      portion: "175/25",
      price: "100",
      description: "",
    },
    {
      name: "Какао",
      portion: "200",
      price: "100",
      description: "",
    },
    {
      name: "Кава з цитриною",
      portion: "130",
      price: "100",
      description: "",
    },
    {
      name: "Кава по-ірландськи",
      portion: "190",
      price: "100",
      description: "з вершками та віскі",
    },
    {
      name: "Вогняна вежа",
      portion: "140",
      price: "100",
      description: "кава з коньяком",
    },
    {
      name: "Львівський батяр",
      portion: "190",
      price: "100",
      description: "ром, лікер, вершки",
    },
    {
      name: "Львівський дощ?",
      portion: "190/230",
      price: "100",
      description: "мед, кардамон, кориця, молоко",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">КАВА/КАВОВІ НАПОЇ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (л)</p>
          <p>Ціна (грн)</p>
        </div>
        {coffee.map((item) => {
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
