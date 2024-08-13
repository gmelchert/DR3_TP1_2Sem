import { ComponentProps } from 'react';
import { Button as ButtonPaper } from 'react-native-paper';

interface ButtonProps {
    title: string;
    onPress: () => void;
    mode?: 'contained' | 'outlined' | 'text';
    icon?: ComponentProps<typeof ButtonPaper>['icon'];
}

export const Button = ({
    title,
    onPress,
    mode = 'contained',
    icon
}: ButtonProps) => {
  return (
    <ButtonPaper
      mode={mode}
      onPress={onPress}
      icon={icon}
      style={{ margin: 10 }}
      contentStyle={{ paddingVertical: 5 }}
    >
      {title}
    </ButtonPaper>
  );
};