import { getCoinData, getMarketChartData, getOhlc } from '@/api/coingecko';

import { Currency as CurrencyTemplate } from '@/components/templates/Currency';

export default async function Currency({
  params,
}: {
  params: { currency: string };
}) {
  const currency = params.currency.toLowerCase();

  const [{ market_data }, marketChartData, ohlcData] = await Promise.all([
    getCoinData(),
    getMarketChartData(currency, 1),
    getOhlc(currency, 1),
  ]);

  const statData = {
    currency,
    currentPrice: market_data.current_price[currency],
    lastUpdated: market_data.last_updated,
    priceChange24hr: market_data.price_change_24h_in_currency[currency],
    priceChangePercentage24hr:
      market_data.price_change_percentage_24h_in_currency[currency],
    low24Hr: market_data.low_24h[currency],
    high24Hr: market_data.high_24h[currency],
  };

  return (
    <main className="flex flex-col flex-1">
      <CurrencyTemplate
        currency={currency}
        statData={statData}
        ohlcData={ohlcData}
        marketChartData={marketChartData}
      />
    </main>
  );
}
