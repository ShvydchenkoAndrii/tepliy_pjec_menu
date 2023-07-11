import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";

export default function PartHead() {
  return (
    <Image
      src={pjecMenuIco}
      className="partHeadIco"
      alt="міні логотип теплого п'єца для меню "
    ></Image>
  );
}
