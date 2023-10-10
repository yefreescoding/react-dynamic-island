// Component imports
import SquareMenu from "../SquareMenu";
import LargeCard from "../LargeCard";

interface IslandContainerProps {
  dataMode: string | null;
}

export default function IslandContainer({ dataMode }: IslandContainerProps) {
  return (
    <div className="island__container" data-mode={dataMode}>
      {dataMode === "square" && <SquareMenu />}
      {dataMode === "large" && <LargeCard />}
    </div>
  );
}
