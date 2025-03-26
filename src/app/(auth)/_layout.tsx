import { Stack } from "expo-router"
import { View } from "react-native"
export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen name="reset-password" options={{ headerShown: false }} />
        <Stack.Screen name="verify-email-otp" options={{ headerShown: false }} />
      </Stack>
    </View>
  )
}
