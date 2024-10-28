import { Text, View, Image } from "react-native";
import styles from "./styles"; 
import ousdc_logo from "../assets/images/OUSDC_Logo_Trans.png"; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={ousdc_logo} style={styles.logo} />
      <Text style={styles.header}>Ohio University</Text>
      <Text style={styles.subHeader}>Software Development Club</Text>
      <Text style={styles.description}>
        Empowering students to develop skills in software development, problem-solving, and teamwork.
      </Text>
    </View>
  );
}
