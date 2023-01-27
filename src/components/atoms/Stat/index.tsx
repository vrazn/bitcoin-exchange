import Image from 'next/image';
import format from 'date-fns/format';

import { formatCurrency, formatPercent } from '@/utils/formatters/numbers';
import { parseISO } from 'date-fns';

export interface StatProps {
  currency: string;
  currentPrice: number;
  lastUpdated: string;
  priceChange24hr: number;
  priceChangePercentage24hr: number;
  low24Hr: number;
  high24Hr: number;
}

export const Stat = ({
  currency,
  currentPrice,
  lastUpdated,
  priceChange24hr,
  priceChangePercentage24hr,
  low24Hr,
  high24Hr,
}: StatProps) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <Image src="/bitcoin.svg" width={48} height={48} alt="Bitcoin Logo" />
        </div>
        <div className="stat-title">Latest Price</div>
        <div className="stat-value">
          {formatCurrency(currentPrice, currency)}
        </div>
        <div className="stat-desc">
          Last updated: {format(parseISO(lastUpdated), 'Pp')}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Price change (24hr)</div>
        <div className="stat-value">
          {formatCurrency(priceChange24hr, currency)}
        </div>
        <div
          className={`stat-desc ${
            priceChangePercentage24hr >= 0 ? 'text-success' : 'text-error'
          }`}
        >
          {priceChangePercentage24hr >= 0
            ? `↗︎ ${formatPercent(priceChangePercentage24hr)}`
            : `↘︎ ${formatPercent(priceChangePercentage24hr)}`}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">24hr range</div>
        <div className="stat-value flex items-center">
          <progress
            className="progress progress-primary w-56 bg-neutral-content"
            value={currentPrice - low24Hr}
            max={high24Hr - low24Hr}
          ></progress>
        </div>
        <div className="stat-description flex flex-row justify-between">
          <span>{formatCurrency(low24Hr, currency)}</span>
          <span>{formatCurrency(high24Hr, currency)}</span>
        </div>
      </div>
    </div>
  );
};
