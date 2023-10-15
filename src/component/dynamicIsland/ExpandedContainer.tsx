// Component imports
interface IslandContainerProps {
  dataMode: string | null;
  dynamicIslandContent: React.ReactNode;
  itemLeft: React.ReactNode;
  itemRight: React.ReactNode;
  itemDivide: React.ReactNode;
}

export default function ExpandedContainer({
  dataMode,
  itemLeft,
  itemRight,
  dynamicIslandContent,
  itemDivide,
}: IslandContainerProps) {
  return (
    <div className="expanded_container" data-mode={dataMode}>
      <div className="expanded_items">{itemLeft}</div>
      <nav className="island__nav">{dynamicIslandContent}</nav>
      <div className="expanded_items">{itemRight}</div>
      <div className="divide_component">{itemDivide}</div>
    </div>
  );
}
