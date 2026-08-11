export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      asset_assignments: {
        Row: {
          accessories: string | null
          asset_id: string
          assigned_at: string
          created_at: string
          created_by: string | null
          employee_id: string
          expected_return_at: string | null
          handover_pdf_url: string | null
          id: string
          remarks: string | null
          returned_at: string | null
          status: Database["public"]["Enums"]["assignment_status"]
        }
        Insert: {
          accessories?: string | null
          asset_id: string
          assigned_at?: string
          created_at?: string
          created_by?: string | null
          employee_id: string
          expected_return_at?: string | null
          handover_pdf_url?: string | null
          id?: string
          remarks?: string | null
          returned_at?: string | null
          status?: Database["public"]["Enums"]["assignment_status"]
        }
        Update: {
          accessories?: string | null
          asset_id?: string
          assigned_at?: string
          created_at?: string
          created_by?: string | null
          employee_id?: string
          expected_return_at?: string | null
          handover_pdf_url?: string | null
          id?: string
          remarks?: string | null
          returned_at?: string | null
          status?: Database["public"]["Enums"]["assignment_status"]
        }
        Relationships: [
          {
            foreignKeyName: "asset_assignments_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asset_assignments_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_documents: {
        Row: {
          asset_id: string
          created_at: string
          doc_type: string | null
          file_name: string
          id: string
          mime_type: string | null
          size_bytes: number | null
          storage_path: string
          uploaded_by: string | null
        }
        Insert: {
          asset_id: string
          created_at?: string
          doc_type?: string | null
          file_name: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          storage_path: string
          uploaded_by?: string | null
        }
        Update: {
          asset_id?: string
          created_at?: string
          doc_type?: string | null
          file_name?: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          storage_path?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "asset_documents_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      assets: {
        Row: {
          asset_tag: string
          brand: string | null
          category: Database["public"]["Enums"]["asset_category"]
          company: string | null
          configuration: string | null
          created_at: string
          current_employee_id: string | null
          id: string
          invoice_number: string | null
          location: string | null
          product_name: string
          product_type: string | null
          purchase_date: string | null
          purchase_from: string | null
          purchase_price: number | null
          remarks: string | null
          serial_number: string | null
          series: string | null
          status: Database["public"]["Enums"]["asset_status"]
          updated_at: string
          vendor_name: string | null
          warranty_end: string | null
          warranty_start: string | null
        }
        Insert: {
          asset_tag: string
          brand?: string | null
          category: Database["public"]["Enums"]["asset_category"]
          company?: string | null
          configuration?: string | null
          created_at?: string
          current_employee_id?: string | null
          id?: string
          invoice_number?: string | null
          location?: string | null
          product_name: string
          product_type?: string | null
          purchase_date?: string | null
          purchase_from?: string | null
          purchase_price?: number | null
          remarks?: string | null
          serial_number?: string | null
          series?: string | null
          status?: Database["public"]["Enums"]["asset_status"]
          updated_at?: string
          vendor_name?: string | null
          warranty_end?: string | null
          warranty_start?: string | null
        }
        Update: {
          asset_tag?: string
          brand?: string | null
          category?: Database["public"]["Enums"]["asset_category"]
          company?: string | null
          configuration?: string | null
          created_at?: string
          current_employee_id?: string | null
          id?: string
          invoice_number?: string | null
          location?: string | null
          product_name?: string
          product_type?: string | null
          purchase_date?: string | null
          purchase_from?: string | null
          purchase_price?: number | null
          remarks?: string | null
          serial_number?: string | null
          series?: string | null
          status?: Database["public"]["Enums"]["asset_status"]
          updated_at?: string
          vendor_name?: string | null
          warranty_end?: string | null
          warranty_start?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assets_current_employee_id_fkey"
            columns: ["current_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: string
          created_at: string
          details: Json | null
          entity: string
          entity_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          details?: Json | null
          entity: string
          entity_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          details?: Json | null
          entity?: string
          entity_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      employees: {
        Row: {
          created_at: string
          department: string | null
          designation: string | null
          email: string | null
          employee_code: string
          id: string
          location: string | null
          mobile: string | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          department?: string | null
          designation?: string | null
          email?: string | null
          employee_code: string
          id?: string
          location?: string | null
          mobile?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          department?: string | null
          designation?: string | null
          email?: string | null
          employee_code?: string
          id?: string
          location?: string | null
          mobile?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "staff" | "manager"
      asset_category:
        | "laptop"
        | "desktop"
        | "server_desktop"
        | "monitor"
        | "keyboard"
        | "mouse"
        | "printer"
        | "rack"
        | "switch"
        | "access_point"
        | "n_computing"
        | "server"
        | "cctv"
        | "storage_device"
        | "ups"
        | "other"
      asset_status:
        | "available"
        | "assigned"
        | "in_repair"
        | "lost"
        | "damaged"
        | "returned"
        | "disposed"
      assignment_status: "active" | "returned" | "transferred"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "staff", "manager"],
      asset_category: [
        "laptop",
        "desktop",
        "server_desktop",
        "monitor",
        "keyboard",
        "mouse",
        "printer",
        "rack",
        "switch",
        "access_point",
        "n_computing",
        "server",
        "cctv",
        "storage_device",
        "ups",
        "other",
      ],
      asset_status: [
        "available",
        "assigned",
        "in_repair",
        "lost",
        "damaged",
        "returned",
        "disposed",
      ],
      assignment_status: ["active", "returned", "transferred"],
    },
  },
} as const
