import { Screen, Text, Button, TextField } from "@/components"
import { View, StyleSheet } from "react-native"

export default function CompleteExample() {
  return (
    <Screen
      // Preset can be "fixed", "scroll", or "auto"
      preset="scroll"
      // Control which edges get safe area insets
      safeAreaEdges={["top"]}
      // Control status bar appearance
      statusBarStyle="dark"
      // Keyboard offset when keyboard appears
      keyboardOffset={24}
      // Bottom offset for keyboard aware scroll
      keyboardBottomOffset={50}
      // How keyboard tap behavior works
      keyboardShouldPersistTaps="handled"
      // Style for outer container
      style={styles.screenContainer}
      // Style for inner content container
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>

      {/* Form Section */}
      <View style={styles.form}>
        <TextField label="Email" placeholder="Enter your email" style={styles.input} />

        <TextField
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
        />

        <Button text="Sign In" onPress={() => {}} style={styles.button} />
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.contentText}>
          This is an example of a scrollable screen with multiple sections. The Screen component
          will handle: • Safe area insets • Keyboard behavior • Scrolling (when needed) • Status bar
          appearance
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer content that stays at the bottom</Text>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
  },
  content: {
    flex: 1,
    marginVertical: 24,
  },
  contentText: {
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
  },
})
