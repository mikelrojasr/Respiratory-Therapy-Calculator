import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';

import { Title } from '~/components/Title';

export function ResultVE({ vt, fr }: { vt: string; fr: string }) {
  if (!vt || !fr) {
    return <Text>Invalid input: Please provide VT and FR values.</Text>;
  }

  const vtConvert = parseFloat(vt);
  const frConvert = parseFloat(fr);

  if (isNaN(vtConvert) || isNaN(frConvert)) {
    return <Text>Invalid input: Please provide valid numbers for VT and FR.</Text>;
  }

  const result = vtConvert * frConvert;
  const state = result < 6 ? 'low' : result > 10 ? 'high' : 'normal';
  const color =
    state === 'low' ? 'text-blue-700' : state === 'high' ? 'text-red-700' : 'text-green-700';

  return (
    <View className="mb-2 w-full items-center">
      <Title text="Results" />
      <Text className="mb-2 font-bold text-gray-700">Formula:</Text>
      <MathJaxSvg fontSize={16} color="black" fontCache>
        $$VE = VT \cdot FR$$
      </MathJaxSvg>
      <Text className="mb-2 mt-2 font-bold text-gray-700">Normal: 6 - 10</Text>
      <Text className={`mb-2 mt-2 font-bold ${color}`}>
        Result: {result} is {state}
      </Text>
    </View>
  );
}
