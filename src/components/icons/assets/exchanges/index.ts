import { SVGProps } from "react";
import Inch from "./Inch";
import Uniswap from "./Uniswap";
import Ocean from "./Ocean";
import Bitfate from "./Bitfate";
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
import Dex from "./Dex";

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> =
  {
    Inch,
    Uniswap,
    Ocean,
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
    Dex,
  };

export function getExchangeLogo(
  name: string
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Logo = mapping[name];
  return Logo;
}
