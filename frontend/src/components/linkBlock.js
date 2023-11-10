import {REPOSITORY_URL} from "../constants";

const LinkBlock = () => {
    return (
        <div className={"Link-Block"}>
            <a href={""}>Documentation</a>
            ~
            <a href={REPOSITORY_URL}>Contribute</a>
            ~
            <a href={""}>Sample Projects</a>
            ~
            <a href={""}>Contact</a>
        </div>
    )
}

export default LinkBlock