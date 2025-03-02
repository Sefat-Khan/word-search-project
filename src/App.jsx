import MainContainer from "./components/mainContainer";
import SideBar from "./components/sideBar";
import WordProvider from "./context/WordContext";

function App() {
  return (
    <WordProvider>
      <div className="flex justify-center items-center p-8 gap-x-8 bg-linear-to-r from-[#2C3F51] to-[#297FB8] scroll-smooth">
        <MainContainer />
        <SideBar />
      </div>
    </WordProvider>
  );
}

export default App;
