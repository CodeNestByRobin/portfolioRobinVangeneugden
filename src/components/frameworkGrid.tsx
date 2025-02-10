import {FunctionComponent} from 'react'
import {IFramework} from "../models/EN/IFramework.ts";
import {Col} from "react-bootstrap";

const FrameworkGrid: FunctionComponent<IFramework> = ({name}) => {
    return (
        <Col align='left' xs={2} className={"m-3"}>
            <i className={`devicon-resize devicon-${name}-plain-wordmark devicon-${name}-plain devicon-${name}-original`}>
                <span className="sr-only">
                    {name.charAt(0).toUpperCase() + name.slice(1).replace('-', '').replace('core', ' Core')}
                </span>
            </i>
        </Col>
    )
}

export default FrameworkGrid