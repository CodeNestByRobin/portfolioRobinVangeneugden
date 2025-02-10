import {FunctionComponent} from 'react'
import {Card, CardFooter, Col} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {IOpdracht} from "../../models/NL/IOpdracht.ts";

const OpdrachtGrid: FunctionComponent<IOpdracht> = ({afbeelding,titel, id}) => {

    return (

        <Col className={'content-center'}>
            <Nav.Link href={`/project/${id}`}>
                <Card className={'custom-card'} >
                    <Card.Img style={{ height: '9rem' }} className={'mt-3 mb-3'}  variant="top" src={afbeelding?.[0]} />
                    <Card.Body className={'mt-auto'}>
                        <Card.Title className={'fw-bold cardtitle'}>{titel}</Card.Title>

                    </Card.Body>
                    <CardFooter className={'hide'}>
                        <h5 className={'fw-bold'}>Toon Details</h5>
                    </CardFooter>

                </Card>
            </Nav.Link>
        </Col>

    )
}

export default OpdrachtGrid