'use client';

import { memo, useCallback, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import {
  CurrencyTable,
  CurrencyTableProps,
} from '@/components/atoms/CurrencyTable';
import { Stat, StatProps } from '@/components/atoms/Stat';

import { getCoinData } from '@/api/coingecko';
import isEqual from 'react-fast-compare';

export interface Props {
  statData: StatProps;
  currencyData: CurrencyTableProps['data'];
}

const Page: React.FC<Props> = ({ statData, currencyData }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const refetchData = useCallback(async () => {
    // Mutate external data source
    await getCoinData();

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }, [router]);

  useEffect(() => {
    const interval = setInterval(() => refetchData(), 60000);

    return () => clearInterval(interval);
  }, [refetchData]);

  const onRowClick = useCallback(
    (currency: string) => {
      router.push(`currencies/${currency}`);
    },
    [router]
  );

  return (
    <div className="m-4 flex flex-col items-center">
      <div className="card bg-base-300 shadow-xl mb-4">
        <div className="card-body flex-row">
          <Stat {...statData} />
        </div>
      </div>
      <div className="card bg-base-300 shadow-xl w-2/3">
        <div className="card-body">
          <h2 className="card-title">Latest Exchange Rates</h2>
          <CurrencyTable data={currencyData} onRowClick={onRowClick} />
        </div>
      </div>
    </div>
  );
};

export const Home = memo(Page, isEqual);
