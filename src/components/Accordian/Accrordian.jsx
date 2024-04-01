import { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accrordian = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="accordian">
      <h1>Accordian List</h1>
      <AccordianItem
        title="Accordian one"
        isActive={active === 0}
        onActive={() => setActive(0)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        temporibus velit impedit, saepe molestiae eligendi quo asperiores illo
        ratione provident, repellat omnis accusamus reiciendis suscipit ad
        repellendus deserunt officia earum?
      </AccordianItem>
      <AccordianItem
        title="Accordian two"
        isActive={active === 1}
        onActive={() => setActive(1)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        temporibus velit impedit, saepe molestiae eligendi quo asperiores illo
        ratione provident, repellat omnis accusamus reiciendis suscipit ad
        repellendus deserunt officia earum?
      </AccordianItem>
      <AccordianItem
        title="Accordian two"
        isActive={active === 2}
        onActive={() => setActive(2)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        temporibus velit impedit, saepe molestiae eligendi quo asperiores illo
        ratione provident, repellat omnis accusamus reiciendis suscipit ad
        repellendus deserunt officia earum?
      </AccordianItem>
      <AccordianItem
        title="Accordian two"
        isActive={active === 3}
        onActive={() => setActive(3)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        temporibus velit impedit, saepe molestiae eligendi quo asperiores illo
        ratione provident, repellat omnis accusamus reiciendis suscipit ad
        repellendus deserunt officia earum?
      </AccordianItem>
    </div>
  );
};

export default Accrordian;
