import { SVGProps } from "react";
import Inch from "./Inch";
import Uniswap from "./Uniswap";
import Bitfate from "./Kucoin";
import Huobi from "./Bitfate";
import Gateio from "./Gateio";
import Transak from "./Transak";
import Bybit from "./Bybit";
import Swyftx from "./Swyftx";
import Bitdotcom from "./Bitdotcom";
import Latoken from "./Latoken";
import EasycryptoAu from "./EasycryptoAu";
import EasycryptoNz from "./EasycryptoNz";
import Pancake from "./Pancake";
import Lock from "./Lock";

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> =
  {
    Inch,
    Uniswap,
    Kucoin,
    Bitfate,
    Gateio,
    Transak,
    Bybit,
    Swyftx,
    Bitdotcom,
    Latoken,
    EasycryptoAu,
    EasycryptoNz,
    Pancake,
    Lock,
  };

export function getExchangeLogo(
  name: string
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Logo = mapping[name];
  return Logo;
}
