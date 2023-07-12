import fbIco from "@/public/facebook-ico.png";
import instIco from "@/public/instagram-ico.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://www.facebook.com/teplyipyets.lviv" target="_blank">
          <Image src={fbIco}></Image>
        </a>
        <a href="https://www.instagram.com/teplyi.piets" target="_blank">
          <Image src={instIco}></Image>
        </a>
      </div>
      <h2>☏ +380987321414 </h2>
      <h2>
        © Кав&apos;ярня-музей &apos;&apos;Теплий п&apos;єц&apos;&apos; · 2015
      </h2>
    </div>
  );
}
