import {FunctionComponent} from 'react'
import {useGetProjects} from "../../api/EN/projectAPI.ts";
import ProjectGrid from "../../components/EN/projectGrid.tsx";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import {useLanguage} from "../../hooks/useLanguage.ts";
import {useGetOpdrachten} from "../../api/NL/opdrachtAPI.ts";
import OpdrachtGrid from "../../components/NL/opdrachtGrid.tsx";

interface ProjectProps {

}

const Project: FunctionComponent<ProjectProps> = () => {
    const {data: projects} = useGetProjects()
    const {data: opdrachten} = useGetOpdrachten()
    const {primaryLanguage} = useLanguage()
    return (
        <>
            <Container className={'content-center'}>
                {primaryLanguage === 'EN' ? (
                    <>
                        <Row>
                            {projects?.map(p => <ProjectGrid {...p} key={p.id} />)}
                        </Row>
                    </>
                ) : (
                    <>
                        <Row>
                            {opdrachten?.map(o => <OpdrachtGrid {...o} key={o.id} />)}
                        </Row>
                    </>
                )}

            </Container>

        </>
    )
}

export default Project