import Image from "next/image";
import pjecLogo from "@/public/tp_logo.svg";
export default function Header() {
  return (
    <>
      
      <div className="flex justify-around items-center">
        <Image
          src={pjecLogo}
          alt="Логотип кав'ярні-музею Теплий п'єц"
          width={100}
        ></Image>
        <h1 className="text-2xl">Теплий п&apos;єц</h1>
      </div>
    </>
  );
}
