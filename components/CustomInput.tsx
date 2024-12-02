import { forwardRef } from 'react';
import { TextInput, View, Text } from 'react-native';

import { CustomInputProps } from '~/types';

export const CustomInput = forwardRef<TextInput, CustomInputProps>(
  ({ label, error, placeholder, containerClassName, inputClassName, ...textInputProps }, ref) => {
    return (
      <View className={`mb-2 w-full items-center ${containerClassName}`}>
        {label && <Text className="mb-2 font-semibold text-gray-700">{label}</Text>}
        <TextInput
          {...textInputProps}
          placeholder={placeholder || ''}
          className={`bg-white-10 w-full rounded-lg border p-3 text-gray-800 focus:border-indigo-500 ${inputClassName || ''}`}
        />
      </View>
    );
  }
);
