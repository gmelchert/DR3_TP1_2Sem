import { StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface ImageCardProps {
  source: ImageSourcePropType;
  title?: string;
  description?: string;
  imageStyle?: object;
}

export const ImageCard = ({ source, title, description, imageStyle }: ImageCardProps) => {
  return (
    <Card style={styles.card}>
      <Image source={source} style={[styles.image, imageStyle]} />
      <Card.Content>
        {title && <Card.Title title={title} />}
        {description && <Text variant="bodyMedium">{description}</Text>}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});