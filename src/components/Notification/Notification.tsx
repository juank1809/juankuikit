import { SuccessIcon, ErrorIcon, InfoIcon } from "../Icons";
import { Button } from "../Button";

export interface NotificationProps {
  head?: string;
  state: "success" | "error" | "info";
  description?: string;
  buttons: boolean;
}

const Notification: React.FC<NotificationProps> = ({
  state,
  head,
  description,
  buttons,
}) => {
  let icon;
  if (state === "success") {
    icon = <SuccessIcon withBackground />;
  } else if (state === "error") {
    icon = <ErrorIcon />;
  } else {
    icon = <InfoIcon />;
  }
  return (
    <div className="notification__container">
      <div className="notification__text-and-button-container">
        <div
          className="notification__text"
          style={{
            marginBottom: buttons ? "1.5rem" : "0",
          }}
        >
          <div>
            <p className="p-1--bold notification__header">{head}</p>
            <p className="p-2">{description}</p>
          </div>
          {icon}
        </div>
        {buttons && (
          <div>
            <Button type="secondary" label="Close" className="margin-right-8" />
            <Button type="flat" label="Help" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
