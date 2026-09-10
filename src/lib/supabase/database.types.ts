/**
 * Hand-written Supabase database types, matching supabase/migrations/*.sql.
 *
 * If you're using the Supabase CLI, you can regenerate this from the live
 * schema instead of maintaining it by hand:
 *
 *   npx supabase gen types typescript --project-id <your-project-ref> > src/lib/supabase/database.types.ts
 */
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          is_subscribed: boolean;
          subscription_current_period_end: string | null;
          cancel_at_period_end: boolean;
          paddle_customer_id: string | null;
          paddle_subscription_id: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          is_subscribed?: boolean;
          subscription_current_period_end?: string | null;
          cancel_at_period_end?: boolean;
          paddle_customer_id?: string | null;
          paddle_subscription_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          is_subscribed?: boolean;
          subscription_current_period_end?: string | null;
          cancel_at_period_end?: boolean;
          paddle_customer_id?: string | null;
          paddle_subscription_id?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      saved_words: {
        Row: {
          id: string;
          user_id: string;
          lesson_slug: string;
          vocab_id: string;
          term: string;
          reading: string | null;
          part_of_speech: string;
          translation: string;
          example: string;
          example_translation: string;
          saved_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_slug: string;
          vocab_id: string;
          term: string;
          reading?: string | null;
          part_of_speech: string;
          translation: string;
          example: string;
          example_translation: string;
          saved_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          lesson_slug?: string;
          vocab_id?: string;
          term?: string;
          reading?: string | null;
          part_of_speech?: string;
          translation?: string;
          example?: string;
          example_translation?: string;
          saved_at?: string;
        };
        Relationships: [];
      };
      completed_lessons: {
        Row: {
          user_id: string;
          lesson_slug: string;
          completed_at: string;
        };
        Insert: {
          user_id: string;
          lesson_slug: string;
          completed_at?: string;
        };
        Update: {
          user_id?: string;
          lesson_slug?: string;
          completed_at?: string;
        };
        Relationships: [];
      };
      reading_days: {
        Row: {
          user_id: string;
          /** Local calendar day, "YYYY-MM-DD". */
          day: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          day: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          day?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      book_clubs: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          join_code: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          owner_id: string;
          name?: string;
          join_code?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          owner_id?: string;
          name?: string;
          join_code?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      book_club_members: {
        Row: {
          club_id: string;
          user_id: string;
          role: "owner" | "member";
          joined_at: string;
        };
        Insert: {
          club_id: string;
          user_id: string;
          role?: "owner" | "member";
          joined_at?: string;
        };
        Update: {
          club_id?: string;
          user_id?: string;
          role?: "owner" | "member";
          joined_at?: string;
        };
        Relationships: [];
      };
      shared_chapters: {
        Row: {
          club_id: string;
          lesson_slug: string;
          shared_by: string | null;
          shared_at: string;
        };
        Insert: {
          club_id: string;
          lesson_slug: string;
          shared_by?: string | null;
          shared_at?: string;
        };
        Update: {
          club_id?: string;
          lesson_slug?: string;
          shared_by?: string | null;
          shared_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      user_has_club_unlock: {
        Args: { p_lesson_slug: string };
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
