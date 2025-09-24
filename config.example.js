// Configuration file for Streamlabs overlay
// Copy this file to config.js and add your actual tokens

const ENV_CONFIG = {
  // Required: Get this from Streamlabs → Settings → API Settings → Socket API Token
  streamlabsSocketToken: "PASTE_YOUR_STREAMLABS_SOCKET_TOKEN_HERE",
  
  // Optional: Only needed if you want real translation instead of fake mode
  streamlabsAccessToken: "PASTE_YOUR_ACCESS_TOKEN_HERE", // If needed for API calls
  
  // Translation API Keys (optional - leave empty to use fake translation)
  googleApiKey: "", // Google Cloud Translate API key
  deeplApiKey: ""   // DeepL API key (format: "xxxxxxxx:fx")
};