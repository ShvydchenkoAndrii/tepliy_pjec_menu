import Beer from "@/components/Alcohol/Beer/Beer";
import Champagne from "@/components/Alcohol/Champagne/Champagne";
import CognacAndBrandy from "@/components/Alcohol/Cognac and brandy/Cognac_and_brandy";
import Liqueurs from "@/components/Alcohol/Liqueurs/Liqueurs";
import RumAndGin from "@/components/Alcohol/Rum and gin/Rum_and_gin";
import Vodka from "@/components/Alcohol/Vodka/Vodka";
import Whiskey from "@/components/Alcohol/Whiskey/Whiskey";
import Wine from "@/components/Alcohol/Wine/Wine";

export default function Alcohol() {
  return (
    <>
      <Beer />
      <Champagne />
      <Wine />
      <Liqueurs />
      <Vodka />
      <Whiskey />
      <CognacAndBrandy />
      <RumAndGin />
    </>
  );
}
