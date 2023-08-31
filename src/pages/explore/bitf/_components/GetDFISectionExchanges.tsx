import Link from "next/link";
import { getExchangeLogo } from "@components/icons/assets/exchanges";
import { useTranslation } from "next-i18next";

interface ExchangeItem {
  id: string;
  name: string;
  url: string;
}

export default function GetDFISectionExchanges() {
  const { t } = useTranslation("page-explore-dfi");
  const exchanges: ExchangeItem[] = [
    {
      id: "GetDFISection.Exchange.Bittrex",
      name: "Pancake",
      url: "https://pancakeswap.finance/swap",
    },
      {
      id: "GetDFISection.Exchange.Huobi",
      name: "Uniswap",
      url: "https://app.uniswap.org/#/swap",
    },
     {
      id: "GetDFISection.Exchange.Gateio",
      name: "Ocean",
      url: "https://app.openocean.finance/CLASSIC#/BSC",
    },
   
        {
      id: "GetDFISection.Exchange.Bitrue",
      name: "Inch",
      url: "https://app.1inch.io/#/56/simple/swap/BNB",
    },
       {
      id: "GetDFISection.Exchange.Bitrue",
      name: "Inch",
      url: "https://app.1inch.io/#/56/simple/swap/BNB",
    },
    
      {
      id: "GetDFISection.Exchange.lock",
      name: "Bitfate",
      url: "https://bitfate.finance",
    },
  
   
  ];

  const staking: ExchangeItem[] = [
    
       {
      id: "GetDFISection.Exchange.Transak",
      name: "Dex",
      url: "https://dex.guru/token/bsc/",
    },
   
 
  ];

  return (
    <section className="w-full">
      <ExchangeGrid items={exchanges} />

      <div className="mt-14">
        <div className="font-desc text-dark-700 mb-4">
          {t("getDfiSection.stakingText")}
        </div>
        <ExchangeGrid items={staking} />
      </div>
    </section>
  );
}

function ExchangeGrid({ items }: { items: ExchangeItem[] }): JSX.Element {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => {
        const Logo = getExchangeLogo(item.name);
        return (
          <Link
            key={item.id}
            data-testid={item.id.replaceAll(".", "-").toLowerCase()}
            href={item.url}
            className="rounded-[5px] p-[0.5px] bg-dark-200 hover:accent-gradient-1 active:opacity-70"
            target="_blank"
          >
            <article className="w-full h-[115px] rounded-[5px] flex justify-center items-center bg-dark-00">
              <Logo />
            </article>
          </Link>
        );
      })}
    </div>
  );
}
