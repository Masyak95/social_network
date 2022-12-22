import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 2, message: 'It\'s my second post', likesCount: 2},
]
let dialogs = [
    {id: 1, name: 'Etienne Mandel Tristan'},
    {id: 2, name: 'John Barnes'},
    {id: 3, name: 'Jenelle Lacey Jasmyn'},
    {id: 4, name: 'Toya Avery Rahel'},
    {id: 5, name: 'Arnold Fraser'},
    {id: 6, name: 'Lillian Gilson'}
]
let messages = [
    {id: 1, message: 'Keep Your Shirt On'},
    {id: 2, message: 'How is your it-study?'},
    {id: 3, message: 'Jaws of Death'},
    {id: 4, message: 'Hi!'},
    {id: 5, message: 'Yo'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts}
                 dialogs={dialogs}
                 messages={messages}
            />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
