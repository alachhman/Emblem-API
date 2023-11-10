const CodeBlock = () => {
    return (
        <div className={"Code-block"}>
            <p><span style={{color: "indianred"}}>import </span><span style={{color: "green"}}>fetch </span><span
                style={{color: "indianred"}}>from </span><span
                style={{color: "lightseagreen"}}>"node-fetch"</span>;
            </p>
            <p><span style={{color: "green"}}>fetch</span>(<span
                style={{color: "lightseagreen"}}>"https://www.FE-API.com/fe8/units"</span>)
            </p>
            <p className={"indent"}>.<span style={{color: "blue"}}>then</span>((<span
                style={{color: "green"}}>response</span>) => <span
                style={{color: "green"}}>response</span><span style={{color: "blue"}}>.json</span>())
            </p>
            <p className={"indent"}>.<span style={{color: "blue"}}>then</span>((<span
                style={{color: "green"}}>data</span>) => <span
                style={{color: "indianred"}}>console</span>.<span style={{color: "blue"}}>log</span>(<span
                style={{color: "green"}}>data</span>));
            </p>
        </div>
    )
}

export default CodeBlock