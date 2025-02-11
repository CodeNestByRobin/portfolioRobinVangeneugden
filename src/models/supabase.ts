export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      frameworks: {
        Row: {
          id: number
          name: string | null
          stack: Database["public"]["Enums"]["stack"]
        }
        Insert: {
          id?: number
          name?: string | null
          stack?: Database["public"]["Enums"]["stack"]
        }
        Update: {
          id?: number
          name?: string | null
          stack?: Database["public"]["Enums"]["stack"]
        }
        Relationships: []
      }
      languages: {
        Row: {
          id: number
          name: string | null
          stack: Database["public"]["Enums"]["stack"]
        }
        Insert: {
          id?: number
          name?: string | null
          stack?: Database["public"]["Enums"]["stack"]
        }
        Update: {
          id?: number
          name?: string | null
          stack?: Database["public"]["Enums"]["stack"]
        }
        Relationships: []
      }
      opdrachten: {
        Row: {
          afbeelding: string[] | null
          id: number
          omschrijving: string
          status: Database["public"]["Enums"]["status"]
          titel: string
        }
        Insert: {
          afbeelding?: string[] | null
          id?: number
          omschrijving: string
          status: Database["public"]["Enums"]["status"]
          titel: string
        }
        Update: {
          afbeelding?: string[] | null
          id?: number
          omschrijving?: string
          status?: Database["public"]["Enums"]["status"]
          titel?: string
        }
        Relationships: []
      }
      opdrachtFrameworks: {
        Row: {
          framework_id: number
          id: number
          opdracht_id: number
        }
        Insert: {
          framework_id: number
          id?: number
          opdracht_id: number
        }
        Update: {
          framework_id?: number
          id?: number
          opdracht_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "opdrachtFrameworks_framework_id_fkey"
            columns: ["framework_id"]
            isOneToOne: false
            referencedRelation: "frameworks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opdrachtFrameworks_opdracht_id_fkey"
            columns: ["opdracht_id"]
            isOneToOne: false
            referencedRelation: "opdrachten"
            referencedColumns: ["id"]
          },
        ]
      }
      opdrachtTalen: {
        Row: {
          id: number
          opdracht_id: number
          taal_id: number
        }
        Insert: {
          id?: number
          opdracht_id: number
          taal_id: number
        }
        Update: {
          id?: number
          opdracht_id?: number
          taal_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "opdrachtTalen_opdracht_id_fkey"
            columns: ["opdracht_id"]
            isOneToOne: false
            referencedRelation: "opdrachten"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opdrachtTalen_taal_id_fkey"
            columns: ["taal_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
        ]
      }
      personen: {
        Row: {
          achternaam: string
          adres: string
          email: string
          geboortedatum: string
          id: number
          land: string
          linkedin_url: string
          opdracht_id: number
          plaats: string
          rijbewijs: boolean
          telefoon: string
          voornaam: string
        }
        Insert: {
          achternaam: string
          adres: string
          email: string
          geboortedatum: string
          id?: number
          land: string
          linkedin_url: string
          opdracht_id: number
          plaats: string
          rijbewijs: boolean
          telefoon: string
          voornaam: string
        }
        Update: {
          achternaam?: string
          adres?: string
          email?: string
          geboortedatum?: string
          id?: number
          land?: string
          linkedin_url?: string
          opdracht_id?: number
          plaats?: string
          rijbewijs?: boolean
          telefoon?: string
          voornaam?: string
        }
        Relationships: [
          {
            foreignKeyName: "personen_opdracht_id_fkey"
            columns: ["opdracht_id"]
            isOneToOne: false
            referencedRelation: "opdrachten"
            referencedColumns: ["id"]
          },
        ]
      }
      persons: {
        Row: {
          address: string
          birthdate: string
          country: string | null
          email: string
          first_name: string
          has_driver_license: boolean
          id: number
          last_name: string
          linkedin_url: string | null
          phone: string
          place: string | null
          project_id: number
        }
        Insert: {
          address: string
          birthdate: string
          country?: string | null
          email: string
          first_name: string
          has_driver_license: boolean
          id?: number
          last_name: string
          linkedin_url?: string | null
          phone: string
          place?: string | null
          project_id: number
        }
        Update: {
          address?: string
          birthdate?: string
          country?: string | null
          email?: string
          first_name?: string
          has_driver_license?: boolean
          id?: number
          last_name?: string
          linkedin_url?: string | null
          phone?: string
          place?: string | null
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "persons_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projectFrameworks: {
        Row: {
          frameworkId: number
          id: number
          projectId: number
        }
        Insert: {
          frameworkId: number
          id?: number
          projectId: number
        }
        Update: {
          frameworkId?: number
          id?: number
          projectId?: number
        }
        Relationships: [
          {
            foreignKeyName: "projectFrameworks_frameworkId_fkey"
            columns: ["frameworkId"]
            isOneToOne: false
            referencedRelation: "frameworks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projectFrameworks_projectId_fkey"
            columns: ["projectId"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projectLanguages: {
        Row: {
          id: number
          languageId: number
          projectId: number
        }
        Insert: {
          id?: number
          languageId: number
          projectId: number
        }
        Update: {
          id?: number
          languageId?: number
          projectId?: number
        }
        Relationships: [
          {
            foreignKeyName: "projectLanguages_languageId_fkey"
            columns: ["languageId"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projectLanguages_projectId_fkey"
            columns: ["projectId"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          description: string
          id: number
          image: string[] | null
          state: Database["public"]["Enums"]["state"] | null
          title: string
        }
        Insert: {
          description: string
          id?: number
          image?: string[] | null
          state?: Database["public"]["Enums"]["state"] | null
          title: string
        }
        Update: {
          description?: string
          id?: number
          image?: string[] | null
          state?: Database["public"]["Enums"]["state"] | null
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      stack:
        | "frontend"
        | "backend"
        | "fullstack"
        | "database"
        | "api"
        | "version control"
      state:
        | "Not Started"
        | "In Progress"
        | "Completed"
        | "Canceled"
        | "On Hold"
      status:
        | "Niet Gestart"
        | "In Uitvoering"
        | "Afgerond"
        | "Geannuleerd"
        | "In Wacht"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
