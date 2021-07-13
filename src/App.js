import './app.css'
import Nav from './components/navBar/navbar'
import Weather from './components/weather_card/weather_card'
import Tab from './components/tab/tab'
function App() {
  return (
    <div className="app">
    <Nav title="Kochi"/>
    <Weather/>
    <Tab/>
    </div>
  );
}

export default App;
