import Header from "./components/Header";
import DashBoard from "./pages/dashboard";
import Logs from "./pages/Logs";
import Logs1 from "./pages/Logs2";

function App(){
  return (
    <div>
      <Header title={"Ecotrack"}
      main={true}/>
      <DashBoard/>
      <Logs/>
      <Logs1/>
    </div>
  )
}

export default App;