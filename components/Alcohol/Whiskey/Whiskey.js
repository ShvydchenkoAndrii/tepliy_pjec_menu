import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Whiskey() {
  const whiskey = [
    {
      name: "Johnnie Walker Red Label",
      portion: "50мл",
      price: "₴99",
      description: "",
      image: "red-label.png",
    },
    {
      name: "Jack Daniel's Old No.7",
      portion: "50мл",
      price: "₴140",
      description: "",
      image: "jack-daniels.png",
    },
    {
      name: "Jameson Irish Whiskey",
      portion: "50мл",
      price: "₴124",
      description: "",
      image: "jameson.png",
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
        <h1 className="partName">ВІСКІ</h1>
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {whiskey.map((item) => {
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
