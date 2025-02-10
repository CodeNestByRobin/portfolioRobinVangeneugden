import {FunctionComponent} from 'react'
import {useParams} from "react-router-dom";
import {useGetLanguagesAndFrameworksByProjectId} from "../../../api/EN/projectAPI.ts";
import DetailLayout from "../../../components/detailLayout.tsx";
import {useLanguage} from "../../../hooks/useLanguage.ts";

interface ProjectDetailProps {

}

const ProjectDetail: FunctionComponent<ProjectDetailProps> = () => {
    const params = useParams<{ id: string }>(); // Type params object
    const id = Number(params.id); // Veilig omzetten naar nummer, of null
    const { data, isLoading, error } = useGetLanguagesAndFrameworksByProjectId(id);
    const {primaryLanguage} = useLanguage()


    if (isLoading) {
        return <div>Loading...</div>; // Duidelijke loading state
    }

    if (error) {
        console.error("Error fetching project details:", error);
        return <div>Error: {error.message}</div>; // Duidelijke error state
    }

    if (!data || !data.project) { // Check of data en project beschikbaar zijn
        return <div>Project not found.</div>; // Specifieke melding voor niet gevonden project
    }

    if (!data || !data.opdracht) { // Check of data en project beschikbaar zijn
        return <div>Opdracht niet gevonden.</div>; // Specifieke melding voor niet gevonden project
    }

    const { project, opdracht, languages, frameworks } = data;

    return (
        <>
            {primaryLanguage === 'EN' ? (
                <DetailLayout
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    state={project.state.toString()}
                    languages={languages}
                    frameworks={frameworks}
                    key={project.id} // Key op de DetailLayout zetten
                />
            ) : (
                <DetailLayout
                    image={opdracht.afbeelding}
                    title={opdracht.titel}
                    description={opdracht.omschrijving}
                    state={opdracht.status.toString()}
                    languages={languages}
                    frameworks={frameworks}
                    key={opdracht.id} // Key op de DetailLayout zetten
                />
            )}
        </>


    );
}

export default ProjectDetail