import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Snacks() {
  const snacks = [
    {
      name: "Птисі на кльоші",
      portion: "10шт",
      price: "??",
      description:
        "еклери з вершково-сирною начинкою та печінковим паштетом, подаються з жарвлиновим соусом",
    },
    {
      name: "Язик із хроном",
      portion: "100",
      price: "??",
      description: "",
    },
    {
      name: "Припрошанки",
      portion: "350",
      price: "??",
      description: "сало з часником, сирна намазка, фаршмак, авантюрка",
    },
    {
      name: "Кахля батяра / з чверткою",
      portion: "400",
      price: "??",
      description: "м'ясна нарізка, квашенина",
    },
    {
      name: "Гефелті фіш ?",
      portion: "135",
      price: "??",
      description: "фарширована риба",
    },
    {
      name: "Оселедець з цибулькою",
      portion: "170",
      price: "??",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
        <h1 className="partName">ПЕРЕКУСИ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {snacks.map((item) => {
          return (
            <div className="partItem">
              <div>
                <h2 className="itemName">{item.name}</h2>
                <p className="itemDescrip">{item.description}</p>
              </div>
              <p>{item.portion}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
