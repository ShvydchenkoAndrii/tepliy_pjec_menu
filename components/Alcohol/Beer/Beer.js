import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";

export default function Beer() {
  const beerFromKeg = [
    {
      name: "Львівське світле",
      portion: "300/ 500мл",
      price: "₴32/ ₴52",
      description: "",
      image: "lvivske-svitle.png",
    },
    {
      name: "Kronenbourg blanc",
      portion: "300/ 500мл",
      price: "₴32/ ₴52",
      description: "",
      image: "kronenbourg-blanc.png",
    },
  ];

  const bottleBeer = [
    // {
    //   name: "Львівське світле",
    //   portion: "??",
    //   price: "??",
    //   description: "",
    // },
    // {
    //   name: "Kronenbourg blanc",
    //   portion: "??",
    //   price: "??",
    //   description: "",
    // },
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
        <h1 className="partName">ПИВО</h1>
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      <h2 className="partSection">Пиво розливене:</h2>
      {beerFromKeg.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <div className="itemPicture">
              <img src={item.image}></img>
            </div>
            <h2 className="itemName">{item.name}</h2>
            <p className="itemDescrip">{item.description}</p>
            <p className="itemPortion">{item.portion}</p>
            <p className="itemPrice">{item.price}</p>
          </div>
        );
      })}
      <h2 className="partSection">Пиво пляшкове:</h2>

      {bottleBeer.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <div className="itemPicture">
              <img src={item.image}></img>
            </div>
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
