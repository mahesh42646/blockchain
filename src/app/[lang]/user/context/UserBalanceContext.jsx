'use client';

import { createContext, useContext, useState } from 'react';

const UserBalanceContext = createContext({
  balance: '$******',
  setBalance: () => {},
  balanceVisible: true,
  setBalanceVisible: () => {},
});

export function UserBalanceProvider({ children }) {
  const [balance, setBalance] = useState('$0.00');
  const [balanceVisible, setBalanceVisible] = useState(true);
  return (
    <UserBalanceContext.Provider value={{ balance, setBalance, balanceVisible, setBalanceVisible }}>
      {children}
    </UserBalanceContext.Provider>
  );
}

export function useUserBalance() {
  const ctx = useContext(UserBalanceContext);
  return ctx || { balance: '$******', setBalance: () => {}, balanceVisible: true, setBalanceVisible: () => {} };
}
