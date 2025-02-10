import supabase from '../utils/supabaseClient.ts'
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {ILanguage} from "../../models/EN/ILanguage.ts";

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetLanguages = (): UseQueryResult<ILanguage[], Error> => {
    return useQuery({
        queryKey: ['languages'],
        queryFn: () => getLanguages(),
    })
}



//endregion

//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */



export async function getLanguages(): Promise<ILanguage[]> {

    const { data: languages, error: languagesError} = await supabase
        .from('languages')
        .select('*')

    if (languagesError) throw languagesError;
    if (!languages) return [];

    return languages as ILanguage[]
}

//endregion