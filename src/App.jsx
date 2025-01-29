import MainContainer from "./components/mainContainer";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div className="flex justify-center items-center p-8 gap-x-8 bg-linear-to-r from-[#2C3F51] to-[#297FB8] scroll-smooth">
      <MainContainer />
      <SideBar />
    </div>
  );
}

export default App;
