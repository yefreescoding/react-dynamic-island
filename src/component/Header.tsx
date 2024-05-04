import { Close, Expand } from "./icons/icons";

const img = "/images/avatar.jpg";
const userName = "Yefree Valdez";
const userAccount = "yefree_web_dev";

interface HeaderProps {
  state: number;
  setContainerState: (payload: number) => void;
}

export default function Header({ state, setContainerState }: HeaderProps) {
  return (
    <header className="header" data-state={state}>
      <div className="header__img_cont">
        <img src={img} alt="" />
      </div>
      <div className="header__text">
        <h1>{userName}</h1>
        <p>@{userAccount}</p>
      </div>
      <button
        onClick={() => {
          if (state === 1) {
            setContainerState(2);
          } else {
            setContainerState(1);
          }
        }}
      >
        {state === 1 ? <Expand /> : <Close />}
      </button>
    </header>
  );
}
