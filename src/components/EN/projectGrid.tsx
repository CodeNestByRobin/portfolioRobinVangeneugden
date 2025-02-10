import {FunctionComponent} from 'react'
import {IProject} from "../../models/EN/IProject.ts";
import {Card, CardFooter, Col} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const ProjectGrid: FunctionComponent<IProject> = ({image,title, id}) => {

    return (

        <Col className={'content-center'}>
            <Nav.Link href={`/project/${id}`}>
            <Card className={'custom-card'} >
                <Card.Img style={{ height: '9rem' }} className={'mt-3 mb-3'}  variant="top" src={image?.[0]} />
                <Card.Body className={'mt-auto'}>
                    <Card.Title className={'fw-bold cardtitle'}>{title}</Card.Title>

                </Card.Body>
                <CardFooter className={'hide'}>
                    <h5 className={'fw-bold'}>Show Details</h5>
                </CardFooter>

            </Card>
            </Nav.Link>
        </Col>

    )
}

export default ProjectGrid