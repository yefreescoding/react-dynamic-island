interface CartNavigationProps {
  handleDataMode: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CartNavigation({
  handleDataMode,
}: CartNavigationProps) {
  return (
    <nav className="cart_navigation_bar">
      <button type="button" data-mode={null} onClick={handleDataMode}>
        hide
      </button>
      <button type="button" data-mode="expanded" onClick={handleDataMode}>
        items
      </button>
      <button type="button" data-mode="divide" onClick={handleDataMode}>
        total
      </button>
      <button type="button" data-mode="square" onClick={handleDataMode}>
        list
      </button>
    </nav>
  );
}
