import { View, StyleSheet, ViewStyle } from 'react-native';

interface GridProps {
  numColumns: number;
  spacing: number;
  items: React.ReactNode[];
  style?: ViewStyle;
}

export const Grid = ({
    numColumns,
    spacing,
    items,
    style,
}: GridProps) => {
  const containerStyle = {
    ...styles.container,
    margin: -spacing / 2,
    ...style,
  };

  const itemStyle = {
    ...styles.item,
    width: `${100 / numColumns}%`,
    padding: spacing / 2,
  };

  return (
    <View style={containerStyle}>
      {items.map((item, index) => (
        <View key={index} style={itemStyle}>
          {item}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});