import { useContext } from "react";
import { AppContext } from "@/pages";
export default function FirstCourses() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const firstCourses = [
    {
      name: "Борщ з п'єца",
      portion: "𓍝300",
      price: "₴137",
      description:
        "подається зі сметаною, грінками чорного хліба та зеленим маслом",
      image: "borshch.jpg",
    },
    {
      name: "Солянка",
      portion: "𓍝300",
      price: "₴104",
      description: "",
      image: "soljanka.jpg",
    },
    {
      name: "Росіл з перепілки",
      portion: "𓍝300",
      price: "₴160",
      description: "",
      image: "rosil-z-perepilki.jpg",
    },
    {
      name: "Зупа оґонова",
      portion: "𓍝300",
      price: "₴100",
      description: "на телячих хвостах",
      image: "zupa-ogon.jpg",
    },
    {
      name: "Флячки по-львівськи",
      portion: "𓍝300",
      price: "₴152",
      description: "",
      image: "fljachki.jpg",
    },
    {
      name: "Булочка кайзерка",
      portion: "1шт",
      price: "₴15",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ПЕРШІ СТРАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(firstCourses)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
