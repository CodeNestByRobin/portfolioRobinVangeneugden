import {Database} from "../supabase.ts";

export interface ILanguage {
    id: number
    name: string
    stack: Database["public"]["Enums"]["stack"]
}