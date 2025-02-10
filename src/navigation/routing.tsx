import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import ProjectDetail from "../pages/project/detail/projectDetail.tsx";
import Home from "../pages/home/home.tsx";
import About from "../pages/about/about.tsx";
import Project from "../pages/project/project.tsx";
import Contact from "../pages/contact/contact.tsx";

interface RoutingProps {

}

const Routing: FunctionComponent<RoutingProps> = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/project'} element={<Project/>}/>
            <Route path={'/project/:id'} element={<ProjectDetail/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
        </Routes>
    )
}

export default Routing