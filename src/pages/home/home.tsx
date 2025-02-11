import {FunctionComponent} from 'react'
import {Col, Row} from "react-bootstrap";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Icon from "../../components/icon.tsx";
import StackCard from "../../components/stackCard.tsx";
import {useLanguage} from "../../hooks/useLanguage.ts";
import Button from "react-bootstrap/Button";

const Image = styled.img`
  width: auto;
  height: 600px;
  
  @media only screen and (max-width: 990px){
    width: auto;
    height: 300px;
  }
`

const Content = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
  h1 {
    color: white;
    font-size: 2.2rem;
    animation: pulsate 1.5s infinite alternate;
    padding: 0.4em;
  }
  @keyframes pulsate {

    0%, 10%, 20%, 30%, 40%, 50%, 60% {

      text-shadow:
              0 0 4px var(--secondary-color),
              0 0 11px var(--secondary-color),
              0 0 19px var(--secondary-color);

    }

    20%, 24%, 55% {
      text-shadow: none;
    }
  }
  
  p {
    font-size: x-large;
    background: -webkit-linear-gradient(45deg, var(--secondary-color) 30%, rgba(255, 255, 255, 1) 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media only screen and (max-width: 990px){
    h1 {
      font-size: 20px;
    }
    p{
      font-size: 15px;
      
    }
  }
`

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {

    const {primaryLanguage} = useLanguage()

    return (
        <>
            {primaryLanguage === 'EN' ? (
                <>
                    <div className={'background-image'}>
                        <Row className={'mt-5 mb-5 '}>
                            <Col align={'center'} md={6} xl={6}>
                                <Image src="./src/utils/img/codenest-transparant-logo.png">
                                </Image>

                            </Col>
                            <Col align={'center'} md={6} xl={6}>
                                <Content>
                                    <h1 className={'m-2'}>Hi, I'm Robin Vangeneugden</h1>
                                    <br/>
                                    <p className={'mt-2 mb-2'}>Webdesigner and Software Developer</p>
                                    <div className="icons-container">
                                        <Icon link={"https://www.linkedin.com/in/robin-vangeneugden-5089158b/"} iconName={"linkedin"}/>
                                        <Icon link={"mailto:robin.vangeneugden@outlook.com?subject=Hello Robin Vangeneugden"} iconName={"envelope-at-fill"}/>
                                    </div>
                                    <Button className={'custom-button text-light m-4'}><Nav.Link className={'fw-bold'} href={'/contact'}>Contact Me</Nav.Link></Button>
                                </Content>

                            </Col>
                        </Row>
                    </div>
                    <div className={"content-center mb-5"}>
                        <Row>
                            <h1 className={"text-center fw-bold p-5"}>Programming Skills</h1>
                            <StackCard iconName={"code-slash"} stack={"frontend"}/>
                            <StackCard iconName={"hdd-rack"} stack={"backend"}/>
                            <StackCard iconName={"database-fill-gear"} stack={"database"}/>
                        </Row>
                    </div>
                </>


                    ) : (
                        <>
                            <div className={'background-image'}>
                                <Row className={'mt-5 mb-5 '}>
                                    <Col align={'center'} md={6} xl={6}>
                                        <Image src="./src/utils/img/codenest-transparant-logo.png">
                                        </Image>

                                    </Col>
                                    <Col align={'center'} md={6} xl={6}>
                                        <Content>
                                            <h1 className={'m-2'}>Hallo, Ik ben Robin Vangeneugden</h1>
                                            <br/>
                                            <p className={'mt-2 mb-2'}>Webdesigner en Software Ontwikkelaar</p>
                                            <div className="icons-container">
                                                <Icon link={"https://www.linkedin.com/in/robin-vangeneugden-5089158b/"} iconName={"linkedin"}/>
                                                <Icon link={"mailto:robin.vangeneugden@outlook.com?subject=Hello Robin Vangeneugden"} iconName={"envelope-at-fill"}/>
                                            </div>
                                            <Button className={'custom-button text-light m-4'}><Nav.Link className={'fw-bold'} href={'/contact'}>Contacteer Mij</Nav.Link></Button>
                                        </Content>

                                    </Col>
                                </Row>
                            </div>
                            <div className={"content-center mb-5"}>
                                <Row>
                                    <h1 className={"text-center fw-bold p-5"}>Programmeer Skills</h1>
                                    <StackCard iconName={"code-slash"} stack={"frontend"}/>
                                    <StackCard iconName={"hdd-rack"} stack={"backend"}/>
                                    <StackCard iconName={"database-fill-gear"} stack={"database"}/>
                                </Row>
                            </div>
                        </>
                    )}
        </>
    )
}

export default Home