
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
       <h1>Hello</h1>
            <div className="app_body">
              {/*sidebar*/}

              <Sidebar/>
               
              {/*chat */}
              <Chat/>
            </div>

      




     
        
   
    </div>
  );
}

export default App;
