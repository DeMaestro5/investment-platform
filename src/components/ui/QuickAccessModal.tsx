import React, { useState } from 'react';

interface QuickAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolType: 'currency' | 'pip' | 'margin' | 'profit' | null;
}

const QuickAccessModal: React.FC<QuickAccessModalProps> = ({
  isOpen,
  onClose,
  toolType,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    amount: '',
    currencyPair: 'EURUSD',
    positionSize: '',
    accountBalance: '',
    leverage: '100',
    entryPrice: '',
    exitPrice: '',
  });
  const [results, setResults] = useState({
    exchangeRate: '1.2345',
    convertedAmount: '123.45 EUR',
    pipValue: '$10.00',
    pipValuePerLot: '$1.00',
    requiredMargin: '$1,234.56',
    freeMargin: '$8,765.44',
    profitLoss: '+$1,234.56',
    profitLossPips: '+123.45',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Calculate based on tool type
    switch (toolType) {
      case 'currency': {
        // Get current exchange rate (in a real app, this would come from an API)
        const exchangeRates: Record<string, Record<string, number>> = {
          USD: { EUR: 0.92, GBP: 0.79, JPY: 151.5 },
          EUR: { USD: 1.09, GBP: 0.86, JPY: 164.5 },
          GBP: { USD: 1.27, EUR: 1.16, JPY: 191.5 },
          JPY: { USD: 0.0066, EUR: 0.0061, GBP: 0.0052 },
        };

        const rate =
          exchangeRates[formData.fromCurrency]?.[formData.toCurrency] || 1;
        const amount = Number(formData.amount);
        const convertedAmount = amount * rate;

        setResults((prev) => ({
          ...prev,
          exchangeRate: rate.toFixed(4),
          convertedAmount: `${convertedAmount.toFixed(2)} ${
            formData.toCurrency
          }`,
        }));
        break;
      }

      case 'pip': {
        // Standard lot size is 100,000 units
        const STANDARD_LOT = 100000;
        const positionSize = Number(formData.positionSize);

        // Get pip value based on currency pair
        const pipValues: Record<string, number> = {
          EURUSD: 0.0001,
          GBPUSD: 0.0001,
          USDJPY: 0.01,
          AUDUSD: 0.0001,
        };

        const pipSize = pipValues[formData.currencyPair] || 0.0001;
        const pipValue = (STANDARD_LOT * pipSize) / 100; // Convert to cents
        const pipValuePerLot = pipValue * positionSize;

        setResults((prev) => ({
          ...prev,
          pipValue: `$${pipValue.toFixed(2)}`,
          pipValuePerLot: `$${pipValuePerLot.toFixed(2)}`,
        }));
        break;
      }

      case 'margin': {
        const accountBalance = Number(formData.accountBalance);
        const positionSize = Number(formData.positionSize);
        const leverage = Number(formData.leverage);

        // Standard lot size is 100,000 units
        const STANDARD_LOT = 100000;

        // Calculate required margin
        const requiredMargin = (positionSize * STANDARD_LOT) / leverage;
        const freeMargin = accountBalance - requiredMargin;

        setResults((prev) => ({
          ...prev,
          requiredMargin: `$${requiredMargin.toFixed(2)}`,
          freeMargin: `$${freeMargin.toFixed(2)}`,
        }));
        break;
      }

      case 'profit': {
        const entryPrice = Number(formData.entryPrice);
        const exitPrice = Number(formData.exitPrice);
        const positionSize = Number(formData.positionSize);

        // Calculate profit/loss in pips
        const pipDifference = (exitPrice - entryPrice) * 10000; // For 4 decimal places
        const pipValue = 10; // Standard pip value for EUR/USD

        // Calculate profit/loss in currency
        const profitLoss = pipDifference * pipValue * positionSize;

        setResults((prev) => ({
          ...prev,
          profitLoss: `${profitLoss >= 0 ? '+' : ''}$${profitLoss.toFixed(2)}`,
          profitLossPips: `${
            pipDifference >= 0 ? '+' : ''
          }${pipDifference.toFixed(2)}`,
        }));
        break;
      }
    }

    setIsLoading(false);
  };

  if (!isOpen || !toolType) return null;

  const renderCalculator = () => {
    switch (toolType) {
      case 'currency':
        return (
          <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  From Currency
                </label>
                <select
                  name='fromCurrency'
                  value={formData.fromCurrency}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                >
                  <option value='USD'>USD - US Dollar</option>
                  <option value='EUR'>EUR - Euro</option>
                  <option value='GBP'>GBP - British Pound</option>
                  <option value='JPY'>JPY - Japanese Yen</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  To Currency
                </label>
                <select
                  name='toCurrency'
                  value={formData.toCurrency}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                >
                  <option value='EUR'>EUR - Euro</option>
                  <option value='USD'>USD - US Dollar</option>
                  <option value='GBP'>GBP - British Pound</option>
                  <option value='JPY'>JPY - Japanese Yen</option>
                </select>
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>Amount</label>
              <input
                type='number'
                name='amount'
                value={formData.amount}
                onChange={handleInputChange}
                className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                placeholder='Enter amount'
              />
            </div>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <div className='text-sm text-gray-400'>Exchange Rate</div>
              <div className='text-2xl font-bold'>{results.exchangeRate}</div>
              <div className='text-sm text-gray-400 mt-2'>Converted Amount</div>
              <div className='text-2xl font-bold text-green-400'>
                {results.convertedAmount}
              </div>
            </div>
          </div>
        );

      case 'pip':
        return (
          <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Currency Pair
                </label>
                <select
                  name='currencyPair'
                  value={formData.currencyPair}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                >
                  <option value='EURUSD'>EUR/USD</option>
                  <option value='GBPUSD'>GBP/USD</option>
                  <option value='USDJPY'>USD/JPY</option>
                  <option value='AUDUSD'>AUD/USD</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Position Size (Lots)
                </label>
                <input
                  type='number'
                  name='positionSize'
                  value={formData.positionSize}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                  placeholder='Enter position size'
                />
              </div>
            </div>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <div className='text-sm text-gray-400'>Pip Value</div>
              <div className='text-2xl font-bold text-green-400'>
                {results.pipValue}
              </div>
              <div className='text-sm text-gray-400 mt-2'>
                Pip Value per Lot
              </div>
              <div className='text-2xl font-bold'>{results.pipValuePerLot}</div>
            </div>
          </div>
        );

      case 'margin':
        return (
          <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Account Balance
                </label>
                <input
                  type='number'
                  name='accountBalance'
                  value={formData.accountBalance}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                  placeholder='Enter account balance'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Leverage
                </label>
                <select
                  name='leverage'
                  value={formData.leverage}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                >
                  <option value='50'>1:50</option>
                  <option value='100'>1:100</option>
                  <option value='200'>1:200</option>
                  <option value='500'>1:500</option>
                </select>
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>
                Position Size (Lots)
              </label>
              <input
                type='number'
                name='positionSize'
                value={formData.positionSize}
                onChange={handleInputChange}
                className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                placeholder='Enter position size'
              />
            </div>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <div className='text-sm text-gray-400'>Required Margin</div>
              <div className='text-2xl font-bold text-yellow-400'>
                {results.requiredMargin}
              </div>
              <div className='text-sm text-gray-400 mt-2'>Free Margin</div>
              <div className='text-2xl font-bold text-green-400'>
                {results.freeMargin}
              </div>
            </div>
          </div>
        );

      case 'profit':
        return (
          <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Entry Price
                </label>
                <input
                  type='number'
                  name='entryPrice'
                  value={formData.entryPrice}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                  placeholder='Enter entry price'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Exit Price
                </label>
                <input
                  type='number'
                  name='exitPrice'
                  value={formData.exitPrice}
                  onChange={handleInputChange}
                  className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                  placeholder='Enter exit price'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium mb-2'>
                Position Size (Lots)
              </label>
              <input
                type='number'
                name='positionSize'
                value={formData.positionSize}
                onChange={handleInputChange}
                className='w-full bg-gray-600 border border-gray-500 rounded px-3 py-2'
                placeholder='Enter position size'
              />
            </div>
            <div className='bg-gray-700 p-4 rounded-lg'>
              <div className='text-sm text-gray-400'>Profit/Loss</div>
              <div className='text-2xl font-bold text-green-400'>
                {results.profitLoss}
              </div>
              <div className='text-sm text-gray-400 mt-2'>
                Profit/Loss in Pips
              </div>
              <div className='text-2xl font-bold'>{results.profitLossPips}</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (toolType) {
      case 'currency':
        return 'Currency Converter';
      case 'pip':
        return 'Pip Calculator';
      case 'margin':
        return 'Margin Calculator';
      case 'profit':
        return 'Profit Calculator';
      default:
        return '';
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
      <div className='bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center p-4 border-b border-gray-700'>
          <h2 className='text-2xl font-semibold'>{getTitle()}</h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-white transition-colors'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='p-6'>
          {renderCalculator()}
          <div className='mt-6'>
            <button
              onClick={handleCalculate}
              disabled={isLoading}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
            >
              {isLoading ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Calculating...
                </>
              ) : (
                'Calculate'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessModal;
