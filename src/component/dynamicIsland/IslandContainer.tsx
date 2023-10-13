// Component imports
interface IslandContainerProps {
  dataMode: string | null;
  squareMenuItem: React.ReactNode;
  LargeMenuItem: React.ReactNode;
}

export default function IslandContainer({
  dataMode,
  squareMenuItem,
  LargeMenuItem,
}: IslandContainerProps) {
  return (
    <div className="island__container" data-mode={dataMode}>
      {dataMode === "square" && squareMenuItem}
      {dataMode === "large" && LargeMenuItem}
    </div>
  );
}
