export interface GetCoinDataResponse {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: Record<string, number>;
    ath: Record<string, number>;
    ath_change_percentage: Record<string, number>;
    ath_date: Record<string, number>;
    atl: Record<string, number>;
    atl_change_percentage: Record<string, number>;
    atl_date: Record<string, number>;
    market_cap: Record<string, number>;
    fully_diluted_valuation: Record<string, number>;
    total_volume: Record<string, number>;
    high_24h: Record<string, number>;
    low_24h: Record<string, number>;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: Record<string, number>;
    price_change_percentage_1h_in_currency: Record<string, number>;
    price_change_percentage_24h_in_currency: Record<string, number>;
    price_change_percentage_7d_in_currency: Record<string, number>;
    price_change_percentage_14d_in_currency: Record<string, number>;
    price_change_percentage_30d_in_currency: Record<string, number>;
    price_change_percentage_60d_in_currency: Record<string, number>;
    price_change_percentage_200d_in_currency: Record<string, number>;
    price_change_percentage_1y_in_currency: Record<string, number>;
    market_cap_change_24h_in_currency: Record<string, number>;
    market_cap_change_percentage_24h_in_currency: Record<string, number>;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    sparkline_7d: {
      price: number[];
    };
    last_updated: string;
  };
  last_updated: string;
}

export interface GetMarketChartDataResponse {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export type GetOhlcResponse = [number, number, number, number, number][];

const getCoinData: () => Promise<GetCoinDataResponse> = async () => {
  const endpoint = process.env.NEXT_PUBLIC_COIN_GECKO_REST_ENDPOINT;

  const response = await fetch(
    `${endpoint}/coins/bitcoin?localization=en&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

const getMarketChartData: (
  currency: string,
  days: number | 'max'
) => Promise<GetMarketChartDataResponse> = async (currency, days) => {
  const endpoint = process.env.NEXT_PUBLIC_COIN_GECKO_REST_ENDPOINT;

  const response = await fetch(
    `${endpoint}/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

const getOhlc: (
  currency: string,
  days: number | 'max'
) => Promise<GetOhlcResponse> = async (currency, days) => {
  const endpoint = process.env.NEXT_PUBLIC_COIN_GECKO_REST_ENDPOINT;

  const response = await fetch(
    `${endpoint}/coins/bitcoin/ohlc?vs_currency=${currency}&days=${days}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

export { getCoinData, getMarketChartData, getOhlc };
