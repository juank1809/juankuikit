import { DiceIcon, HatIcon, PenIcon } from "../Icons";
import Badge from "../Badge/Badge";
import { Button } from "../Button";
import { ButtonWithIcon } from "../ButtonWithIcon/ButtonWithIcon";

export interface IslandProps {
  badgeText: string;
  head: string;
  description: string;
  mainButtonLabel: string;
  secondaryButtonLabel: string;
  tertiaryButtonLabel: string;
  progress?: number;
}

const Island: React.FC<IslandProps> = ({
  badgeText,
  head,
  description,
  mainButtonLabel,
  secondaryButtonLabel,
  tertiaryButtonLabel,
  progress,
}) => {
  return (
    <div className="island__container">
      <div className="island__shape">
        <DiceIcon />
      </div>
      {progress && (
        <div
          style={{
            width: `${progress}%`,
          }}
          className={`island__progress ${
            progress < 100
              ? "island__progress--on-progress"
              : "island__progress--completed"
          }`}
        >
          <span className="p-3">Progress {progress}% </span>
        </div>
      )}
      <div className="island__body">
        <Badge type="white">{badgeText} </Badge>
        <h6 className="island__heading">{head} </h6>
        <p className="island__description p-2">{description} </p>
        <div className="island__buttons">
          <Button
            className="island__main-button"
            type="secondary-white"
            label={mainButtonLabel}
          />
          <ButtonWithIcon Icon={<HatIcon />} label={secondaryButtonLabel} />
          <ButtonWithIcon Icon={<PenIcon />} label={tertiaryButtonLabel} />
        </div>
      </div>
    </div>
  );
};

export default Island;
