import { Tabs } from "expo-router"
import { useAppTheme } from "@/utils/useAppTheme"
import { observer } from "mobx-react-lite"
import { Ionicons } from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View, ViewStyle } from "react-native"
import { ThemedStyle } from "@/theme"

export default observer(function TabsLayout() {
  const { theme, themed } = useAppTheme()
  const inset = useSafeAreaInsets()
  return (
    <View style={themed($containerStyle)}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.separator,
            borderTopColor: theme.colors.border,
            elevation: 0,
            height: inset.bottom + 50,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: theme.colors.tint,
          tabBarInactiveTintColor: theme.colors.textDim,
          tabBarLabelStyle: {
            fontFamily: theme.typography.primary.medium,
            fontSize: 12,
          },
          animation: "fade",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  )
})

const $containerStyle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  flex: 1,
})
