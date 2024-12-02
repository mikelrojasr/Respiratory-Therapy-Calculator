import { TextInputProps, TextProps } from 'react-native';
import { ExternalPathString, RelativePathString } from "expo-router";

export type CustomInputProps = {
  label?: string;
  error?: string;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
} & TextInputProps;

export type TitleProps = {
  text: string;
  containerClassName?: string;
  textClassName?: string;
} & TextProps;

export type FormulaCardProps = {
  path: RelativePathString | ExternalPathString;
  label: string;
  name: string | number;
  containerClassName?: string;
};
