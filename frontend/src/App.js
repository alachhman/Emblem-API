import EE from './assets/EE.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className={"Image-container"}>
                    <img src={EE} className="App-logo" alt="logo"/>
                    <div className={"Text"}>
                        <p>To get started quickly, copy and paste this into</p>
                        <p>your Node project, then run 'npm install' !</p>
                        <p style={{textAlign: "center"}}>-</p>
                        <div className={"Code-block"}>
                            <p><span style={{color: "indianred"}}>import </span><span style={{color: "green"}}>fetch </span><span style={{color: "indianred"}}>from </span><span style={{color: "lightseagreen"}}>"node-fetch"</span>;
                            </p>
                            <p><span style={{color: "green"}}>fetch</span>(<span style={{color: "lightseagreen"}}>"https://www.FE-API.com/fe8/units"</span>)
                            </p>
                            <p className={"indent"}>.<span style={{color: "blue"}}>then</span>((<span style={{color: "green"}}>response</span>) => <span style={{color: "green"}}>response</span><span style={{color: "blue"}}>.json</span>())
                            </p>
                            <p className={"indent"}>.<span style={{color: "blue"}}>then</span>((<span style={{color: "green"}}>data</span>) => <span style={{color: "indianred"}}>console</span>.<span style={{color: "blue"}}>log</span>(<span style={{color: "green"}}>data</span>));
                            </p>
                        </div>
                        <p style={{textAlign: "center"}}>-</p>
                        <p>Feel free to explore the other endpoints.</p>
                        <p>This is under construction - More coming soon !</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
