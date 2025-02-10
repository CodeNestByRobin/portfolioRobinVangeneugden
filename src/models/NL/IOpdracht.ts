import {Database} from "../supabase.ts";

export interface IOpdracht {
    id: number
    titel: string
    omschrijving: string
    afbeelding: string[] | null
    status: Database["public"]["Enums"]["status"][]
}