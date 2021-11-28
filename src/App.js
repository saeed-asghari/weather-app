import logo from './logo.svg';
import './App.css';
import configureStore from "./store/configureStore";
import { loadWeather} from "./store/weather";

const store = configureStore();

// UI Layer
store.dispatch(loadWeather());
function App() {
  return (
    <div id="background-home-page">
      <div className="content">
        
      </div>
    </div>
  );
}

export default App;
