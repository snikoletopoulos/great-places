import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
