import { supabase } from '../lib/supabase';
import { UserProfile } from '../types';

export const userService = {
  // Get user profile by ID
  async getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in getUserProfile:', error);
      return null;
    }
  },

  // Create or update user profile
  async upsertUserProfile(profile: UserProfile): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert(profile)
        .select()
        .single();

      if (error) {
        console.error('Error upserting user profile:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in upsertUserProfile:', error);
      return null;
    }
  },

  // Update user balance
  async updateBalance(userId: string, newBalance: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({ balance: newBalance })
        .eq('id', userId);

      if (error) {
        console.error('Error updating balance:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in updateBalance:', error);
      return false;
    }
  },

  // Update user profit
  async updateProfit(userId: string, newProfit: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({ profit: newProfit })
        .eq('id', userId);

      if (error) {
        console.error('Error updating profit:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in updateProfit:', error);
      return false;
    }
  },

  // Update user profile details
  async updateUserDetails(
    userId: string,
    details: {
      full_name?: string;
      phone_number?: string;
      address?: string;
      city?: string;
      country?: string;
      postal_code?: string;
    }
  ): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update(details)
        .eq('id', userId);

      if (error) {
        console.error('Error updating user details:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in updateUserDetails:', error);
      return false;
    }
  },
};
