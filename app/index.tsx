import { Stack, Link, RelativePathString } from 'expo-router';

import { Container } from '~/components/Container';
import { FormulaCard } from '~/components/FormulaCard';
import { FormulaCardProps } from '~/types';

export default function Home() {
  const formulas: FormulaCardProps[] = [
    {
      path: '/(tabs)/VE' as RelativePathString,
      name: 'Minute ventilation',
      label: 'Minute ventilation - VE(L/x)',
    },
  ];
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Container>
        {formulas.map((formula, index) => (
          <FormulaCard key={index} path={formula.path} label={formula.label} name={formula.name} />
        ))}
      </Container>
    </>
  );
}
