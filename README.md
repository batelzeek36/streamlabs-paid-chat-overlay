# Streamlabs Paid Chat Overlay

A sleek, translating overlay for Streamlabs that displays only paid chat messages (donations, super chats, bits, etc.) with automatic translation to random languages.

## Features

- 🎯 **Paid-only messages**: Shows only donations, YouTube Super Chat/Stickers, Twitch Hype Chat, and Bits
- 🌍 **Auto-translation**: Translates each message to a random non-English language
- 🎨 **Sleek design**: Modern, transparent overlay with smooth animations
- 📱 **Multi-platform**: Supports YouTube, Twitch, Kick, and Streamlabs donations
- 🔤 **RTL support**: Handles right-to-left languages (Arabic, Hebrew)
- ⚡ **Quick setup**: 2-minute configuration

## Quick Setup

### 1. Get Your Streamlabs Token
1. Go to Streamlabs Dashboard → Settings → API Settings
2. Copy your **Socket API Token**

### 2. Configure the Overlay
1. Copy `config.example.js` to `config.js`
2. Add your Streamlabs Socket Token to `config.js`
3. Optionally configure translation services (Google Translate, DeepL, or LibreTranslate)

### 3. Add to Streamlabs Desktop
1. In Streamlabs Desktop: **Sources** → **+** → **Browser Source**
2. Choose **Local file** and select `paid-chat.html`
3. Set your desired width/height (background stays transparent)

## Configuration

### Basic Settings
Edit `config.js` to customize:

```javascript
const ENV_CONFIG = {
  streamlabsSocketToken: "YOUR_TOKEN_HERE",
  // Optional translation API keys
  googleApiKey: "",
  deeplApiKey: ""
};
```

### Advanced Options
In `paid-chat.html`, you can modify:

- `maxTiles`: Maximum messages on screen (default: 8)
- `includeBits`: Show Twitch Bits (default: true)
- `minBits`: Minimum bits threshold (default: 1)
- `includeYouTube`: Show YouTube Super Chat/Stickers
- `includeHypeChat`: Show Twitch Hype Chat
- `includeDonations`: Show donations
- Translation mode: `"fake"`, `"google"`, `"deepl"`, or `"libre"`

### Styling
Customize colors in the CSS `:root` section:
- `--accent`: Border accent color
- `--good`: Payment tier colors
- `--warn`: Warning colors
- `--danger`: High-tier colors

## Translation Services

### Fake Mode (Default)
No API required - creates "fake" translations by adding accents to characters.

### Google Translate
1. Get a Google Cloud Translate API key
2. Set `googleApiKey` in `config.js`
3. Change `translation.mode` to `"google"`

### DeepL
1. Get a DeepL API key
2. Set `deeplApiKey` in `config.js`
3. Change `translation.mode` to `"deepl"`

### LibreTranslate
1. Use public endpoint or host your own
2. Change `translation.mode` to `"libre"`
3. Optionally set custom `libreEndpoint`

## Supported Languages

The overlay supports 20+ languages including:
- European: Spanish, French, German, Italian, Portuguese, Dutch, Swedish, Polish
- Slavic: Russian, Ukrainian
- Middle Eastern: Arabic (RTL), Hebrew (RTL)
- Asian: Japanese, Korean, Chinese, Hindi, Thai, Vietnamese
- Other: Turkish, Greek, Indonesian

## File Structure

```
streamlabs-paid-chat-overlay/
├── paid-chat.html          # Main overlay file
├── config.js              # Configuration (create from example)
├── config.example.js       # Example configuration
├── .env                   # Environment variables (optional)
├── .gitignore            # Git ignore file
├── README.md             # This file
└── info.txt              # Original setup instructions
```

## Security

- Never commit your actual tokens to version control
- The `.env` and `config.js` files are ignored by git
- Use the example config as a template

## Troubleshooting

### "Missing Streamlabs Socket token" error
- Check that your token is correctly set in `config.js`
- Ensure the token is from Streamlabs → Settings → API Settings → Socket API Token

### No messages appearing
- Verify your token is correct
- Check that you have the right event types enabled
- Test with a small donation/bits to verify connection

### Translation not working
- For real translation, ensure you have valid API keys
- Check your translation service quotas/limits
- Fake mode works without any API keys

## License

MIT License - feel free to modify and use for your streams!

## Contributing

Pull requests welcome! Please ensure any changes maintain the clean, minimal design aesthetic.