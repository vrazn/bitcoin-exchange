import { formatCurrency, formatPercent } from './numbers';

describe('formatCurrency', () => {
  it('formats the number to specified currency in en-US locale', async () => {
    const usd = formatCurrency(1000, 'usd');
    expect(usd).toBe('$1,000');
    const jpy = formatCurrency(1000, 'jpy');
    expect(jpy).toEqual('¥1,000');
  });

  it('formats the number to 2dp', async () => {
    const result = formatCurrency(1000.1234, 'usd');
    expect(result).toEqual('$1,000.12');
  });

  it('rounds the fraction to the closest digit', async () => {
    const result = formatCurrency(1000.5678, 'usd');
    expect(result).toEqual('$1,000.57');
  });
});

describe('formatPercent', () => {
  it('adds the % sign', async () => {
    const percent = formatPercent(1);
    expect(percent).toBe('1%');
  });

  it('removes the number sign', async () => {
    const percent = formatPercent(-1);
    expect(percent).toBe('1%');
  });

  it('formats the number to 2dp', async () => {
    const percent = formatPercent(1.1234);
    expect(percent).toEqual('1.12%');
  });

  it('rounds the fraction to the closest digit', async () => {
    const percent = formatPercent(1.5678);
    expect(percent).toEqual('1.57%');
  });
});
