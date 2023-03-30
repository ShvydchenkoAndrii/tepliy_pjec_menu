import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Liqueurs() {
  const liqueurs = [
    {
      name: "Vana Tallin original",
      portion: "50мл",
      price: "₴81",
      description: "",
    },
    {
      name: "Старий Ринок",
      portion: "50мл",
      price: "₴27",
      description: "",
    },
    {
      name: "Jägermeister",
      portion: "50мл",
      price: "₴86",
      description: "",
    },
    {
      name: "Becherovka",
      portion: "50мл",
      price: "₴96",
      description: "",
    },
    {
      name: "Martini Bianco",
      portion: "50мл",
      price: "₴50",
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
        <h1 className="partName">ЛІКЕР,ВЕРМУТ,НАСТОЯНКИ</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {liqueurs.map((item) => {
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
