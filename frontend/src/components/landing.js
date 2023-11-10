import EE from "../assets/EE.png";
import CodeBlock from "./codeBlock";
import LinkBlock from "./linkBlock";
import Title from "./title";

const Landing = () => {
    const Divider = () => {
        return (<p style={{textAlign: "center"}}>~</p>)
    }

    return (
        <header className="App-header">
            <Title/>
            <div className={"Image-container"}>
                <img src={EE} className="App-logo" alt="logo"/>
                <div className={"Text"}>
                    <p>To get started quickly, copy and paste this into</p>
                    <p>your Node project, then run 'npm install' !</p>
                    <Divider/>
                    <CodeBlock/>
                    <Divider/>
                    <p>Feel free to explore the documentation.</p>
                    <p>This is under construction - More coming soon !</p>
                </div>
            </div>
            <LinkBlock/>
        </header>
    )
}

export default Landing;