// Import Unistyles before expo-router
import "./src/unistyles";

// Point to the app directory in src
process.env.EXPO_ROUTER_APP_ROOT = "./src/app";

// Import expo-router entry after setting the app root
import "expo-router/entry";
