import {FunctionComponent} from 'react'
import Container from "react-bootstrap/Container";
import {Col, Row, Stack, Image, NavLink} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Icon from "../components/icon.tsx";
import {Link} from "react-router-dom";
import {useLanguage} from "../hooks/useLanguage.ts";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {

    const {primaryLanguage} = useLanguage()
    return (

        <footer>
            {primaryLanguage === 'EN' ? (
                <Container className={"mt-5"}>
                    <Row>
                        <Col className={"mx-5"}>
                            <Stack>
                                <Image
                                    src={"/src/utils/img/codenest-transparant-logo.png"}
                                    alt={"Company logo"}
                                    rounded
                                    width={150}
                                    height={150}
                                />
                                <h5>&copy; CodeNest By Robin Vangeneugden</h5>
                                <p className={"fst-italic"}>"Innovative code, crafted with care"</p>
                            </Stack>
                        </Col>
                        <Col className={"mx-5"}>
                            <Nav className={"flex-column"}>
                                <p className={"fw-bold fs-5"}>Technologies</p>
                                <NavLink href={"https://react.dev/"} className={"custom-link"} target={"_blank"}>React</NavLink>
                                <NavLink href={"https://react-bootstrap.netlify.app/"} className={"custom-link"} target={"_blank"}>React Bootstrap</NavLink>
                                <NavLink href={"https://www.typescriptlang.org/"} className={"custom-link"} target={"_blank"}>Typescript</NavLink>
                                <NavLink href={"https://tanstack.com/"} className={"custom-link"} target={"_blank"}>Tanstack</NavLink>
                                <NavLink href={"https://supabase.com/"} className={"custom-link"} target={"_blank"}>Supabase</NavLink>
                                <NavLink href={"https://www.emailjs.com/"} className={"custom-link"} target={"_blank"}>EmailJS</NavLink>
                                <NavLink href={"https://pnpm.io/"} className={"custom-link"} target={"_blank"}>PNPM</NavLink>
                            </Nav>
                        </Col>
                        <Col className={"mx-5"}>
                            <Nav className={"flex-column"}>
                                <p className={"fw-bold fs-5"}>Companies</p>
                                <NavLink href={"https://www.stcorp.nl/"} className={"custom-link"} target={"_blank"}>S<span className={"brackets"}>[</span>&<span className={"brackets"}>]</span>T</NavLink>
                                <NavLink href={"https://thomasmore.be/"} className={"thomasMore"} target={"_blank"}>Thomas More</NavLink>
                            </Nav>
                        </Col>
                        <Col className={"mx-5"}>
                            <Nav className={"flex-column"}>
                                <p className={"fw-bold fs-5"}>Contact Me!</p>
                                <div className={"p-3 d-flex"}>
                                    <Icon link={"tel:+32497694994"} iconName={"telephone"}/>
                                    <div className={"ps-4 pt-2"}>
                                        <strong>Phone: </strong>
                                        <Link className={"custom-link"} to={"tel:+32497694994"} target="_blank">+32 497 69 49 94</Link>
                                    </div>
                                </div>
                                <div className={"p-3 d-flex"}>
                                    <Icon link={"mailto:robin.vangeneugden@outlook.com?subject=Hello Robin Vangeneugden"} iconName={"envelope-at-fill"}/>
                                    <div className={"ps-4 pt-2"}>
                                        <strong>Email: </strong>
                                        <Link className={"custom-link"} to={"mailto:rovacoding@outlook.com?subject=Hello Robin Vangeneugden"} target="_blank">rovacoding@outlook.com</Link>
                                    </div>
                                </div>
                                <div className={"p-3 d-flex"}>
                                    <Icon link={"https://www.linkedin.com/in/robin-vangeneugden-5089158b/"} iconName={"linkedin"}/>
                                    <div className={"ps-4 pt-2"}>
                                        <strong>LinkedIn: </strong>
                                        <Link className={"custom-link"} to={"https://www.linkedin.com/in/robin-vangeneugden-5089158b/"} target="_blank">linkedin.com/in/robin-vangeneugden-5089158b/</Link>
                                    </div>
                                </div>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Container className={"mt-5"}>
                    <Row>
                        <Col className={"mx-5"}>
                            <Stack>
                                <Image
                                    src={"/src/utils/img/codenest-transparant-logo.png"}
                                    alt={"Company logo"}
                                    rounded
                                    width={150}
                                    height={150}
                                />
                                <h5>&copy; CodeNest Door Robin Vangeneugden</h5>
                                <p className={"fst-italic"}>"Innovatieve code, met zorg vervaardigd"</p>
                            </Stack>
                        </Col>
                        <Col className={"mx-5"}>
                            <Nav className={"flex-column"}>
                                <p className={"fw-bold fs-5"}>Technologiën</p>
                                <NavLink href={"https://react.dev/"} className={"custom-link"} target={"_blank"}>React</NavLink>
                                <NavLink href={"https://react-bootstrap.netlify.app/"} className={"custom-link"} target={"_blank"}>React Bootstrap</NavLink>
                                <NavLink href={"https://www.typescriptlang.org/"} className={"custom-link"} target={"_blank"}>Typescript</NavLink>
                                <NavLink href={"https://tanstack.com/"} className={"custom-link"} target={"_blank"}>Tanstack</NavLink>
                                <NavLink href={"https://supabase.com/"} className={"custom-link"} target={"_blank"}>Supabase</NavLink>
                                <NavLink href={"https://www.emailjs.com/"} className={"custom-link"} target={"_blank"}>EmailJS</NavLink>
                                <NavLink href={"https://pnpm.io/"} className={"custom-link"} target={"_blank"}>PNPM</NavLink>
                            </Nav>
                        </Col>
                        <Col className={"mx-5"}>
                            <Nav className={"flex-column"}>
                                <p className={"fw-bold fs-5"}>Bedrijven</p>
                                <NavLink href={"https://www.stcorp.nl/"} className={"custom-link"} target={"_blank"}>S<span className={"brackets"}>[</span>&<span className={"brackets"}>]</span>T</NavLink>
                                <NavLink href={"https://thomasmore.be/"} className={"thomasMore"} target={"_blank"}>Thomas More</NavLink>
                            </Nav>
                        </Col>
                        <Col className={"mx-5"}>
                            <Nav className={"flex-column"}>
                                <p className={"fw-bold fs-5"}>Contacteer Mij!</p>
                                <div className={"p-3 d-flex"}>
                                    <Icon link={"tel:+32497694994"} iconName={"telephone"}/>
                                    <div className={"ps-4 pt-2"}>
                                        <strong>Telefoon: </strong>
                                        <Link className={"custom-link"} to={"tel:+32497694994"} target="_blank">+32 497 69 49 94</Link>
                                    </div>
                                </div>
                                <div className={"p-3 d-flex"}>
                                    <Icon link={"mailto:robin.vangeneugden@outlook.com?subject=Hello Robin Vangeneugden"} iconName={"envelope-at-fill"}/>
                                    <div className={"ps-4 pt-2"}>
                                        <strong>Emailadres: </strong>
                                        <Link className={"custom-link"} to={"mailto:robin.vangeneugden@outlook.com?subject=Hello Robin Vangeneugden"} target="_blank">robin.vangeneugden@outlook.com</Link>
                                    </div>
                                </div>
                                <div className={"p-3 d-flex"}>
                                    <Icon link={"https://www.linkedin.com/in/robin-vangeneugden-5089158b/"} iconName={"linkedin"}/>
                                    <div className={"ps-4 pt-2"}>
                                        <strong>LinkedIn: </strong>
                                        <Link className={"custom-link"} to={"https://www.linkedin.com/in/robin-vangeneugden-5089158b/"} target="_blank">linkedin.com/in/robin-vangeneugden-5089158b/</Link>
                                    </div>
                                </div>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            )}

        </footer>
    )
}

export default Footer