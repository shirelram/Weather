
import MyForm from './component/reactChildren'
import UserDetails from './component/userDeatails'
import Pic1 from './component/pic1'
import Pic2 from './component/pic2'

import './App.css';

function App() {
  return (
    <div className="App">

      <MyForm>
        <UserDetails></UserDetails>
        <Pic1>
           <Pic2  myImg='logo192.png'></Pic2>
        </Pic1>
        <Pic2 myImg='logo192.png'></Pic2>
        <Pic2 myImg='10X15.png'></Pic2>
      </MyForm>

    </div>
  );
}

export default App;
