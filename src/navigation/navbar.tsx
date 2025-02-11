import {FunctionComponent} from 'react'
import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar'
import {Col, Dropdown, Row} from "react-bootstrap";
import ColorPicker from "../utils/colorPicker.tsx";
import {useLanguage} from "../hooks/useLanguage.ts";
import {useColor} from "../hooks/useColor.ts";
import ThemeToggle from "../utils/themeToggle.tsx";

const Navbar:FunctionComponent = () => {

    const { primaryColor, setPrimaryColor } = useColor();
    const {primaryLanguage, setPrimaryLanguage} = useLanguage();

    // Verander de kleur wanneer de gebruiker een nieuwe kleur kiest
    const handleColorChange = () => {
        setPrimaryColor('#46617E');
    };


    const handleLanguageChange = () => {
        const newLanguage = primaryLanguage === 'EN' ? 'NL' : 'EN';
        setPrimaryLanguage(newLanguage);
    };



    return(
        <NavBar expand="lg">
            <Container fluid>
                <NavBar.Brand className={'ms-2'} href={'/'}><img className={"logo"}  src="https://rkyhburynxpxdcrvbqgr.supabase.co/storage/v1/object/sign/projects/Website%20Folder/LogoCodeNestFull.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0cy9XZWJzaXRlIEZvbGRlci9Mb2dvQ29kZU5lc3RGdWxsLnN2ZyIsImlhdCI6MTczOTI5NTk4MiwiZXhwIjoyMDU0NjU1OTgyfQ.B9gZx-phuzKq9JAgY9eSgzZjDyuVrdwPj1N1od0nNOM" alt={'logo RoVaCoding'}/></NavBar.Brand>
                <NavBar.Toggle aria-controls="navbarScroll" />
                <NavBar.Collapse id="navbarScroll">
                    <Nav
                        className="me-5 my-2 my-lg-0 justify-content-center flex-grow-1 pe-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        {primaryLanguage === 'EN' ? (
                            <>
                                <Nav.Link className="custom-navlink me-5" href={'/'}>Home</Nav.Link>
                                <Nav.Link className="custom-navlink me-5" href={'/about'}>About</Nav.Link>
                                <Nav.Link className="custom-navlink" href={'/project'}>Projects</Nav.Link>
                            </>
                        ) : (
                            <>
                                {/*  Navigation links in another language (e.g., NL) */}
                                <Nav.Link className="custom-navlink me-5" href={'/'}>Home</Nav.Link>
                                <Nav.Link className="custom-navlink me-5" href={'/about'}>Over mij</Nav.Link>
                                <Nav.Link className="custom-navlink" href={'/project'}>Projecten</Nav.Link>
                            </>
                        )}

                    </Nav>
                    {primaryLanguage == 'EN' ? (
                        <Form className="d-flex">
                            <Dropdown>
                                <Dropdown.Toggle className={"dropdownToggle me-3"} variant={""} id="dropdown-basic">
                                    <i className="bi bi-grid"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={'bg-secondary-color'}>
                                    <Row>
                                        <Col className={"fw-bold m-2 text-white"}>
                                            <p>Change Color</p>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={"ms-2 mt-1"}>
                                            <ColorPicker/>
                                        </Col>
                                        <Col className={"me-2"}>
                                            <Button className={'btn btn-blue'} value={primaryColor} onClick={handleColorChange}>Reset</Button>
                                        </Col>
                                    </Row>
                                    <Row className={'mt-2'}>
                                        <Col className={" fw-bold m-2 text-white"}>
                                            <p>Change Language</p>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={"ms-2"}>
                                            <Button className={'btn btn-blue'} value={primaryLanguage} onClick={handleLanguageChange}>{primaryLanguage}</Button>
                                        </Col>
                                    </Row>
                                    <Row className={'mt-2'}>
                                        <Col className={" fw-bold m-2 text-white"}>
                                            <p>Change Theme</p>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={"ms-2"}>
                                            <ThemeToggle/>
                                        </Col>
                                    </Row>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button className={'custom-button'} variant="outline-primary"><Nav.Link href={'/contact'}>Contact Me</Nav.Link></Button>
                        </Form>
                    ) : (
                        <Form className="d-flex">
                            <Dropdown>
                                <Dropdown.Toggle className={"dropdownToggle me-3"} variant={""} id="dropdown-basic">
                                    <i className="bi bi-grid"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={'bg-secondary-color'}>
                                    <Row>
                                        <Col className={"fw-bold m-2 text-white"}>
                                            <p>Verander de kleur</p>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={"ms-2 mt-1"}>
                                            <ColorPicker/>
                                        </Col>
                                        <Col className={"me-2"}>
                                            <Button className={'btn btn-blue'} value={primaryColor} onClick={handleColorChange}>Reset</Button>
                                        </Col>
                                    </Row>
                                    <Row className={'mt-2'}>
                                        <Col className={" fw-bold m-2 text-white"}>
                                            <p>Verander de taal</p>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={"ms-2"}>
                                            <Button className={'btn btn-blue'} value={primaryLanguage} onClick={handleLanguageChange}>{primaryLanguage}</Button>
                                        </Col>
                                    </Row>
                                    <Row className={'mt-2'}>
                                        <Col className={" fw-bold m-2 text-white"}>
                                            <p>Verander Thema</p>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={"ms-2"}>
                                            <ThemeToggle/>
                                        </Col>
                                    </Row>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button className={'custom-button'} variant="outline-primary"><Nav.Link href={'/contact'}>Contacteer mij</Nav.Link></Button>
                        </Form>
                    )}

                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}

export default Navbar