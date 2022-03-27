import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "screens/AllPlaces";
import AddPlace from "screens/AddPlace";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="AllPlaces">
					<Stack.Screen name="AllPlaces" component={AllPlaces} />
					<Stack.Screen name="AddPlace" component={AddPlace} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
