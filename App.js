import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {originals, action, Comedy, Documentaries, Horror, Romance, } from './genresUrl'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Origin" isLarg url={originals}/>
      <RowPost title="Actions" url={action}/>
      <RowPost title="Comedy" url={Comedy}/>
      <RowPost title="Romance" url={Romance}/>
      <RowPost title="Documentaries" url={Documentaries}/>
      {/* <RowPost title="Horror" url={Horror}/> */}
    </div>
  );
}

export default App;
