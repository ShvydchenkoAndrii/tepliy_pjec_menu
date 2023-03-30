import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Coffee() {
  const coffee = [
    {
      name: "Кава з п'єца",
      portion: "75мл",
      price: "₴42",
      description: "готується в турці на вогні",
    },
    {
      name: "Кава по-львівськи",
      portion: "75мл",
      price: "₴42",
      description: "готується на піску",
    },
    {
      name: "Еспресо",
      portion: "35мл",
      price: "₴42",
      description: "",
    },
    {
      name: "Американо",
      portion: "130мл",
      price: "₴42",
      description: "",
    },
    {
      name: "Флет вайт",
      portion: "180мл",
      price: "₴94",
      description: "",
    },
    {
      name: "Капучино",
      portion: "150мл",
      price: "₴62",
      description: "",
    },
    {
      name: "Лате",
      portion: "200мл",
      price: "₴72",
      description: "",
    },
    {
      name: "Лате з медом",
      portion: "175/25мл",
      price: "₴81",
      description: "",
    },
    {
      name: "Какао",
      portion: "200мл",
      price: "₴40",
      description: "",
    },
    {
      name: "Кава з цитриною",
      portion: "130мл",
      price: "₴45",
      description: "",
    },
    {
      name: "Кава по-ірландськи",
      portion: "190мл",
      price: "₴98",
      description: "з вершками та віскі",
    },
    {
      name: "Вогняна вежа",
      portion: "140мл",
      price: "₴64",
      description: "кава з коньяком",
    },
    {
      name: "Коліжанка",
      portion: "190мл",
      price: "₴68",
      description: "кава, лікер, вершки",
    },
    {
      name: "Львівський батяр",
      portion: "190мл",
      price: "₴84",
      description: "кава, ром, лікер, вершки",
    },
    {
      name: "Львівський дощ",
      portion: "230мл",
      price: "₴77",
      description: "мед, кардамон, кориця, молоко",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={90} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">КАВА/КАВОВІ НАПОЇ</h1>
        <Image src={pjecMenuIco} width={90} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
        {coffee.map((item) => {
          return (
            <div key={item.name} className="partItem">
            <div>
              <h2 className="itemName">{item.name}</h2>
              <p className="itemDescrip">{item.description}</p>
            </div>
            <div className="itemPortionPrice">
              <p>{item.portion}</p>
              <p>{item.price}</p>
            </div>
          </div>
          );
        })}
      <div className="blackUnderlline"></div>
    </div>
  );
}
