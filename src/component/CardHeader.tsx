import { Close } from "./icons/icons";

interface CardHeaderProps {
  modeState: number;
  logo: string;
  notifications: number;
  setOpenState: () => void;
  dataMode: boolean;
  setOpenStateFalse: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardHeader({
  modeState,
  logo,
  notifications,
  dataMode,
  setOpenStateFalse,
  setIsOpen,
}: CardHeaderProps) {
  return (
    <div className="card__header" data-state={modeState} onClick={() => {}}>
      <img src={`/icons/${logo}`} alt="" />
      {dataMode ? (
        <button
          onClick={() => {
            setOpenStateFalse();
            setIsOpen(!dataMode);
          }}
        >
          <Close />
        </button>
      ) : (
        <>
          {notifications > 0 && (
            <div className="card__notification" data-state={modeState}>
              <span>{notifications}</span>
              {modeState === 2 && <p>Posts</p>}
            </div>
          )}
        </>
      )}
    </div>
  );
}
