import { supabase } from '../lib/supabase';

export interface PerformanceMetrics {
  winRate: number;
  averageTrade: number;
  totalTrades: number;
  riskRewardRatio: number;
  winRateChange: number;
  averageTradeChange: number;
  totalTradesChange: number;
  riskRewardChange: number;
}

export const performanceService = {
  // Get performance metrics for a user
  async getPerformanceMetrics(
    userId: string
  ): Promise<PerformanceMetrics | null> {
    try {
      const { data, error } = await supabase
        .from('performance_metrics')
        .select('*')
        .eq('userId', userId)
        .single();

      if (error) {
        console.error('Error fetching performance metrics:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in getPerformanceMetrics:', error);
      return null;
    }
  },

  // Update performance metrics for a user
  async updatePerformanceMetrics(
    userId: string,
    metrics: Partial<PerformanceMetrics>
  ): Promise<boolean> {
    try {
      const { error } = await supabase.from('performance_metrics').upsert({
        userId,
        ...metrics,
        updatedAt: new Date().toISOString(),
      });

      if (error) {
        console.error('Error updating performance metrics:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in updatePerformanceMetrics:', error);
      return false;
    }
  },
};
