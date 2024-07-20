import AppContainer from "./components/AppContainer";
import CardContainer from "./components/CardContainer";
import Item from "./components/Item";
import { useContext } from "react";
import InputField from "./components/Input";
import { DataContext } from "./context/dataContext";
import TitleImage from "./components/ImageTitle"
function App() {
  const { items, handleSearch} = useContext(DataContext)
  return (
    <AppContainer>
      <TitleImage/>
      <InputField onKeyDown={handleSearch}  placeholder="Search"  />
      <CardContainer>
        {items.map((item) => {
          return (
            <Item  key={item.id} item={item} />
          )
        })}
      </CardContainer>
    </AppContainer>
  );
}

export default App;
