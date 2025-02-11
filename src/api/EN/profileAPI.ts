import {IPerson} from "../../models/EN/IPerson.ts";
import supabase from "../utils/supabaseClient.ts";
import {useSuspenseQuery, UseSuspenseQueryResult} from "@tanstack/react-query";

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetPersonById = (id: number): UseSuspenseQueryResult<IPerson, Error> => {
    return useSuspenseQuery({
        queryKey: ['persons', id],
        queryFn: () => getPersonById(id),
    })
}



//endregion

//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */



export async function getPersons(): Promise<IPerson[]> {

    const { data: persons, error: personsError} = await supabase
        .from('persons')
        .select('*')

    if (personsError) throw personsError;
    if (!persons) return [];

    return persons as IPerson[]
}

export async function getPersonById(id: number): Promise<IPerson | undefined> {
    const persons = await getPersons()
    return persons.find(person => person.id === id)
}

//endregion