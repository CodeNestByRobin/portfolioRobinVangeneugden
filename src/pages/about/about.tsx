import {FunctionComponent} from 'react'
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Col, Row} from 'react-bootstrap';
import {useGetFrameworks} from "../../api/EN/frameworkAPI.ts";
import FrameworkGrid from "../../components/frameworkGrid.tsx";
import {useGetLanguages} from "../../api/EN/languageAPI.ts";
import LanguageGrid from "../../components/languageGrid.tsx";
import Profile from "../../components/EN/profile.tsx";
import {useGetPersonById} from "../../api/EN/profileAPI.ts";
import {useGetPersoonById} from "../../api/NL/profielAPI.ts";
import {useLanguage} from "../../hooks/useLanguage.ts";
import Profiel from "../../components/NL/profiel.tsx";


interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    const {primaryLanguage} = useLanguage()
    const {data: languages} = useGetLanguages()
    const {data: frameworks} = useGetFrameworks()
    const {data: person } = useGetPersonById(2);
    const {data: persoon} = useGetPersoonById(2);

    return (
        <Container>
        {primaryLanguage === 'EN' ? (

                <Row>
                    <Col align={'center'} sm={3} md={3} xl={3} className={"m-5"}>
                        <img className={"image"} src="/src/utils/img/profielfoto.png"/>
                        {person && <Profile {...person}/> }
                        <Row className={"mt-2"}>
                            <h5 className={"text-start fw-bold ms-3 mt-5 mb-3 p-2 cardtitle"}>Programming Languages</h5>
                            <hr/>
                            {languages?.map(l => <LanguageGrid {...l} key={l.name} />)}
                        </Row>
                        <Row className={"mt-2"}>
                            <h5 className={"text-start fw-bold ms-3 mt-5 mb-3 p-2 cardtitle"}>Frameworks</h5>
                            <hr/>
                            {frameworks?.map(f => <FrameworkGrid {...f} key={f.name} />)}
                        </Row>


                    </Col>
                    <Col sm={7} md={8} xl={8} className={"mt-5 mb-5 pt-2 opacity"}>
                        <h1 className={"cardtitle text-center mt-4"}>About Me</h1>
                        <Row className={'m-3'}>
                            <Col className={'align-content-center'}>
                                <h3 className={"mt-2 opacity-100"}>Hi, I'm Robin Vangeneugden</h3>
                                <br/>
                                <p>I'm a passionate Software Developer with a proven track record of creating efficient and user-friendly solutions. My foundation in programming was solidified at Thomas More University of Applied Sciences, where I earned my Associate Degree in Software Development.</p>

                            </Col>
                            <Col className={'ps-5'} align='center' md={6} xl={6}>
                                <img className={'custom-image'} src={'/src/utils/img/afgestudeerd.png'}/>
                            </Col>
                        </Row>
                        <Row className={'m-3'}>
                            <Col className={'align-content-center'}>
                                <img className={'custom-image'} src={'/src/utils/img/stageSenT.jpeg'}/>
                            </Col>
                            <Col>
                                <p>My professional experience includes an enriching internship at <Link className={"fw-bold fs-5 custom-link"} to={"https://www.stcorp.nl/ " } target="_blank">S<span className={"brackets"}>[</span>&<span className={"brackets"}>]</span>T</Link> in Delft, The Netherlands, where I contributed to the Disturb project.  This role honed my skills in Python, Django, NumPy, Pandas, and Matplotlib, while also providing valuable scientific insights into solar activity and its impact.</p>
                                <p>Over the past {currentYear - 2021} years, I've broadened my expertise across a range of technologies, including C#, JavaScript, TypeScript, HTML, CSS, and Python. I'm proficient in frameworks like React, Angular (using Ionic), .NET, ASP.NET Core, Entity Framework, and Django, and I possess strong skills in MS SQL Server database development and query writing.</p>
                                <p>I thrive on learning new technologies, tackling complex challenges, and collaborating on impactful projects.  My experience in agile development environments ensures seamless teamwork, adaptability, and iterative progress.</p>
                            </Col>
                        </Row>
                        <Row className={'m-3'}>
                            <Col>
                                <p>Outside of coding, I'm a devoted parent to three wonderful children – two daughters and a son.  Music and fitness are also important parts of my life, providing balance and inspiration.  My lifelong passion for music began with the drums, their power and expressiveness captivating me from a young age. That early fascination with rhythm continues to shape my musical appreciation.</p>
                            </Col>
                        </Row>
                        <Row className={'m-3'}>
                            <Col>
                                <p>I'm always open to connecting and discussing new opportunities.  Please feel free to reach out – I'd love to exchange ideas and explore potential collaborations.</p>
                                <Button className={"custom-button content-center mt-5"} variant={"outline-primary"}><Link className={"custom-link"} to={"/contact"}>Contact Me</Link></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>


        ) : (
                <Row>
                    <Col align={'center'} sm={3} md={3} xl={3} className={"m-5"}>
                        <img className={"image"} src="/src/utils/img/profielfoto.png"/>
                        {persoon && <Profiel {...persoon}/> }
                        <Row className={"mt-2"}>
                            <h5 className={"text-start fw-bold ms-3 mt-5 mb-3 p-2 cardtitle"}>Programmeer Talen</h5>
                            <hr/>
                            {languages?.map(l => <LanguageGrid {...l} key={l.name} />)}
                        </Row>
                        <Row className={"mt-2"}>
                            <h5 className={"text-start fw-bold ms-3 mt-5 mb-3 p-2 cardtitle"}>Programmeer Frameworks</h5>
                            <hr/>
                            {frameworks?.map(f => <FrameworkGrid {...f} key={f.name} />)}
                        </Row>


                    </Col>
                    <Col sm={7} md={8} xl={8} className={"mt-5 mb-5 pt-2 opacity"}>
                        <h1 className={"cardtitle text-center mt-4"}>Over Mij</h1>
                        <Row className={'m-3'}>
                            <Col className={'align-content-center'}>
                                <h3 className={"mt-2 opacity-100"}>Hallo, Ik ben Robin Vangeneugden</h3>
                                <br/>
                                <p>Ik ben een gepassioneerd softwareontwikkelaar met ervaring in het creëren van efficiënte en gebruiksvriendelijke oplossingen. Mijn basis in programmeren werd versterkt aan Thomas More Hogeschool, waar ik mijn Associate Degree in Software Development behaalde.</p>

                            </Col>
                            <Col className={'ps-5'} align='center' md={6} xl={6}>
                                <img className={'custom-image'} src={'/src/utils/img/afgestudeerd.png'}/>
                            </Col>
                        </Row>
                        <Row className={'m-3'}>
                            <Col className={'align-content-center'}>
                                <img className={'custom-image'} src={'/src/utils/img/stageSenT.jpeg'}/>
                            </Col>
                            <Col>
                                <p>Mijn professionele ervaring omvat een verrijkende stage bij <Link className={"fw-bold fs-5 custom-link"} to={"https://www.stcorp.nl/ " } target="_blank">S<span className={"brackets"}>[</span>&<span className={"brackets"}>]</span>T</Link> in Delft, Nederland, waar ik heb bijgedragen aan het Disturb-project. Deze rol heeft mijn vaardigheden in Python, Django, NumPy, Pandas en Matplotlib aangescherpt en tevens waardevolle wetenschappelijke inzichten verschaft in zonneactiviteit en de impact ervan.</p>
                                <p>De afgelopen {currentYear - 2021} jaar heb ik mijn expertise verbreed over een scala aan technologieën, waaronder C#, JavaScript, TypeScript, HTML, CSS en Python. Ik ben bedreven in frameworks zoals React, Angular (met Ionic), .NET, ASP.NET Core, Entity Framework en Django, en ik beschik over sterke vaardigheden in MS SQL Server database ontwikkeling en het schrijven van queries.</p>
                                <p>Ik ben graag op de hoogte van nieuwe technologieën, ik ga graag nieuwe uitdagingen aan en ik werk het liefst samen aan impactvolle projecten. Mijn ervaring in agile ontwikkelomgevingen zorgt voor goed teamwork, aanpassingsvermogen en een vlotte vooruitgang.</p>
                            </Col>
                        </Row>
                        <Row className={'m-3'}>
                            <Col>
                                <p>Buiten het coderen ben ik een toegewijde ouder van drie prachtige kinderen – twee dochters en een zoon. Muziek en fitness zijn ook belangrijke onderdelen van mijn leven, die voor balans en inspiratie zorgen. Mijn levenslange passie voor muziek begon met de drums; hun kracht en expressiviteit boeiden me al op jonge leeftijd. Die vroege fascinatie voor ritme blijft mijn muzikale waardering bepalen.</p>
                            </Col>
                        </Row>
                        <Row className={'m-3'}>
                            <Col>
                                <p>Ik sta altijd open voor te connecteren en het bespreken van nieuwe mogelijkheden. Neem gerust contact op – ik zou het leuk vinden om ideeën uit te wisselen en potentiële samenwerkingen te verkennen.</p>
                                <Button className={"custom-button content-center mt-5"} variant={"outline-primary"}><Link className={"custom-link"} to={"/contact"}>Contacteer Mij</Link></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        )}

        </Container>


    )
}

export default About