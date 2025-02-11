import supabase from '../utils/supabaseClient.ts'
import {UseQueryResult, useSuspenseQuery} from '@tanstack/react-query'
import {IFramework} from "../../models/EN/IFramework.ts";

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetFrameworks = (): UseQueryResult<IFramework[], Error> => {
    return useSuspenseQuery({
        queryKey: ['frameworks'],
        queryFn: () => getFrameworks(),
    })
}



//endregion

//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */



export async function getFrameworks(): Promise<IFramework[]> {

    const { data: frameworks, error: frameworksError} = await supabase
        .from('frameworks')
        .select('*')

    if (frameworksError) throw frameworksError;
    if (!frameworks) return [];

    return frameworks as IFramework[]
}

//endregion