import {
	Pressable,
	StyleSheet,
	Text,
	TextStyle,
	ViewStyle,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "constants/colors";

interface Props {
	onPress: () => void;
	icon: React.ComponentProps<typeof Ionicons>["name"];
}

const OutlinedButton: React.FC<Props> = props => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={props.onPress}
		>
			<Ionicons
				style={styles.icon}
				name={props.icon}
				size={18}
				color={Colors.primary500}
			/>
			<Text style={styles.text}>{props.children}</Text>
		</Pressable>
	);
};

export default OutlinedButton;

interface Styles {
	button: ViewStyle;
	text: TextStyle;
	icon: TextStyle;
	pressed: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: Colors.primary500,
	},

	pressed: {
		opacity: 0.7,
	},

	icon: {
		marginRight: 6,
	},

	text: {
		color: Colors.primary500,
	},
});
