import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Tea() {
  const tea = [
    {
      name: `Чай з "Теплого п'єц"`,
      portion: "250/500",
      price: "100",
      description: "суміш карпатських трав та ягід, квітковий мед",
    },
    {
      name: "Чай розсипний",
      portion: "250/500",
      price: "100",
      description: "чорний, зелений, фруктовий",
    },
    {
      name: "Чай вітамінний",
      portion: "250/500",
      price: "100",
      description: "імбир/ малина/ обліпиха",
    },
  ];

  const adds = [
    {
      name: "Молоко",
      portion: "",
      price: "150",
      description: "",
    },
    {
      name: "Мед",
      portion: "",
      price: "100",
      description: "",
    },
    {
      name: "Лимон",
      portion: "0,3/0,5",
      price: "100",
      description: "",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ЧАЙ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (л)</p>
          <p>Ціна (грн)</p>
        </div>
        {tea.map((item) => {
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
      <h2 className="my-4 font-bold">Додатки:</h2>
      {adds.map((item) => {
        return (
          <div className="grid grid-cols-3">
            <h2>{item.name}</h2>
            <p>{item.portion}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}
