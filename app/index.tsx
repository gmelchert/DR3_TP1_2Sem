import { useState } from "react";
import { View } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';

import { Button } from "@/components/Button";
import { TextInput } from "@/components/Input";
import { Grid } from "@/components/Grid";
import { GridItem } from "@/components/GridItem";
import { ImageCard } from "@/components/ImageCard";

export default function Index() {
  const items = [
    { title: 'Item 1', description: 'Descrição do item 1' },
    { title: 'Item 2', description: 'Descrição do item 2' },
    { title: 'Item 3', description: 'Descrição do item 3' },
    { title: 'Item 4', description: 'Descrição do item 4' },
  ];

  const [text, setText] = useState('');

  const handleTextChange = (inputText: string) => {
    setText(inputText);
  };

  const handleOnPress = () => {
    console.log('Clicou!')
  }

  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          title="Press me"
          onPress={handleOnPress}
        />

        <TextInput
          label="Digite algo"
          value={text}
          onChangeText={handleTextChange}
          placeholder="Exemplo: Olá mundo"
        />

        <ImageCard
          source={{ uri: 'https://t3.ftcdn.net/jpg/02/24/50/42/360_F_224504284_sRlyr6RNiMWrAggjMZHYRNa2slKNGqSy.jpg' }}
          title="Título da Imagem"
          description="Descrição da imagem."
        />

        <Grid
          numColumns={2}
          spacing={10}
          items={items.map((item, index) => (
            <GridItem key={index} title={item.title} description={item.description} />
          ))}
        />
      </View>
    </PaperProvider>
  );
}
