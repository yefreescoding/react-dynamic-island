import { useState } from "react";
import { motion } from "framer-motion";

// component imports
import Card from "./Cards";
import Header from "./Header";

import data from "../data-mock/data.json";

export default function Container() {
  const [containerState, setContainerState] = useState(1);
  const [apps] = useState(data.app);

  return (
    <motion.main layout className="main" data-state={containerState}>
      <Header state={containerState} setContainerState={setContainerState} />
      <div className="main__cards_container">
        {apps.map((app) => (
          <Card
            logo={app.logo}
            key={app["social-media"]}
            posts={app.posts}
            notifications={app.posts.length}
            state={containerState}
            setContainerState={setContainerState}
          />
        ))}
      </div>
    </motion.main>
  );
}
