import {IPersoon} from "../../models/NL/IPersoon.ts";
import supabase from "../utils/supabaseClient.ts";
import {useSuspenseQuery, UseSuspenseQueryResult} from "@tanstack/react-query";

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetPersoonById = (id: number): UseSuspenseQueryResult<IPersoon, Error> => {
    return useSuspenseQuery({
        queryKey: ['personen', id],
        queryFn: () => getPersoonById(id),
    })
}



//endregion

//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */



export async function getPersonen(): Promise<IPersoon[]> {

    const { data: personen, error: personenError} = await supabase
        .from('personen')
        .select('*')

    if (personenError) throw personenError;
    if (!personen) return [];

    return personen as IPersoon[]
}

export async function getPersoonById(id: number): Promise<IPersoon | undefined> {
    const personen = await getPersonen()
    return personen.find(persoon => persoon.id === id)
}

//endregion