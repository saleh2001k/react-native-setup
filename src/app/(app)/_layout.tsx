import { Stack } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { View, Text } from "react-native"
import { Screen } from "@/components"

export default function AppLayout() {
  return (
    <Drawer drawerContent={() => <DrawerContent />} screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
    </Drawer>
  )
}

function DrawerContent() {
  return (
    <Screen preset="fixed" safeAreaEdges={["top", "bottom"]}>
      <View>
        <Text>Drawer Content</Text>
      </View>
    </Screen>
  )
}
