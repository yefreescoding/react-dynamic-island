import { useState, useContext } from "react";

// Dynamic Island imports
import DynamicIsland from "./dynamicIsland/DynamicIsland";
import ExpandedContainer from "./dynamicIsland/ExpandedContainer";
import IslandContainer from "./dynamicIsland/IslandContainer";

// Icon imports
import { FaShoppingCart } from "react-icons/fa";
import { BsCurrencyEuro } from "react-icons/bs";

// component imports
import CardsContainer from "./CardsContainer";
import CartNavigation from "./CartNavigation";
import SquareMenu from "./SquareMenu";

import { AppContext } from "../context/AppContext";

export default function CartSection() {
  const [dataMode, setDataMode] = useState<string | null>("");

  // const [cartItemCount] = useState<number>(0);

  const { state } = useContext(AppContext);

  const handleDataMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const actualDataMode = event.currentTarget.getAttribute("data-mode");
    setDataMode(actualDataMode);
  };
  return (
    <section className="section cart">
      <DynamicIsland dataMode={dataMode}>
        <>
          <ExpandedContainer
            dynamicIslandContent={
              <CartNavigation handleDataMode={handleDataMode} />
            }
            dataMode={dataMode}
            itemLeft={<FaShoppingCart />}
            itemRight={state.data.length}
            itemDivide={
              <>
                <BsCurrencyEuro />
              </>
            }
          />
          <IslandContainer dataMode={dataMode} LargeMenuItem={<SquareMenu />} />
        </>
      </DynamicIsland>
      <div className="text">
        <h2>The same animations, functionality, and design as the original.</h2>
        <p>
          This component will look amazing in any webpage or web application you
          want to add it to. Feel free to modify the code to your needs.
        </p>
      </div>
      <CardsContainer />
    </section>
  );
}
