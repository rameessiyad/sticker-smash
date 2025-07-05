import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
// import PlaceholderImage from "../../assets/images/background-image.png"
const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Link href="/about" style={styles.button}>
        About Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 328,
    height: 448,
    borderRadius: 18,
  },
});
