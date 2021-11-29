import logo from './logo.svg';
import './App.css';
import configureStore from "./store/configureStore";
import { loadWeather,getWeather} from "./store/weather";
const store = configureStore();
// UI Layer
store.dispatch(loadWeather());
store.dispatch(getWeather());

function App() {
  return (
    <div id="background-home-page">
      <div className="content">
        
      </div>
    </div>
  );
}

export default App;
