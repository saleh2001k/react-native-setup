import { Screen, Text, Button } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { View } from "react-native"
import { ThemedStyle } from "@/theme"
import { ViewStyle, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"

export default observer(function Settings() {
  const { themeContext, setThemeContextOverride, themed } = useAppTheme()

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      <View style={themed($containerStyle)}>
        <Text preset="heading" text="Theme Selection" style={themed($headingStyle)} />
        <View style={themed($buttonGridStyle)}>
          <View style={themed($buttonRowStyle)}>
            <Button
              preset={themeContext === "light" ? "filled" : "default"}
              text="Light"
              onPress={() => setThemeContextOverride("light")}
              style={themed($buttonStyle)}
            />
            <Button
              preset={themeContext === "dark" ? "filled" : "default"}
              text="Dark"
              onPress={() => setThemeContextOverride("dark")}
              style={themed($buttonStyle)}
            />
          </View>
          <View style={themed($buttonRowStyle)}>
            <Button
              preset={themeContext === "sepia" ? "filled" : "default"}
              text="Sepia"
              onPress={() => setThemeContextOverride("sepia")}
              style={themed($buttonStyle)}
            />
            <Button
              preset={themeContext === "nightBlue" ? "filled" : "default"}
              text="Night Blue"
              onPress={() => setThemeContextOverride("nightBlue")}
              style={themed($buttonStyle)}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
})

const $containerStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  padding: spacing.md,
})

const $headingStyle: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
})

const $buttonGridStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  gap: spacing.xs,
})

const $buttonRowStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  gap: spacing.xs,
})

const $buttonStyle: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
})
