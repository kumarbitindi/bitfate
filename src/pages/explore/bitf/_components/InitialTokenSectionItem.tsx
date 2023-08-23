
import classNames from "classnames";
import { AiIcon } from "../icons/AiIcon";
import { BinIcon } from "../icons/BinIcon";
import { FiIcon } from "../icons/FiIcon";

export function InitialTokenSectionItem({
  icon,
  percentage,
  desc,
  className,
}: {
  icon: InitialTokenSectionIcons;
  percentage: string;
  desc: string;
  className?: string;
}) {
  const Icon = iconMapping[icon];
  return (
    <div
      className={classNames(
        "flex flex-col md:w-[136.33px] w-[93.5px]",
        className
      )}
    >
      <Icon className="text-brand-100" size={28} />
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
