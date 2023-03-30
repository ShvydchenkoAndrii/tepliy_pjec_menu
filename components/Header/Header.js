import Head from "next/head";
import Image from "next/image";
import pjecLogo from "@/public/tp_logo.svg";
export default function Header() {
  return (
    <>
      <Head>
        <title>Теплий П'єц</title>
      </Head>
      <div className="flex justify-around items-center">
        <Image src={pjecLogo} alt="Логотип кав'ярні-музею Теплий п'єц" width={100}></Image>
        <h1 className="text-2xl">Теплий п'єц</h1>
      </div>
    </>
  );
}
