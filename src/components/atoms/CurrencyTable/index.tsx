'use client';

import { formatPercent } from '@/utils/formatters/numbers';
import { memo, useEffect, useRef, useCallback } from 'react';
import isEqual from 'react-fast-compare';

import styles from './styles.module.css';

export interface CurrencyRow {
  currency: string;
  price: number;
  '1hrChange': number;
  '24hrChange': number;
  '7dChange': number;
}

export interface CurrencyTableProps {
  data: CurrencyRow[];
  onRowClick: (currency: string) => void;
}

const Table = ({ data, onRowClick }: CurrencyTableProps) => {
  const prevStateRef = useRef<CurrencyTableProps['data']>();

  const renderCell = useCallback(
    (key: keyof CurrencyRow, row: CurrencyRow, rowIndex: number) => {
      switch (key) {
        case 'currency':
          return (
            <span className="font-bold text-primary">{`BTC <> ${row[key]}`}</span>
          );
        case 'price': {
          let textModifier = '0';

          if (prevStateRef.current) {
            const prevValue = prevStateRef.current[rowIndex].price;
            const change = row[key] - prevValue;
            if (change > 0) {
              textModifier = '+';
            } else if (change < 0) {
              textModifier = '-';
            }
          }

          return (
            <span
              className={`${styles.highlight} font-bold`}
              data-change={textModifier}
            >
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
                currency: row.currency,
              }).format(row[key])}
            </span>
          );
        }
        case '1hrChange':
        case '24hrChange':
        case '7dChange': {
          return (
            <span
              className={`font-bold ${
                row[key] >= 0 ? 'text-success' : 'text-error'
              }`}
            >
              {formatPercent(row[key])}
            </span>
          );
        }
        default:
          return null;
      }
    },
    []
  );

  useEffect(() => {
    prevStateRef.current = data;
  }, [data]);

  return (
    <table className="table table-normal w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>CURRENCY</th>
          <th>PRICE</th>
          <th>1hr %</th>
          <th>24hr %</th>
          <th>7d %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={`row-${rowIndex}`}
            className="hover cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRowClick(row.currency);
            }}
          >
            <td>{rowIndex + 1}</td>
            {Object.keys(row).map((key, cellIndex) => (
              <td key={`cell-${cellIndex}`}>
                {renderCell(key as keyof CurrencyRow, row, rowIndex)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const CurrencyTable = memo(Table, isEqual);
