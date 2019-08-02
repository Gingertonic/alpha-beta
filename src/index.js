import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import './styles/index.css';
import './styles/App.css';
import CraftBoard from './containers/CraftBoard';
import CustomDragLayer from './containers/CustomDragLayer';
import OrientationWarning from './components/OrientationWarning';

// import RSVP from './containers/RSVP';
import * as serviceWorker from './serviceWorker';

function App() {
    return (

                <div className="App">
                    {/* <DndProvider backend={HTML5Backend}> */}
                    <DndProvider backend={TouchBackend} options={{enableMouseEvents: true}}>
                        <header className="App-header">
                            <CraftBoard />
                            <CustomDragLayer />
                            {/* <RSVP /> */}
                            {/* <OrientationWarning /> */}
                        </header>
                    </DndProvider>
                    
                </div>
        
        
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)	

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
