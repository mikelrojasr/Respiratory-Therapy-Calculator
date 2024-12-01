import { Stack, Link, useRouter } from "expo-router";
import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';


import { ResultVE } from '~/Calculations';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { CustomInput } from '~/components/CustomInput';
import { Title } from '~/components/Title';

export default function VE() {
  const [vt, setVt] = useState<string>('0');
  const [fr, setFr] = useState<string>('0');
  const [consult, setConsult] = useState<boolean>(false);
  const router = useRouter();

  const handleOnChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const newValue = e.nativeEvent.text;
      setter(newValue);
    };

  const calculate = () => {
    setConsult(true);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Minute ventilation', headerShown: false }} />
      <View style={{ position: 'absolute', top: 10, left: 10 }}>
        <Button title="Back" onPress={() => router.push('/')} />
      </View>
      <Container>
        <Title text="Minute ventilation" />
        <CustomInput
          label="Tidal volume (VT):"
          keyboardType="numeric"
          value={vt}
          onChange={handleOnChange(setVt)}
        />
        <CustomInput
          label="Respiratory rate (FR):"
          keyboardType="numeric"
          value={fr}
          onChange={handleOnChange(setFr)}
        />
        <View className="mb-4 mt-2 w-full items-center">
          <Button title="Calculate" onPress={calculate} />
        </View>

        {consult && <ResultVE vt={vt || '0'} fr={fr || '0'} />}
      </Container>
    </>
  );
}
