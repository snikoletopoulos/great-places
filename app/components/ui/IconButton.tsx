import { StyleSheet, Pressable, ViewStyle } from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {
	icon: React.ComponentProps<typeof Ionicons>["name"];
	size: number;
	color: string;
	onPress: () => void;
}

const IconButton: React.FC<Props> = props => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={props.onPress}
		>
			<Ionicons name={props.icon} size={props.size} color={props.color} />
		</Pressable>
	);
};

export default IconButton;

interface Styles {
	button: ViewStyle;
	pressed: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	button: {
		padding: 8,
		justifyContent: "center",
		alignItems: "center",
	},

	pressed: {
		opacity: 0.7,
	},
});
