import './App.css';
import Account from './components/account/account';
import Bonus from './components/bonus/bonus';

import { useSelector } from "react-redux";

// additional
import Reward from './components/reward/reward';
import Admin from './components/admin/admin';


function App() {



  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  
  const account = useSelector(state => state.account);


  return (
    <div className="App">

      <h4 style={{ color: "red" }}>App : </h4>



      <Account />
      <Bonus />

      {/* additional */}
      <Reward />

      <Admin />
    </div>
  );
}

export default App;
