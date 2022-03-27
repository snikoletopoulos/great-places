import { Colors } from "constants/colors";
import { useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TextStyle,
	View,
	ViewStyle,
} from "react-native";

import ImagePicker from "components/places/ImagePicker";
import LocationPicker from "components/places/LocationPicker";

const PlaceForm: React.FC = () => {
	const [title, setTitle] = useState("");

	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput style={styles.input} value={title} onChangeText={setTitle} />
			</View>
			<ImagePicker />
			<LocationPicker />
		</ScrollView>
	);
};

export default PlaceForm;

interface Styles {
	form: ViewStyle;
	label: TextStyle;
	input: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	form: {
		flex: 1,
		padding: 24,
	},

	label: {
		fontWeight: "bold",
		marginBottom: 4,
		color: Colors.primary500,
	},

	input: {
		marginVertical: 8,
		paddingVertical: 8,
		fontSize: 16,
		borderBottomWidth: 1,
		borderBottomColor: Colors.primary700,
		backgroundColor: Colors.primary100,
	},
});
