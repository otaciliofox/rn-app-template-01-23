import { Stack, Center, Text } from "native-base";

import { useNavigation } from "@react-navigation/native";

export function Settings() {
  const navigation = useNavigation();

  const handleNavigation = () => navigation.navigate("Home");

  return (
    <Stack direction={"column"} flex={1} bg={"gray.600"} safeArea>
      <Center flex={1}>
        <Text color={"white"} fontSize={"3xl"}>
          Settings
        </Text>
      </Center>
    </Stack>
  );
}
