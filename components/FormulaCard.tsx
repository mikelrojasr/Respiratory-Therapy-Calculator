import { Link } from 'expo-router';
import { forwardRef } from 'react';
import { View } from 'react-native';

import { Button } from '~/components/Button';
import { FormulaCardProps } from '~/types';

export const FormulaCard = forwardRef<View, FormulaCardProps>(
  ({ path, label, name, containerClassName }, ref) => {
    return (
      <View className={`mb-2 w-full items-center ${containerClassName || ''}`}>
        <Link href={{ pathname: path, params: { name } }} asChild>
          <Button title={label} />
        </Link>
      </View>
    );
  }
);
