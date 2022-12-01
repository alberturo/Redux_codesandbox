import "./styles.css";
import { NavBar } from "./components/NavBar";
import { UserList } from "./components/UserList";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <UserList />
    </Provider>
  );
}

export default App;
