import { Navbar } from "../Navbar";
import { Content } from "../Content";
import { OnboardUpdater } from "../../modules/onboard/updater";

const Updaters = () => {
  return <OnboardUpdater />;
};

function App() {
  return (
    <div className="app">
      <Updaters />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
