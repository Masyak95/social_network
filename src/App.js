import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


function App(props) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/dialogs'}
                           element={<Dialogs state={props.state.dialogsPage}/>}
                    />
                    <Route path={'/profile'}
                           element={<Profile state={props.state.profilePage}
                                             addPost={props.addPost}
                           />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
