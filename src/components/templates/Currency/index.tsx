'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import calculateEMA from 'exponential-moving-average';

import { ButtonGroup } from '@/components/atoms/ButtonGroup';
import { Stat, StatProps } from '@/components/atoms/Stat';
import {
  CurrencyChart,
  CurrencyChartProps,
} from '@/components/atoms/CurrencyChart';

import {
  getMarketChartData,
  GetMarketChartDataResponse,
  getOhlc,
  GetOhlcResponse,
} from '@/api/coingecko';

export interface Props {
  currency: string;
  statData: StatProps;
  marketChartData: GetMarketChartDataResponse;
  ohlcData: GetOhlcResponse;
}

const typeSelectors = [
  { title: 'Price', value: 'price' },
  { title: 'Market Cap', value: 'cap' },
  { title: 'Volumes', value: 'volume' },
  { title: 'EMA', value: 'ema' },
];

const daysSelectors = [
  { title: '24hr', value: 1 },
  { title: '7d', value: 7 },
  { title: '14d', value: 14 },
  { title: '30d', value: 30 },
  { title: '90d', value: 90 },
  { title: '180d', value: 180 },
  { title: '1y', value: 365 },
  { title: 'Max', value: 'max' },
];

const Page: React.FC<Props> = ({ currency, statData, ...rest }) => {
  const [marketChartData, setMarketChartData] = useState(rest.marketChartData);
  const [ohlcData, setOhlcData] = useState<GetOhlcResponse>(rest.ohlcData);
  const [days, setDays] = useState<number | 'max'>(1);
  const [type, setType] = useState<'price' | 'cap' | 'volume' | 'ema'>('price');

  let label: CurrencyChartProps['label'] = '';
  let data: CurrencyChartProps['data'] = [];

  const ema = useMemo(() => {
    const closingAmounts = ohlcData.map((arr) => arr[4]);

    // Calculate the 10 day rolling average
    const calculatedEMA = calculateEMA(closingAmounts, 10);

    return (
      ohlcData
        // Discard the first 10 entries
        .slice(10)
        .map((val, index) => [val[0], calculatedEMA[index]])
    );
  }, [ohlcData]);

  if (type === 'price') {
    label = 'Prices';
    data = marketChartData['prices'];
  }
  if (type === 'cap') {
    label = 'Market Caps';
    data = marketChartData['market_caps'];
  }
  if (type === 'volume') {
    label = 'Total Volume';
    data = marketChartData['total_volumes'];
  }
  if (type === 'ema') {
    label = 'EMA (10 day)';
    data = ema;
  }

  const fetchMarketChartData = useCallback(
    async (_currency: string, _days: number | 'max') => {
      const [newMarketChartData] = await Promise.all([
        getMarketChartData(_currency, _days),
      ]);

      setMarketChartData(newMarketChartData);
    },
    []
  );

  const fetchOhlcData = useCallback(
    async (_currency: string, _days: number | 'max') => {
      const newOhlcData = await getOhlc(_currency, _days);

      setOhlcData(newOhlcData);
    },
    []
  );

  const handleTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const value = e.currentTarget.value as 'price' | 'cap' | 'volume' | 'ema';
      setType(value);
    },
    []
  );

  const handleDaysChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const value =
        e.currentTarget.value === 'max' ? 'max' : Number(e.currentTarget.value);

      setDays(value);
      fetchMarketChartData(currency, value);
      fetchOhlcData(currency, value);
    },
    [currency, fetchMarketChartData, fetchOhlcData]
  );

  return (
    <div className="m-4 flex flex-col items-center">
      <div className="flex flex-row justify-end mb-4">
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body flex-row">
            <Stat {...statData} />
          </div>
        </div>
      </div>
      <div className="card bg-base-300 shadow-xl w-2/3">
        <div className="card-body">
          <div className="flex flex-row justify-between">
            <ButtonGroup
              name="type"
              buttons={typeSelectors}
              value={type}
              onChange={handleTypeChange}
            />
            <ButtonGroup
              name="days"
              buttons={daysSelectors}
              value={days}
              onChange={handleDaysChange}
            />
          </div>
          <h2 className="card-title">Bitcoin Price Chart (BTC)</h2>
          <CurrencyChart label={label} data={data} />
        </div>
      </div>
    </div>
  );
};

export const Currency = memo(Page, isEqual);
