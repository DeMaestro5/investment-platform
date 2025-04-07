import { supabase } from '../lib/supabase';
import { Transaction } from '../types';

export const transactionService = {
  // Get recent transactions for a user
  async getRecentTransactions(
    userId: string,
    limit: number = 5
  ): Promise<Transaction[]> {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('userId', userId)
        .order('createdAt', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching recent transactions:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getRecentTransactions:', error);
      return [];
    }
  },

  // Get all transactions for a user
  async getAllTransactions(userId: string): Promise<Transaction[]> {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('userId', userId)
        .order('createdAt', { ascending: false });

      if (error) {
        console.error('Error fetching all transactions:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getAllTransactions:', error);
      return [];
    }
  },

  // Create a new transaction
  async createTransaction(
    transaction: Omit<Transaction, 'id' | 'createdAt'>
  ): Promise<Transaction | null> {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .insert({
          ...transaction,
          createdAt: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating transaction:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in createTransaction:', error);
      return null;
    }
  },
};
