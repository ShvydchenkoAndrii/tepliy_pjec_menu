import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Cocktails() {
  const cocktails = [
    {
      name: "Aperol Sprits",
      portion: "200мл",
      price: "₴132",
      description: "aperol, prosecco, orange",
      image: "aperol.png",
    },
    {
      name: "Old Fashioned",
      portion: "??",
      price: "₴140",
      description: "бурбон, бітер Angostura, апельсинова цедра",
      image: "old-fashioned.png",
    },
    {
      name: "Negroni",
      portion: "120мл",
      price: "₴160",
      description: "джин, вермут, бітер, апельсинова цедра",
      image: "negroni.png",
    },
    {
      name: "Vesper Martini",
      portion: "100мл",
      price: "₴112",
      description: "сухий вермут, джин",
      image: "vesper-martini.png",
    },
    {
      name: "Moxito",
      portion: "??",
      price: "??",
      description: "",
      image: "moxito.png",
    },
    {
      name: "Moxito N/A",
      portion: "??",
      price: "??",
      description: "безалкогольне",
      image: "moxito.png",
    },
    {
      name: "Глінтвейн",
      portion: "??",
      price: "??",
      description: "сезонний",
      image: "glintwein.png",
    },
    {
      name: "Сангрія",
      portion: "??",
      price: "??",
      description: "сезонний",
      image: "sangrija.png",
    },
    {
      name: "Медівка",
      portion: "50мл",
      price: "₴25",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Калганівка",
      portion: "50мл",
      price: "₴30",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Шипшинівка",
      portion: "50мл",
      price: "₴28",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Вишнівка",
      portion: "50мл",
      price: "₴27",
      description: "",
      image: "vishnivka.png",
    },
    {
      name: 'СЕТ НАЛИВОК "Апостол"',
      portion: "12шт",
      price: "₴130",
      description: "",
      image: "apostol.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
        <h1 className="partName">КОКТЕЙЛІ</h1>
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {cocktails.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <img src={item.image} width={100}></img>
            <h2 className="itemName">{item.name}</h2>
            <p className="itemDescrip">{item.description}</p>
            <p className="itemPortion">{item.portion}</p>
            <p className="itemPrice">{item.price}</p>
          </div>
        );
      })}
      <div className="blackUnderlline"></div>
    </div>
  );
}
