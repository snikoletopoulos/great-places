import {
	FlatList,
	StyleSheet,
	View,
	Text,
	ViewStyle,
	TextStyle,
} from "react-native";

import Place from "models/Place";

import PlaceItem from "components/places/PlaceItem";

interface Props {
	places: Place[];
}

const PlacesList: React.FC<Props> = props => {
	if (!props.places.length) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No places added yet - start adding some!
				</Text>
			</View>
		);
	}

	return (
		<FlatList
			keyExtractor={place => place.id}
			data={props.places}
			renderItem={itemData => <PlaceItem place={itemData.item} />}
		/>
	);
};

export default PlacesList;

interface Styles {
	fallbackContainer: ViewStyle;
	fallbackText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	fallbackText: {
		fontSize: 16,
	},
});
