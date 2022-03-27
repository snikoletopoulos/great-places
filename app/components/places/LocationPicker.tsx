import { useState } from "react";
import { StyleSheet, View, ViewStyle, Alert } from "react-native";

import { Colors } from "constants/colors";
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
  LocationObject,
} from "expo-location";

import OutlinedButton from "components/ui/OutlinedButton";

const LocationPicker: React.FC = props => {
	const [location, setLocation] = useState<LocationObject>();

	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	const verifyPermission = async () => {
		if (
			locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission();

			return permissionResponse.granted;
		}

		if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Insufficient permissions!",
				"Please enable camera permissions"
			);
			return false;
		}

		return true;
	};

	const handleGetLocation = async () => {
		const hasPermission = await verifyPermission();

		if (!hasPermission) {
			return;
		}

		const location = await getCurrentPositionAsync();
    setLocation(location);
	};

	const handlePickOnMap = () => {

  };

	return (
		<View>
			<View style={styles.mapPreview}></View>
			<View style={styles.actions}>
				<OutlinedButton icon="location" onPress={handleGetLocation}>
					Locate User
				</OutlinedButton>
				<OutlinedButton icon="map" onPress={handlePickOnMap}>
					Pick on Map
				</OutlinedButton>
			</View>
		</View>
	);
};

export default LocationPicker;

interface Styles {
	mapPreview: ViewStyle;
	actions: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	mapPreview: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary100,
		borderRadius: 4,
	},

	actions: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
