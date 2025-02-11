import {FunctionComponent, useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import emailjs from "@emailjs/browser"
import {useLanguage} from "../../hooks/useLanguage.ts";
import Icon from "../../components/icon.tsx";

interface ContactProps {
}

const Contact: FunctionComponent<ContactProps> = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const {primaryLanguage} = useLanguage()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
        const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;

        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('email sent succesfully!', response);
                alert('Your email is sent succesfully, have a nice day!')
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }) .catch((error) => {
                console.log('Can\'t send email!', error)
        })
    }

    return (
        <Container>
            {primaryLanguage === 'EN' ? (
                <>
                <Row className={'m-4'}>
                    <Col>
                        <h1 className={"text-center m-3 p-4"}>Send Me A Message</h1>
                        <form className={"custom-form"} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={name} type="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={email} type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control value={subject} type="subject" placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control value={message} as="textarea" rows={3} type="message" placeholder="Leave your message here" onChange={(e) => setMessage(e.target.value)}/>
                            </Form.Group>
                            <Button className={"custom-button"} variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Col>
                    <Col className={'content-center'}>
                        <h1 className={" mt-3 p-4"}>Contact Me</h1>
                        <div className={"m-3 p-3"}>
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
                            <iframe className={"p-3"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.8808584403905!2d5.141443376101042!3d51.09220624095027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1373981f31429%3A0x7f6bc0e249e90b42!2sSchipperstraat%208%2C%203945%20Ham!5e0!3m2!1snl!2sbe!4v1737926492562!5m2!1snl!2sbe" width="auto" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                </Row>
                </>
            ) : (
                <>
                <Row className={"m-4"}>
                    <Col>
                        <h1 className={"text-center m-3 p-4"}>Zend Mij Een Bericht</h1>
                        <form className={"custom-form"} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Naam</Form.Label>
                                <Form.Control value={name} type="name" placeholder="Voer je naam in" onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={email} type="email" placeholder="Voer uw e-mailadres in" onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label>Onderwerp</Form.Label>
                                <Form.Control value={subject} type="subject" placeholder="Voer uw onderwerp in" onChange={(e) => setSubject(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Bericht</Form.Label>
                                <Form.Control value={message} as="textarea" rows={3} type="message" placeholder="Schrijf hier je bericht" onChange={(e) => setMessage(e.target.value)}/>
                            </Form.Group>
                            <Button className={"custom-button"} variant="primary" type="submit">
                                Dien In
                            </Button>
                        </form>
                    </Col>
                    <Col className={'content-center'}>
                        <h1 className={" mt-3 p-4"}>Contacteer Mij</h1>
                        <div className={"m-3 p-3"}>
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
                            <iframe className={"p-3"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.8808584403905!2d5.141443376101042!3d51.09220624095027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1373981f31429%3A0x7f6bc0e249e90b42!2sSchipperstraat%208%2C%203945%20Ham!5e0!3m2!1snl!2sbe!4v1737926492562!5m2!1snl!2sbe" width="auto" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                </Row>
                </>
                )}


        </Container>

    )
}

export default Contact