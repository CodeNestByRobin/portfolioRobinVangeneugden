import {FunctionComponent} from 'react'
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Carousel, Col, Row} from "react-bootstrap";
import {ILanguage} from "../models/EN/ILanguage.ts";
import {IFramework} from "../models/EN/IFramework.ts";
import FrameworkGrid from "./frameworkGrid.tsx";
import LanguageGrid from "./languageGrid.tsx";
import {useLanguage} from "../hooks/useLanguage.ts";
interface DetailLayoutProps {
    image: string[] | null;
    title: string;
    description: string;
    state: string;
    languages: ILanguage[]; // Array of languages, each of type ILanguage
    frameworks: IFramework[];
}

const DetailLayout: FunctionComponent<DetailLayoutProps> = ({image, title, description, state, languages, frameworks}) => {
    const navigate = useNavigate()
    const {primaryLanguage} = useLanguage()

    return (
        <Container className={'mt-4'}>

            {primaryLanguage === 'EN' ? (
                <>
                    <Row>
                        <Col md={7} className={'mt-3'}>
                            <Carousel interval={3000} data-bs-theme="dark">
                                {image?.map((i) =>
                                    <Carousel.Item key={i.valueOf()}>
                                        <img className={'detail-img'} src={i} />
                                    </Carousel.Item>)}
                            </Carousel>
                        </Col>
                        <Col md={5}>
                            <h1 className={'cardtitle mb-3'}>{title}</h1>
                            <p>{description}</p>
                            <p>State: <strong>{state}</strong></p>
                            <br />
                            <Container fluid className={'mt-3 mb-3'}>
                                {languages.length > 0 && (
                                    <Row>
                                        <h5 className={'fw-bold mb-3 cardtitle'}>Programming Languages</h5>
                                        <hr/>
                                        {languages.map(l => (
                                            <LanguageGrid key={l.id} id={l.id} name={l.name}/>

                                        ))}
                                    </Row>
                                )}
                            </Container>
                            <Container fluid className={'mt-3 mb-3'}>
                                {frameworks.length > 0 && (
                                    <Row>
                                        <h5 className={'fw-bold mb-3 cardtitle'}>Programming frameworks</h5>
                                        <hr/>
                                        {frameworks.map(f => (
                                            <FrameworkGrid key={f.id}  id={f.id} name={f.name}/>

                                        ))}
                                    </Row>
                                )}
                            </Container>
                        </Col>
                    </Row>
                    <Button className={'custom-button content-center mt-3 mb-5'} onClick={() => navigate(-1)}>Go back</Button>
                </>

            ) : (
                <>
                <Row>
                <Col md={7} className={'mt-3'}>
            <Carousel interval={3000} data-bs-theme="dark">
                {image?.map((i) =>
                    <Carousel.Item key={i.valueOf()}>
                        <img className={'detail-img'} src={i} />
                    </Carousel.Item>)}
            </Carousel>
        </Col>
    <Col md={5}>
        <h1 className={'cardtitle mb-3'}>{title}</h1>
        <p>{description}</p>
        <p>Status: <strong>{state}</strong></p>
        <br />
        <Container fluid className={'mt-3 mb-3'}>
            {languages.length > 0 && (
                <Row>
                    <h5 className={'fw-bold mb-3 cardtitle'}>Programmeer Talen</h5>
                    <hr/>
                    {languages.map(l => (
                        <LanguageGrid key={l.id} id={l.id} name={l.name}/>

                    ))}
                </Row>
            )}
        </Container>
        <Container fluid className={'mt-3 mb-3'}>
            {frameworks.length > 0 && (
                <Row>
                    <h5 className={'fw-bold mb-3 cardtitle'}>Programmeer Frameworks</h5>
                    <hr/>
                    {frameworks.map(f => (
                        <FrameworkGrid key={f.id}  id={f.id} name={f.name}/>

                    ))}
                </Row>
            )}
        </Container>
    </Col>
</Row>
    <Button className={'custom-button content-center mt-3 mb-5'} onClick={() => navigate(-1)}>Ga Terug</Button>
</>
                )}

        </Container>
    )
}

export default DetailLayout