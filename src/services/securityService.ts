import { supabase } from '../lib/supabase';

export interface SecuritySettings {
  id: string;
  userId: string;
  loginNotificationsEnabled: boolean;
  updatedAt: string;
  createdAt: string;
}

export const securityService = {
  // Get security settings for a user
  async getSecuritySettings(userId: string): Promise<SecuritySettings | null> {
    try {
      const { data, error } = await supabase
        .from('security_settings')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching security settings:', error);
        return null;
      }

      if (!data) {
        // Create default settings if none exist
        const { data: newSettings, error: createError } = await supabase
          .from('security_settings')
          .insert({
            user_id: userId,
            login_notifications_enabled: false,
          })
          .select()
          .single();

        if (createError) {
          console.error(
            'Error creating default security settings:',
            createError
          );
          return null;
        }

        return {
          id: newSettings.id,
          userId: newSettings.user_id,
          loginNotificationsEnabled: newSettings.login_notifications_enabled,
          updatedAt: newSettings.updated_at,
          createdAt: newSettings.created_at,
        };
      }

      return {
        id: data.id,
        userId: data.user_id,
        loginNotificationsEnabled: data.login_notifications_enabled,
        updatedAt: data.updated_at,
        createdAt: data.created_at,
      };
    } catch (error) {
      console.error('Error in getSecuritySettings:', error);
      return null;
    }
  },

  // Update login notifications setting
  async updateLoginNotifications(
    userId: string,
    enabled: boolean
  ): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('security_settings')
        .upsert({
          user_id: userId,
          login_notifications_enabled: enabled,
        })
        .select();

      if (error) {
        console.error('Error updating login notifications:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in updateLoginNotifications:', error);
      return false;
    }
  },
};
