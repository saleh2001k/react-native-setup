import { ViewStyle, TextStyle, Pressable, ImageStyle } from "react-native"
import { Text } from "@/components/Text"
import { ThemedStyle } from "@/theme"
import { Button, Screen, TextField } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginFormData } from "@/schema/auth.schema"
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated"
import { Image } from "expo-image"
import { useStores } from "@/models/helpers/useStores"
import { CommonActions } from "@react-navigation/native"
import { router, useNavigation } from "expo-router"
export default function Login() {
  const { theme } = useAppTheme()
  const { authenticationStore } = useStores()
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    authenticationStore.setAuthToken(data.email)
    authenticationStore.setAuthEmail(data.email)
    navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "(app)" }] }))
  }

  return (
    <Screen style={$container(theme)} preset="scroll" safeAreaEdges={["top", "bottom"]}>
      <Animated.View entering={FadeIn.delay(200)} style={$logoContainer}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={$logo as ImageStyle}
          contentFit="contain"
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400)} style={$formContainer}>
        <Text TextCenter preset="heading" text="Hi, Welcome Back" style={$title(theme)} />
        <Text
          TextCenter
          preset="subheading"
          text="Enter your credentials to continue"
          style={$subtitle(theme)}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChangeText={onChange}
              label="Email Address"
              placeholder="owner@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              helper={errors.email?.message}
              status={errors.email ? "error" : undefined}
              containerStyle={$inputContainer}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChangeText={onChange}
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
              helper={errors.password?.message}
              status={errors.password ? "error" : undefined}
              containerStyle={$inputContainer}
            />
          )}
        />

        <Controller
          control={control}
          name="rememberMe"
          render={({ field: { onChange, value } }) => (
            <Pressable onPress={() => onChange(!value)} style={$checkboxContainer}>
              <Animated.View
                style={[$checkbox(theme), value && { backgroundColor: theme.colors.tint }]}
              />
              <Text text="Remember Me" style={$checkboxLabel(theme)} />
            </Pressable>
          )}
        />

        <Pressable onPress={() => {}} style={$forgotPassword}>
          <Text text="Forgot Password?" style={[$linkText(theme), { color: theme.colors.tint }]} />
        </Pressable>

        <Button
          text="Sign In"
          onPress={handleSubmit(onSubmit)}
          preset="filled"
          disabled={!control._formValues.email || !control._formValues.password}
        />
      </Animated.View>
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = (theme) => ({
  flex: 1,
  backgroundColor: theme.colors.background,
})

const $logoContainer: ViewStyle = {
  alignItems: "center",
  marginTop: 48,
  marginBottom: 32,
}

const $logo: ViewStyle = {
  width: 200,
  height: 80,
}

const $formContainer: ViewStyle = {
  paddingHorizontal: 24,
  flex: 1,
}

const $title: ThemedStyle<TextStyle> = (theme) => ({
  fontSize: 24,
  fontWeight: "600",
  color: theme.colors.text,
  marginBottom: 8,
  textAlign: "center",
})

const $subtitle: ThemedStyle<TextStyle> = (theme) => ({
  fontSize: 16,
  color: theme.colors.textDim,
  marginBottom: 32,
  textAlign: "center",
})

const $inputContainer: ViewStyle = {
  marginBottom: 16,
}

const $checkboxContainer: ViewStyle = {
  flexDirection: "row",
  marginBottom: 16,
}

const $checkbox: ThemedStyle<ViewStyle> = (theme) => ({
  width: 20,
  height: 20,
  borderRadius: 4,
  borderWidth: 2,
  borderColor: theme.colors.border,
  marginRight: 8,
})

const $checkboxLabel: ThemedStyle<TextStyle> = (theme) => ({
  fontSize: 14,
  color: theme.colors.textDim,
})

const $forgotPassword: ViewStyle = {
  alignItems: "flex-end",
  marginBottom: 24,
}

const $button: ThemedStyle<ViewStyle> = (theme) => ({
  backgroundColor: theme.colors.tint,
  borderRadius: 8,
  paddingVertical: 16,
  alignItems: "center",
  marginBottom: 24,
})

const $buttonText: ThemedStyle<TextStyle> = (theme) => ({
  color: theme.colors.palette.neutral900,
  fontSize: 16,
  fontWeight: "600",
})

const $createAccount: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 24,
}

const $linkText: ThemedStyle<TextStyle> = (theme) => ({
  fontSize: 14,
  color: theme.colors.textDim,
})
