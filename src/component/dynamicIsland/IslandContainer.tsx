interface IslandContainerProps {
  dataMode: string | null;
  LargeMenuItem: React.ReactNode;
}

export default function IslandContainer({
  dataMode,
  LargeMenuItem,
}: IslandContainerProps) {
  return (
    <div className="island__container" data-mode={dataMode}>
      {dataMode === "large" && LargeMenuItem}
    </div>
  );
}
