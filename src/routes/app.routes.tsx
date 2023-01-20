import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "_screens/Home";
import { Profile } from "_screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
