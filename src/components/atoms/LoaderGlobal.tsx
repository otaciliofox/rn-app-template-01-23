import { Spinner, Center } from "native-base";

export function LoaderGlobal() {
  return (
    <Center flex={1} bg={"gray.600"}>
      <Spinner />;
    </Center>
  );
}
