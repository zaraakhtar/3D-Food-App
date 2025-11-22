import React from 'react';

import SafeScreen from '@/components/SafeScreen';
import { useColorScheme } from '@/hooks/use-color-scheme';
import HomeScreen from '.';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeScreen>
      <HomeScreen />
    </SafeScreen>
  );
}
