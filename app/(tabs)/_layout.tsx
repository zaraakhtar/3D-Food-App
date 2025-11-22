import React from 'react';

import SafeScreen from '@/components/SafeScreen';
import HomeScreen from '.';

export default function TabLayout() {

  return (
    <SafeScreen>
      <HomeScreen />
    </SafeScreen>
  );
}
