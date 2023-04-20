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
    },
    {
      name: "Солянка",
      portion: "𓍝300",
      price: "₴104",
      description: "",
    },
    {
      name: "Росіл з перепілки",
      portion: "𓍝300",
      price: "₴160",
      description: "",
    },
    {
      name: "Чанахи від шефа",
      portion: "𓍝300",
      price: "₴100",
      description: "на телячих хвостах",
    },
    {
      name: "Флячки по-львівськи",
      portion: "𓍝300",
      price: "₴152",
      description: "",
    },
    {
      name: "Булочка кайзерка",
      portion: "1шт",
      price: "₴15",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ПЕРШІ СТРАВИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(firstCourses)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
