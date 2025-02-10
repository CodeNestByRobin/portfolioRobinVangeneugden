import supabase from '../utils/supabaseClient.ts'
import {IProject} from '../../models/EN/IProject.ts'
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {IProjectLanguage} from "../../models/EN/IProjectLanguage.ts";
import {ILanguage} from "../../models/EN/ILanguage.ts";
import {getLanguages} from "./languageAPI.ts";
import {IFramework} from "../../models/EN/IFramework.ts";
import {IProjectFramework} from "../../models/EN/IProjectFramework.ts";
import {getFrameworks} from "./frameworkAPI.ts";
import {getOpdrachtById} from "../NL/opdrachtAPI.ts";
import {IOpdracht} from "../../models/NL/IOpdracht.ts";

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetProjects = (): UseQueryResult<IProject[], Error> => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects(),
    })
}

export const useGetProjectById = (id: number): UseQueryResult<IProject[], Error> => {
    return useQuery({
        queryKey: ['projects', id],
        queryFn: () => getProjectById(id),
    })
}

export const useGetLanguagesAndFrameworksByProjectId = (projectId: number): UseQueryResult<{ project: IProject | null; opdracht: IOpdracht | null; languages: ILanguage[]; frameworks: IFramework[]; }, Error> => {
    return useQuery({
        queryKey: ['projectLanguages', projectId],
        queryFn: async () => {
            const project = await getProjectById(projectId);
            const opdracht = await getOpdrachtById(projectId);
            if (!project || !opdracht) {
                return { project: null, opdracht: null, languages: [], frameworks: [] };
            }

            const languages = await getLanguagesByProjectId(projectId);
            const frameworks = await getFrameworksByProjectId(projectId);
            return { project, opdracht, languages, frameworks };


        },
        enabled: !!projectId, // Voorkom query als projectId undefined of null is
        staleTime: Infinity // Optioneel: Markeer data als nooit verouderd (indien van toepassing)
    })
}

export const useGetFrameworksByProjectId = (projectId: number): UseQueryResult<{ project: IProject | null; frameworks: IFramework[] }, Error> => {
    return useQuery({
        queryKey: ['projectFrameworks', projectId],
        queryFn: async () => {
            const project = await getProjectById(projectId);
            if (!project) {
                return { project: null, frameworks: [] };
            }

            const frameworks = await getFrameworksByProjectId(projectId);
            return { project, frameworks };


        },
        enabled: !!projectId, // Voorkom query als projectId undefined of null is
        staleTime: Infinity // Optioneel: Markeer data als nooit verouderd (indien van toepassing)
    })
}


//endregion

//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */



export async function getProjects(): Promise<IProject[]> {

    const { data: projects, error: projectsError} = await supabase
        .from('projects')
        .select('*')

    if (projectsError) throw projectsError;
    if (!projects) return [];

    return projects as IProject[]
}

export async function getProjectById(id: number): Promise<IProject | undefined> {
    const projects = await getProjects()
    return projects.find(project => project.id === id)
}

export async function getProjectLanguages(): Promise<IProjectLanguage[]> {

    const { data: projectLanguages, error: projectLanguagesError} = await supabase
        .from('projectLanguages')
        .select('*')

    if (projectLanguagesError) throw projectLanguagesError;
    if (!projectLanguages) return [];

    return projectLanguages as IProjectLanguage[]
}

export async function getProjectFrameworks(): Promise<IProjectFramework[]> {

    const { data: projectFrameworks, error: projectFrameworksError} = await supabase
        .from('projectFrameworks')
        .select('*')

    if (projectFrameworksError) throw projectFrameworksError;
    if (!projectFrameworks) return [];

    return projectFrameworks as IProjectFramework[]
}

export async function getLanguagesByProjectId(projectId: number): Promise<ILanguage[]> {

    const project = await getProjectById(projectId);



    if (!project) {
        return []; // Lege array retourneren als project niet gevonden is
    }

    const projectLanguages = await getProjectLanguages();

    const languageIds = projectLanguages
        .filter(pl => pl.projectId === project.id )
        .map(pl => pl.languageId);

    const languages = await getLanguages();

    return languages.filter(l => languageIds.includes(l.id));
}

export async function getFrameworksByProjectId(projectId: number): Promise<IFramework[]> {

    const project = await getProjectById(projectId);



    if (!project) {
        return []; // Lege array retourneren als project niet gevonden is
    }

    const projectFrameworks = await getProjectFrameworks();

    const frameworkIds = projectFrameworks
        .filter(pf => pf.projectId === project.id )
        .map(pf => pf.frameworkId);

    const frameworks = await getFrameworks();

    return frameworks.filter(f => frameworkIds.includes(f.id));
}


//endregion