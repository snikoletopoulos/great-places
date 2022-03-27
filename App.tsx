import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "screens/AllPlaces";
import AddPlace from "screens/AddPlace";
import IconButton from "components/ui/IconButton";
import { Colors } from "constants/colors";

export type PlacesParamList = {
	AllPlaces: undefined;
	AddPlace: undefined;
};

const Stack = createNativeStackNavigator<PlacesParamList>();

const App: React.FC = () => {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="AllPlaces"
					screenOptions={{
						headerStyle: {
							backgroundColor: Colors.primary500,
						},
						headerTintColor: Colors.gray700,
						contentStyle: { backgroundColor: Colors.gray700 },
					}}
				>
					<Stack.Screen
						name="AllPlaces"
						component={AllPlaces}
						options={({ navigation }) => ({
							title: "Your Favorite Places",
							headerRight: ({ tintColor }) => (
								<IconButton
									icon="add"
									size={24}
									color={tintColor ?? ""}
									onPress={() => navigation.navigate("AddPlace")}
								/>
							),
						})}
					/>
					<Stack.Screen
						name="AddPlace"
						component={AddPlace}
						options={{
							title: "Add a new place",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
