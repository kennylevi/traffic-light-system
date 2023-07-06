import "./styles.css";
import TrafficLightPanel from "./components/TrafficLightPanel";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Welcome to Excercise One</h1>
      <TrafficLightPanel />

      <div className="crucifix">
        <div className="horizontal"></div>
        <div className="vertical"></div>
      </div>
    </div>
  );
}
