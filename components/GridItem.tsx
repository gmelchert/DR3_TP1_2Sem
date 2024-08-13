import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface GridItemProps {
  title: string;
  description: string;
}

export const GridItem = ({ title, description }: GridItemProps) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium">{title}</Text>
        <Text variant="bodyMedium">{description}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: '100%',
  },
});