import { codes } from 'currency-codes';

import { getCoinData } from '@/api/coingecko';

import type { CurrencyRow } from '@/components/atoms/CurrencyTable';
import { Home as HomeTemplate } from '@/components/templates/Home';

const CURRENCY_CODES = codes();

export const revalidate = 60;

export default async function Home() {
  const { market_data } = await getCoinData();

  const statData = {
    currency: 'usd',
    currentPrice: market_data.current_price.usd,
    lastUpdated: market_data.last_updated,
    priceChange24hr: market_data.price_change_24h_in_currency.usd,
    priceChangePercentage24hr:
      market_data.price_change_percentage_24h_in_currency.usd,
    low24Hr: market_data.low_24h.usd,
    high24Hr: market_data.high_24h.usd,
  };

  const currencyData = CURRENCY_CODES.reduce((acc, curr) => {
    const lowerCaseCC = curr.toLowerCase();
    if (lowerCaseCC in market_data.current_price) {
      acc.push({
        currency: curr,
        price: market_data.current_price[lowerCaseCC],
        '1hrChange':
          market_data.price_change_percentage_1h_in_currency[lowerCaseCC],
        '24hrChange':
          market_data.price_change_percentage_24h_in_currency[lowerCaseCC],
        '7dChange':
          market_data.price_change_percentage_7d_in_currency[lowerCaseCC],
      });
    }
    return acc;
  }, [] as CurrencyRow[]);

  return (
    <main className="flex flex-col flex-1">
      <HomeTemplate currencyData={currencyData} statData={statData} />
    </main>
  );
}
