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
      };
    };
  };
}
