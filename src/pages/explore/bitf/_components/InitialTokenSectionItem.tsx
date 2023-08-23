import { FiIcon } from "../icons/FiIcon";
import { AiIcon } from "../icons/AiIcon";
import classNames from "classnames";
import { BinIcon } from "../icons/BinIcon";

export function InitialTokenSectionItem({
  percentage,
  desc,
  className,
}: {
  icon: InitialTokenSectionIcons;
  percentage: string;
  desc: string;
  className?: string;
}) {

  
      <div className="mt-[18.34px] text-dark-700 text-xl font-bold">
        {percentage}
      </div>
      <div className="mt-1 text-sm text-dark-700 font-desc">{desc}</div>
    </div>
  );
}

export enum InitialTokenSectionIcons {
  AIRDROP,
  BURN,
  DESTROY,
}

const iconMapping = {
  [InitialTokenSectionIcons.AIRDROP]: FiIcon,
  [InitialTokenSectionIcons.BURN]: AiIcon,
  [InitialTokenSectionIcons.DESTROY]: BinIcon,
};
