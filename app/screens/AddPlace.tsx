import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PlacesParamList } from "App";

import PlaceForm from "components/places/PlaceForm";

type Props = NativeStackScreenProps<PlacesParamList, "AddPlace">;

const AddPlace: React.FC<Props> = () => {
	return <PlaceForm />;
};

export default AddPlace;

interface Styles {}

const styles = StyleSheet.create<Styles>({});
