import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app-header">
        <Header />
      </div>
      <div className="app-jobs">
        <Jobs />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
