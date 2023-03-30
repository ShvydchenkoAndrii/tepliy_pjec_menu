import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Snacks() {
  const snacks = [
    {
      name: "Птисі на кльоші",
      portion: "10шт",
      price: "₴157",
      description:
        "еклери з вершково-сирною начинкою та печінковим паштетом, подаються з жарвлиновим соусом",
    },
    {
      name: "Язик із хроном",
      portion: "𓍝100",
      price: "₴110",
      description: "",
    },
    {
      name: "Припрошанки",
      portion: "𓍝350",
      price: "₴207",
      description: "сало з часником, сирна намазка, фаршмак, авантюрка",
    },
    {
      name: "Кахля батяра/ з чверткою",
      portion: "𓍝400",
      price: "₴340 / ₴440",
      description: "м'ясна нарізка, квашенина ",
    },
    {
      name: "Гефелті фіш",
      portion: "𓍝135",
      price: "₴125",
      description: "фарширована риба",
    },
    {
      name: "Оселедець",
      portion: "𓍝170",
      price: "₴80",
      description: " з цибулькою",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image
          src={pjecMenuIco}
          width={80}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
        <h1 className="partName">ПЕРЕКУСИ</h1>
        <Image
          src={pjecMenuIco}
          width={80}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {snacks.map((item) => {
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
