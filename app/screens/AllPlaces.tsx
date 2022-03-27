import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PlacesParamList } from "App";

import PlacesList from "components/places/PlacesList";

type Props = NativeStackScreenProps<PlacesParamList, "AllPlaces">;

const AllPlaces: React.FC<Props> = () => {
	return <PlacesList places={[]} />;
};

export default AllPlaces;
