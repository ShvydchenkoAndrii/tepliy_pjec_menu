import { NEXT_BUILTIN_DOCUMENT } from "next/dist/shared/lib/constants";

export default function Menu() {
  const menu = [
    { name: "Alcohol", clicked: false, id: "alcohol" },
    { name: "Assorted", clicked: false },
    { name: "Breakfasts", clicked: false },
    { name: "Cold drinks", clicked: false },
    { name: "Desserts", clicked: false },
    { name: "First courses", clicked: false },
    { name: "Fish dishes", clicked: false },
    { name: "Hot drinks", clicked: false },
    { name: "Main dishes", clicked: false },
    { name: "Salads", clicked: false },
    { name: "Snacks", clicked: false },
  ];

  const activeMenuPage = (item) => {
    if (item === "alcohol") {
      console.log(2);
    } else {
      console.log(1);
    }
  };
  console.log(menu);
  return (
    <div className="">
      {menu.map((item) => {
        return (
          <button
            onClick={() => activeMenuPage(item.id)}
            key={item.name}
            id={item.name}
            className="border m-1 p-1"
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
