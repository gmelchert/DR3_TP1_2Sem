import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInput as TextInputPaperNative } from 'react-native-paper';

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  [key: string]: any;
}

export const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  style,
  ...rest
}: TextInputProps) => {
  return (
    <TextInputPaperNative
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[{ margin: 10 }, style]}
      mode="outlined"
      {...rest}
    />
  );
};