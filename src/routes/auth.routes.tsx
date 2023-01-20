import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "_screens/SignIn";
import { SignUp } from "_screens/SignUp";
import { Home } from "_screens/Home";
import { Settings } from "_screens/Settings";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="sighIn">
      <Screen name="home" component={Home} />
      <Screen name="setting" component={Settings} />
      <Screen name="sighIn" component={SignIn} />
      <Screen name="sighUp" component={SignUp} />
    </Navigator>
  );
}
