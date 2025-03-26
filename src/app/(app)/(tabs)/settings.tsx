import { Screen, Text, Button } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { View } from "react-native"
import { ThemedStyle, ThemeContexts } from "@/theme"
import { ViewStyle, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import switchTheme from "react-native-theme-switch-animation"
import i18n from "i18next"
import RNRestart from "react-native-restart"
import { I18nManager } from "react-native"
import { useStores } from "@/models"

type SupportedLanguage = "en" | "ar" | "es" | "fr"

export default observer(function Settings() {
  const { themeContext, setThemeContextOverride, themed } = useAppTheme()
  const { languageStore, authenticationStore } = useStores()

  const handleThemeChange = (newTheme: ThemeContexts) => {
    switchTheme({
      switchThemeFunction: () => {
        setThemeContextOverride(newTheme)
      },
      animationConfig: {
        type: "circular",
        duration: 300,
        startingPoint: {
          cxRatio: 0.5,
          cyRatio: 0.5,
        },
      },
    })
  }

  const handleLanguageChange = (language: SupportedLanguage) => {
    const isRTL = language === "ar"
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.allowRTL(isRTL)
      I18nManager.forceRTL(isRTL)
      RNRestart.Restart()
    }
    languageStore.setSelectedLanguage(language)
    i18n.changeLanguage(language)
  }

  const handleLogout = () => {
    authenticationStore.logout()
  }

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      <View style={themed($containerStyle)}>
        <Text preset="heading" tx="settings:themeSelection" style={themed($headingStyle)} />
        <View style={themed($buttonGridStyle)}>
          <View style={themed($buttonRowStyle)}>
            <Button
              preset={themeContext === "light" ? "filled" : "default"}
              tx="settings:themes.light"
              onPress={() => handleThemeChange("light")}
              style={themed($buttonStyle)}
            />
            <Button
              preset={themeContext === "dark" ? "filled" : "default"}
              tx="settings:themes.dark"
              onPress={() => handleThemeChange("dark")}
              style={themed($buttonStyle)}
            />
          </View>
          <View style={themed($buttonRowStyle)}>
            <Button
              preset={themeContext === "sepia" ? "filled" : "default"}
              tx="settings:themes.sepia"
              onPress={() => handleThemeChange("sepia")}
              style={themed($buttonStyle)}
            />
            <Button
              preset={themeContext === "nightBlue" ? "filled" : "default"}
              tx="settings:themes.nightBlue"
              onPress={() => handleThemeChange("nightBlue")}
              style={themed($buttonStyle)}
            />
          </View>
        </View>

        <Text preset="heading" tx="settings:languageSelection" style={themed($headingStyle)} />
        <View style={themed($buttonGridStyle)}>
          <View style={themed($buttonRowStyle)}>
            <Button
              preset={languageStore.selectedLanguage === "en" ? "filled" : "default"}
              tx="settings:languages.en"
              onPress={() => handleLanguageChange("en")}
              style={themed($buttonStyle)}
            />
            <Button
              preset={languageStore.selectedLanguage === "ar" ? "filled" : "default"}
              tx="settings:languages.ar"
              onPress={() => handleLanguageChange("ar")}
              style={themed($buttonStyle)}
            />
          </View>
          <View style={themed($buttonRowStyle)}>
            <Button
              preset={languageStore.selectedLanguage === "es" ? "filled" : "default"}
              tx="settings:languages.es"
              onPress={() => handleLanguageChange("es")}
              style={themed($buttonStyle)}
            />
            <Button
              preset={languageStore.selectedLanguage === "fr" ? "filled" : "default"}
              tx="settings:languages.fr"
              onPress={() => handleLanguageChange("fr")}
              style={themed($buttonStyle)}
            />
          </View>
        </View>
        <Button preset="filled" tx="settings:logout" onPress={handleLogout} />
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
  marginBottom: spacing.md,
})

const $buttonRowStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  gap: spacing.xs,
})

const $buttonStyle: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
})
