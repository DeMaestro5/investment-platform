// User and Authentication types
export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  account_status: 'pending' | 'active' | 'suspended' | 'flagged';
  risk_level: 'low' | 'medium' | 'high';
  account_type: 'basic' | 'premium' | 'vip';
  portfolio_value: number;
  created_at: string;
  updated_at: string;
}

export interface UserSession {
  user: UserProfile | null;
  isLoading: boolean;
  isAdmin: boolean;
}

// Dashboard types
export interface MarketOverview {
  index: string;
  price: number;
  change: number;
  changePercent: number;
  open: number;
  high: number;
  low: number;
  volume: string | number;
}

export interface MarketMover {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string | number;
}

export interface StockData {
  name: string;
  value: number;
  time?: string;
}

export interface WatchlistItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  marketCap: string;
  addedAt: string;
}

export interface Watchlist {
  id: string;
  userId: string;
  name: string;
  items: WatchlistItem[];
  createdAt: string;
  updatedAt: string;
}

// Portfolio types
export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  description?: string;
  totalValue: number;
  performance: {
    day: number;
    week: number;
    month: number;
    year: number;
    allTime: number;
  };
  holdings: PortfolioHolding[];
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioHolding {
  symbol: string;
  name: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
  allocation: number;
}

// Transaction types
export interface Transaction {
  id: string;
  userId: string;
  portfolioId?: string;
  transactionType: 'buy' | 'sell' | 'deposit' | 'withdrawal';
  symbol?: string;
  quantity?: number;
  price?: number;
  totalAmount: number;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  executedAt: string;
  createdAt: string;
}

// Market Data types
export interface StockQuote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  open: number;
  high: number;
  low: number;
  previousClose: number;
  volume: number;
  marketCap: number;
  peRatio?: number;
  dividend?: number;
  dividendYield?: number;
  exchange: string;
  lastUpdated: string;
}

export interface ForexQuote {
  pair: string;
  baseCurrency: string;
  quoteCurrency: string;
  rate: number;
  change: number;
  changePercent: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  lastUpdated: string;
}

// Admin types
export interface AdminDashboardStats {
  totalUsers: number;
  activeUsers: number;
  pendingUsers: number;
  flaggedUsers: number;
  totalPortfolioValue: number;
  newUsersToday: number;
  newUsersThisWeek: number;
  newUsersThisMonth: number;
}

export interface AdminUserListFilters {
  status?: 'pending' | 'active' | 'suspended' | 'flagged';
  riskLevel?: 'low' | 'medium' | 'high';
  accountType?: 'basic' | 'premium' | 'vip';
  dateRange?: {
    start: string;
    end: string;
  };
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
  status: 'success' | 'error';
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

// UI Component types
export interface TabItem {
  key: string;
  label: string;
  count?: number;
}

export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  href: string;
  active?: boolean;
}

export interface ChartPeriod {
  key: '1D' | '1W' | '1M' | '3M' | '1Y' | '5Y' | 'ALL';
  label: string;
}

// Trading view chart types
export interface TradingViewConfig {
  symbol: string;
  interval?: string;
  timezone?: string;
  theme?: 'light' | 'dark';
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  hide_top_toolbar?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  container_id?: string;
}
