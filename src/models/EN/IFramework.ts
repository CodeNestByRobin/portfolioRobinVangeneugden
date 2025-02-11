import {Database} from "../supabase.ts";

export interface IFramework {
    id: number
    name: string
    stack: Database["public"]["Enums"]["stack"]
}