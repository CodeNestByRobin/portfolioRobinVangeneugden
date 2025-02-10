import {Database} from "../supabase.ts";

export interface IProject {
    id: number
    title: string
    description: string
    image: string[] | null
    state: Database["public"]["Enums"]["state"][]
}