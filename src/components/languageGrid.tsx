import {FunctionComponent} from 'react'
import {Col} from "react-bootstrap";
import {ILanguage} from "../models/EN/ILanguage.ts";

const LanguageGrid: FunctionComponent<ILanguage> = ({name}) => {
    return (
        <Col align='left' xs={2} className={"m-3"}>
            <i className={`devicon-resize devicon-${name}-plain-wordmark devicon-${name}-plain devicon-${name}-original`}>
                <span className="sr-only">
                    {name.charAt(0).toUpperCase() + name.slice(1).replace('sql', ' SQL ')}
                </span>
            </i>
        </Col>
    )
}

export default LanguageGrid