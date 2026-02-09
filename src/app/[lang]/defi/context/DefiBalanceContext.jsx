'use client';

import { createContext, useContext, useState } from 'react';

const DefiBalanceContext = createContext({
  balance: '$******',
  setBalance: () => {},
  balanceVisible: true,
  setBalanceVisible: () => {},
});

export function DefiBalanceProvider({ children }) {
  const [balance, setBalance] = useState('$0.00');
  const [balanceVisible, setBalanceVisible] = useState(true);
  return (
    <DefiBalanceContext.Provider value={{ balance, setBalance, balanceVisible, setBalanceVisible }}>
      {children}
    </DefiBalanceContext.Provider>
  );
}

export function useDefiBalance() {
  const ctx = useContext(DefiBalanceContext);
  return ctx || { balance: '$******', setBalance: () => {}, balanceVisible: true, setBalanceVisible: () => {} };
}
