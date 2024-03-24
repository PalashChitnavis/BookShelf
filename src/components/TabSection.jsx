import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Fiction from "./Fiction";
import Mystery from "./Mystery";
import Romance from "./Romance";
import Horror from "./Horror";
function TabSection() {
  const [key, setKey] = useState("fiction");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="fiction" title="Fiction" className="col-6 col-md-3 w-100">
        <Fiction />
      </Tab>
      <Tab eventKey="mystery" title="Mystery" className="col-6 col-md-3 w-100">
        <Mystery />
      </Tab>
      <Tab eventKey="romance" title="Romance" className="col-6 col-md-3 w-100">
        <Romance />
      </Tab>
      <Tab eventKey="horror" title="Horror" className="col-6 col-md-3 w-100">
        <Horror />
      </Tab>
    </Tabs>
  );
}

export default TabSection;
