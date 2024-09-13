import "./App.css";
import Navbar from "./components/Navbar";
import SectionCard from "./components/SectionCard";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <main className="min-h-screen w-screen flex flex-1 bg-slate-900">
        <div className=" w-1/2 h-screen flex justify-center items-center">
          <div className="bg-[#616161] w-[85%] h-[85%] rounded-2xl border border-black"></div>
        </div>
        <div className="  w-1/2 h-screen flex flex-col justify-center items-center gap-5">
          <SectionCard children={<Navbar />} />
          <div className="bg-slate-600 w-[70%] h-1 rounded-full shadow-box"></div>

          <SectionCard children={<Gallery />} />
          <div className="bg-slate-600 w-[70%] h-1 rounded-full my-2 shadow-box"></div>
        </div>
      </main>
    </>
  );
}

export default App;
