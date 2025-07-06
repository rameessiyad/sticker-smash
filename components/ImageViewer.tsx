import { Image } from "expo-image";
import React from "react";
import { ImageSourcePropType } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = {
  image: {
    width: 328,
    height: 448,
    borderRadius: 18,
  },
};
