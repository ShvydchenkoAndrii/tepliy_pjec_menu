import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Cocktails() {
  const cocktails = [
    {
      name: "Aperol Sprits",
      portion: "200мл",
      price: "₴132",
      description: "aperol, prosecco, orange",
    },
    {
      name: "Old Fashioned",
      portion: "??",
      price: "₴140",
      description: "бурбон, бітер Angostura, апельсинова цедра",
    },
    {
      name: "Negroni",
      portion: "120мл",
      price: "₴160",
      description: "джин, вермут, бітер, апельсинова цедра",
    },
    {
      name: "Vesper Martini",
      portion: "100мл",
      price: "₴112",
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
      price: "₴25",
      description: "",
    },
    {
      name: "Калганівка",
      portion: "??",
      price: "₴30",
      description: "",
    },
    {
      name: "Шипшинівка",
      portion: "??",
      price: "₴28",
      description: "",
    },
    {
      name: "Вишнівка",
      portion: "??",
      price: "₴27",
      description: "",
    },
    {
      name: 'СЕТ НАЛИВОК "Апостол"',
      portion: "12шт",
      price: "₴130",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
        <h1 className="partName">КОКТЕЙЛІ</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {cocktails.map((item) => {
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
