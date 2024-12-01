import { TextInputProps, TextProps } from 'react-native';

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
