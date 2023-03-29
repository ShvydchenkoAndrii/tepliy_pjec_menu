import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Assorted() {
  const assorted = [
    {
      name: "Сирна тареля",
      portion: "??",
      price: "??",
      description: "сирне асорті",
    },
    {
      name: "М'ясна тареля",
      portion: "??",
      price: "??",
      description: "асорті з м'сних делікатесів",
    },
    {
      name: "Таца з п'єца",
      portion: "??",
      price: "??",
      description: "запечені ребра, ковбаски, картопля, курче філе су-від, кров'янка, печериці",
    },
    {
      name: "Квашенина з діжки та маринади",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Сало з вугликами",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">СТРАВИ ДО ЗАБАВИ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {assorted.map((item) => {
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
