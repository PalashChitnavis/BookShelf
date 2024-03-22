import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function TabSection() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 d-flex justify-content-evenly"
    >
      <Tab eventKey="genre" title="Genre Spotlight">
        Tab content for Genre Spotlight
      </Tab>
      <Tab eventKey="author" title="Author Spotlight">
        Tab content for Author Spotlight
      </Tab>
      <Tab eventKey="new" title="New and Noteworthy">
        Tab content for New and Noteworthy
      </Tab>
      <Tab eventKey="top" title="Top of the Month">
        Tab content for Top of the month
      </Tab>
      <Tab eventKey="classics" title="Classics Reimagined">
        Tab content for Classics
      </Tab>
    </Tabs>
  );
}

export default TabSection;
