import { Image } from "expo-image";
import React from "react";
import { ImageSourcePropType } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = {
  image: {
    width: 328,
    height: 448,
    borderRadius: 18,
  },
};
