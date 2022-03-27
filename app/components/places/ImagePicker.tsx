import { useState } from "react";
import {
	StyleSheet,
	Alert,
	View,
	Text,
	Image,
	ViewStyle,
	ImageStyle,
} from "react-native";

import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
	ImagePickerResult,
} from "expo-image-picker";
import { Colors } from "constants/colors";

import OutlinedButton from "components/ui/OutlinedButton";

const ImagePicker: React.FC = () => {
	const [pickedImage, setPickedImage] = useState<ImagePickerResult>();

	const [cameraPermissionInfomation, requestPermission] =
		useCameraPermissions();

	const verifyPermission = async () => {
		if (cameraPermissionInfomation?.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();

			return permissionResponse.granted;
		}

		if (cameraPermissionInfomation?.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Insufficient permissions!",
				"Please enable camera permissions"
			);
			return false;
		}

		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermission();

		if (!hasPermission) {
			return;
		}

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		});

		setPickedImage(image);
	};

	return (
		<View>
			<View style={styles.imagePreview}>
				{pickedImage && pickedImage.cancelled === false ? (
					<Image style={styles.image} source={{ uri: pickedImage.uri }} />
				) : (
					<Text>No image taken yet.</Text>
				)}
			</View>
			<OutlinedButton icon="camera" onPress={takeImageHandler}>
				Take image
			</OutlinedButton>
		</View>
	);
};

export default ImagePicker;

interface Styles {
	imagePreview: ViewStyle;
	image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
	imagePreview: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary100,
		borderRadius: 4,
	},

	image: {
		width: "100%",
		height: "100%",
		borderRadius: 4,
	},
});
