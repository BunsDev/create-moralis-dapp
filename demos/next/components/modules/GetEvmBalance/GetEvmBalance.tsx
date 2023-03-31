import { useEvmWalletTokenBalances } from '@moralisweb3/react';
import { AddressInput, DataOutput, SectionHeading } from 'components/elements';
import React from 'react';

export default function GetEvmBalance() {
  const [evmAddress, setEvmAddress] = React.useState(
    '0x75e3e9c92162e62000425c98769965a76c2e387a'
  );
  const {
    data: evmBalance,
    refetch: fetchErc20,
    error: errorErc20,
  } = useEvmWalletTokenBalances({ address: evmAddress }, { enabled: false });

  return (
    <>
      <SectionHeading>Get Ethereum Token Balance</SectionHeading>
      <AddressInput
        address={evmAddress}
        setAddress={setEvmAddress}
        fetch={fetchErc20}
      />
      <SectionHeading>Result:</SectionHeading>
      {errorErc20 ? (
        <DataOutput>{JSON.stringify(errorErc20)}</DataOutput>
      ) : (
        <DataOutput>
          {evmBalance
            ? JSON.stringify(evmBalance, null, 2)
            : 'Click the "🔎" button to fetch data'}
        </DataOutput>
      )}
    </>
  );
}
