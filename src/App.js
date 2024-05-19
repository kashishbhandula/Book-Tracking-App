import Header from "./components/header/header";
import BooksPage from "./pages/books/booksPage";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCollectionPage from "./pages/myCollection/myCollection";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <div className="header_space">
            <Routes>
              <Route element={<BooksPage />} path="/" />
              <Route element={<MyCollectionPage />} path="my-collection" />
            </Routes>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
