import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { SubscriberEntity } from "../../domain/entities/subscriber.entity";
import { ContactEntity } from "../../domain/entities/contact.entity";
import config from "../../config";
import { ApiError } from "../../interfaces/middleware/error.middleware";

let supabase: SupabaseClient | null = null;

function getSupabase() {
  return createClient(
    config.supabaseUrl,
    config.supabaseServiceRoleKey, // Actual service_role key here
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false, // Extra safety: disable any URL-based session detection
      },
    }
  );
}

export const SupabaseRepo = {
  async upsertSubscriber(sub: SubscriberEntity) {
    const sb = getSupabase();
    const { data, error } = await sb
      .from("subscribers")
      .upsert(
        {
          email: sub.email,
          name: sub.name || null,
          source: sub.source || null,
          meta: sub.meta || null,
          is_active: sub.isActive || true,
        },
        { onConflict: "email" }
      )
      .select()
      .single();
    if (error) {
      throw new ApiError(400, error.message || "Failed to upsert subscriber");
    }
    return data ?? null;
  },
  async createContact(contact: ContactEntity) {
    const sb = getSupabase();
    const { data, error } = await sb
      .from("contacts")
      .insert({
        email: contact.email,
        name: contact.name || null,
        message: contact.message || null,
        ip_address: contact.ipAddress || null,
        user_agent: contact.userAgent || null,
      })
      .select()
      .single();

    if (error) {
      console.error("supabaseError", error);
      throw new ApiError(400, error.message || "Failed to create contact");
    }
    return data ?? null;
  },
};
