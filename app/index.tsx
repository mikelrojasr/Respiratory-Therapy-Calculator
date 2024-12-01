import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
        <Link href={{ pathname: '/(tabs)/VE', params: { name: 'Dan' } }} asChild>
          <Button title="Minute ventilation - VE(L/x)" />
        </Link>
      </Container>
    </>
  );
}
