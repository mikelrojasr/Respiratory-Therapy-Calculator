import { forwardRef } from 'react';
import { Text, View } from 'react-native';

import { TitleProps } from '~/types';

export const Title = forwardRef<Text, TitleProps>(
  ({ text, containerClassName, textClassName }, ref) => {
    return (
      <View className={`mb-2 w-full items-center ${containerClassName || ''}`}>
        <Text className={`mb-2 text-2xl font-bold text-gray-700 ${textClassName || ''}`}>
          {text}
        </Text>
      </View>
    );
  }
);
