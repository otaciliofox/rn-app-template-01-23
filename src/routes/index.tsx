import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme, Box } from "native-base";
import { useState } from "react";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];

  return (
    <Box flex={1} bg={"gray.600"}>
      <NavigationContainer theme={theme}>
        {userLoggedIn ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
