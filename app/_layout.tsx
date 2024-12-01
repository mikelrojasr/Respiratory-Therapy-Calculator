import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="(tabs)/details" options={{ title: 'Details' }} />
      <Stack.Screen name="(tabs)/VE" options={{ title: 'Minute Ventilation' }} />
    </Stack>
  );
}
