import { StatusBar } from 'expo-status-bar';
import {ScrollView , StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

<View style={{ flex: 1 }}></View>

<ScrollView style={styles.child}>
<Text>Hello world in this year</Text>
<Text>Hello world in this year</Text>
<Text>Hello world in this year</Text>
<Text>Hello world in this year</Text>
</ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#195dc5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    // marginTop: 100,
    height: "60%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
  }
});
