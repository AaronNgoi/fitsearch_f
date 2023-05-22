import './App.css';
import HomeText from "./components/HomeText";
import fitSearchIcon from "./assets/fitSearchIcon.webp"
import SearchBar from "./components/SearchBar";
import SeeAllFiltersButton from "./components/SeeAllFiltersButton";

function App() {
  return (
    <div className="App">
        <div className="TopBar">
            <img src={fitSearchIcon} className="icon-45" alt="BrandIcon"></img>
            <p className="TopBarText"> FitSearch</p>
        </div>
        <HomeText></HomeText>
        <SearchBar></SearchBar>
        <SeeAllFiltersButton></SeeAllFiltersButton>
        </div>
  );
}

export default App;
