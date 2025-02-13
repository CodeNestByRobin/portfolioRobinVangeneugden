import {FunctionComponent} from 'react'
import {Card, Col, Row} from "react-bootstrap";
import {useGetLanguages} from "../api/EN/languageAPI.ts";
import {useGetFrameworks} from "../api/EN/frameworkAPI.ts";
import Container from "react-bootstrap/Container";
import FrameworkGrid from "./frameworkGrid.tsx";
import LanguageGrid from "./languageGrid.tsx";
import {useLanguage} from "../hooks/useLanguage.ts";

interface StackCardProps {
    iconName: string,
    stack: string,
}

const StackCard: FunctionComponent<StackCardProps> = ({iconName, stack}) => {

    const {primaryLanguage} = useLanguage()
    const {data: languages} = useGetLanguages()
    const {data: frameworks} = useGetFrameworks()

    return (
        <>
            <Col className={"content-center mb-5"}>
                <Card style={{ width: '18rem' }} className={"custom-home-card"}>
                    <Card.Header className={"text-center pt-4 pb-3"}>
                        <span className={`bi bi-${iconName} text-white custom-cardIcon`}></span>
                        {primaryLanguage === 'EN' ? (
                            <Card.Title><h4 className={"cardtitle text-center pt-3"}>{stack.charAt(0).toUpperCase() + stack.slice(1)} Development</h4></Card.Title>
                        ) : (
                            <Card.Title><h4 className={"cardtitle text-center pt-3"}>{stack.charAt(0).toUpperCase() + stack.slice(1)} Ontwikkeling</h4></Card.Title>
                        )}

                    </Card.Header>
                    <Card.Body>

                        <Container>
                            <Row className={"mt-2"}>
                                {languages?.filter(l => l.stack === stack).map(l => <LanguageGrid {...l} key={l.name} />)}
                            </Row>
                            <Row className={"mt-2"}>
                                {frameworks?.filter(f => f.stack === stack).map(f => <FrameworkGrid {...f} key={f.name} />)}
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </>


    )
}

export default StackCard