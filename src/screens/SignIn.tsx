import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "_components/atoms/Input";
import { Button } from "_components/atoms/Button";

type FormDataProps = {
  name: string;
  password: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation();

  function handleNewAccount() {
    navigation.navigate("sighUp");
  }

  function handleSignIn({ name, password }: FormDataProps) {
    console.log({ name, password });
  }

  return (
    <>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/14713023/pexels-photo-14713023.jpeg",
        }}
        alt="Alternate Text"
        resizeMode="cover"
        position="absolute"
        boxSize={"full"}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} px={10} pb={16}>
          <Center my={24}>
            {/* <LogoSvg /> */}

            <Text color="gray.100" fontSize="sm">
              Treine sua mente e o seu corpo.
            </Text>
          </Center>

          <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
              Acesse a conta
            </Heading>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignIn)}
                  returnKeyType="send"
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
          </Center>

          <Center mt={24}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar Conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </ScrollView>
    </>
  );
}
