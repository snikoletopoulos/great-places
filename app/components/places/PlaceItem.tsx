import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	ViewStyle,
	ImageStyle,
} from "react-native";

import Place from "models/Place";

interface Props {
	place: Place;
	onSelect: () => void;
}

const PlaceItem: React.FC<Props> = ({ place, onSelect }) => {
	return (
		<Pressable onPress={onSelect}>
			<Image source={{ uri: place.imageUri }} />
			<View>
				<Text>{place.title}</Text>
				<Text>{place.address}</Text>
			</View>
		</Pressable>
	);
};

export default PlaceItem;

interface Styles {
	container: ViewStyle;
	image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
	container: {},

	image: {},
});
