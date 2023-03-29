import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Cocktails() {
  const champagne = [
    {
      name: "Aperol Sprits",
      portion: "??",
      price: "??",
      description: "aperol, prosecco, orange",
    },
    {
      name: "Old Fashioned",
      portion: "??",
      price: "??",
      description: "бурбон, бітер Angostura, апельсинова цедра",
    },
    {
      name: "Negroni",
      portion: "??",
      price: "??",
      description: "джин, вермут, бітер, апельсинова цедра",
    },
    {
      name: "Vesper Martini",
      portion: "??",
      price: "??",
      description: "сухий вермут, джин",
    },
    {
      name: "Moxito",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Moxito N/A",
      portion: "??",
      price: "??",
      description: "безалкогольне",
    },
    {
      name: "Глінтвейн",
      portion: "??",
      price: "??",
      description: "сезонний",
    },
    {
      name: "Сангрія",
      portion: "??",
      price: "??",
      description: "сезонний",
    },
    {
      name: "Медівка",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Калганівка",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Шипшинівка",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Вишнівка",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: 'СЕТ НАЛИВОК "Апостол"',
      portion: "12шт",
      price: "??",
      description: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">КОКТЕЙЛІ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {champagne.map((item) => {
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
