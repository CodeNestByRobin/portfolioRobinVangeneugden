import supabase from '../utils/supabaseClient.ts'
import {UseQueryResult, useSuspenseQuery} from '@tanstack/react-query'
//import {ILanguage} from "../../models/EN/ILanguage.ts";
//import {getLanguages} from "../EN/languageAPI.ts";
//import {IFramework} from "../../models/EN/IFramework.ts";
//import {getFrameworks} from "../EN/frameworkAPI.ts";
import {IOpdracht} from "../../models/NL/IOpdracht.ts";
//import {IOpdrachtTaal} from "../../models/NL/IOpdrachtTaal.ts";
//import {IOpdrachtFramework} from "../../models/NL/IOpdrachtFramework.ts";

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetOpdrachten = (): UseQueryResult<IOpdracht[], Error> => {
    return useSuspenseQuery({
        queryKey: ['opdrachten'],
        queryFn: () => getOpdrachten(),
    })
}

/*export const useGetOpdrachtById = (id: number): UseQueryResult<IOpdracht[], Error> => {
    return useSuspenseQuery({
        queryKey: ['opdrachten', id],
        queryFn: () => getOpdrachtById(id),
    })
}*/

/*export const useGetTalenEnFrameworksByOpdrachtId = (opdracht_id: number): UseQueryResult<{ opdracht: IOpdracht | null; languages: ILanguage[]; frameworks: IFramework[]; }, Error> => {
    return useSuspenseQuery({
        queryKey: ['opdrachtTalen', opdracht_id],
        queryFn: async () => {
            const opdracht = await getOpdrachtById(opdracht_id);
            if (!opdracht) {
                return { opdracht: null, languages: [], frameworks: [] };
            }

            const languages = await getTalenByOpdrachtId(opdracht_id);
            const frameworks = await getFrameworksByOpdrachtId(opdracht_id);
            return { opdracht, languages, frameworks };


        },
        enabled: !!opdracht_id, // Voorkom query als opdracht_id undefined of null is
        staleTime: Infinity // Optioneel: Markeer data als nooit verouderd (indien van toepassing)
    })
}*/

/*export const useGetFrameworksByOpdrachtId = (opdracht_id: number): UseQueryResult<{ opdracht: IOpdracht | null; frameworks: IFramework[] }, Error> => {
    return useSuspenseQuery({
        queryKey: ['opdrachtFrameworks', opdracht_id],
        queryFn: async () => {
            const opdracht = await getOpdrachtById(opdracht_id);
            if (!opdracht) {
                return { opdracht: null, frameworks: [] };
            }

            const frameworks = await getFrameworksByOpdrachtId(opdracht_id);
            return { opdracht, frameworks };


        },
        enabled: !!opdracht_id, // Voorkom query als projectId undefined of null is
        staleTime: Infinity // Optioneel: Markeer data als nooit verouderd (indien van toepassing)
    })
}*/


//endregion

//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */



export async function getOpdrachten(): Promise<IOpdracht[]> {

    const { data: opdrachten, error: opdrachtenError} = await supabase
        .from('opdrachten')
        .select('*')

    if (opdrachtenError) throw opdrachtenError;
    if (!opdrachten) return [];

    return opdrachten as IOpdracht[]
}

export async function getOpdrachtById(id: number): Promise<IOpdracht | undefined> {
    const opdrachten = await getOpdrachten()
    return opdrachten.find(opdracht => opdracht.id === id)
}

/*export async function getOpdrachtTalen(): Promise<IOpdrachtTaal[]> {

    const { data: opdrachtTalen, error: opdrachtTalenError} = await supabase
        .from('opdrachtTalen')
        .select('*')

    if (opdrachtTalenError) throw opdrachtTalenError;
    if (!opdrachtTalen) return [];

    return opdrachtTalen as IOpdrachtTaal[]
}

export async function getOpdrachtFrameworks(): Promise<IOpdrachtFramework[]> {

    const { data: opdrachtFrameworks, error: opdrachtFrameworksError} = await supabase
        .from('opdrachtFrameworks')
        .select('*')

    if (opdrachtFrameworksError) throw opdrachtFrameworksError;
    if (!opdrachtFrameworks) return [];

    return opdrachtFrameworks as IOpdrachtFramework[]
}

export async function getTalenByOpdrachtId(opdracht_id: number): Promise<ILanguage[]> {

    const opdracht = await getOpdrachtById(opdracht_id);



    if (!opdracht) {
        return []; // Lege array retourneren als project niet gevonden is
    }

    const opdrachtTalen = await getOpdrachtTalen();

    const taalIds = opdrachtTalen
        .filter(ot => ot.opdracht_id === opdracht.id )
        .map(ot => ot.taal_id);

    const languages = await getLanguages();

    return languages.filter(l => taalIds.includes(l.id));
}

export async function getFrameworksByOpdrachtId(opdracht_id: number): Promise<IFramework[]> {

    const opdracht = await getOpdrachtById(opdracht_id);



    if (!opdracht) {
        return [];
    }

    const opdrachtFrameworks = await getOpdrachtFrameworks();

    const frameworkIds = opdrachtFrameworks
        .filter(of => of.opdracht_id === opdracht.id )
        .map(of => of.framework_id);

    const frameworks = await getFrameworks();

    return frameworks.filter(f => frameworkIds.includes(f.id));
}*/


//endregion