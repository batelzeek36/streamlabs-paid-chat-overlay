# Testing the Streamlabs Overlay

This guide shows you how to test the overlay functionality without needing real donations or Streamlabs setup.

## Quick Test Methods

### Method 1: Interactive Test Page (Recommended)
1. Open `test-overlay.html` in your browser
2. Click the buttons to simulate different types of paid events
3. Watch the overlay respond in real-time

### Method 2: Browser Console Demo
1. Open `paid-chat-test.html` in your browser
2. Open browser developer tools (F12)
3. In the console, run:
   ```javascript
   runDemo()        // Run full demo
   testTranslation() // Test translation features
   clearDemo()      // Clear all messages
   ```

### Method 3: Manual Testing
1. Open `paid-chat-test.html` in your browser
2. In the console, manually trigger events:
   ```javascript
   // Test a donation
   handleTestEvent({
     type: 'donation',
     message: [{
       type: 'donation',
       from: 'TestUser',
       message: 'Test message!',
       amount: 10,
       currency: 'USD'
     }]
   });
   ```

## Test Features

### Event Types You Can Test
- **Donations**: PayPal/Credit card donations via Streamlabs
- **YouTube Super Chat**: Paid messages on YouTube streams
- **Twitch Bits**: Twitch's virtual currency for support
- **Twitch Hype Chat**: Paid pinned messages on Twitch

### Translation Testing
The overlay automatically translates messages to random languages:
- **Fake Mode** (default): Adds accents to characters (no API needed)
- **Real Translation**: Configure Google Translate or DeepL API keys

### Visual Features to Test
- **Animations**: Smooth slide-in animations for new messages
- **Tiers**: Different colors for different donation amounts
- **RTL Support**: Right-to-left text for Arabic/Hebrew
- **Font Loading**: Proper display of international characters
- **Message Limiting**: Only shows the latest 8 messages (configurable)

## Test Scenarios

### Basic Functionality
```javascript
// Small donation
handleTestEvent({
  type: 'donation',
  message: [{ type: 'donation', from: 'User1', message: 'Thanks!', amount: 5, currency: 'USD' }]
});

// Large donation (different tier)
handleTestEvent({
  type: 'donation', 
  message: [{ type: 'donation', from: 'BigDonor', message: 'Amazing!', amount: 50, currency: 'USD' }]
});
```

### Stress Testing
```javascript
// Test message overflow (should limit to 8 messages)
for(let i = 0; i < 15; i++) {
  setTimeout(() => {
    handleTestEvent({
      type: 'donation',
      message: [{ type: 'donation', from: `User${i}`, message: `Message ${i}`, amount: 2, currency: 'USD' }]
    });
  }, i * 200);
}
```

### International Testing
```javascript
// Test with different languages
const messages = [
  'Hello world!',
  'こんにちは世界！', // Japanese
  '안녕하세요!',      // Korean
  'مرحبا بالعالم!',   // Arabic (RTL)
  'Привет мир!',     // Russian
  '你好世界！'        // Chinese
];

messages.forEach((msg, i) => {
  setTimeout(() => {
    handleTestEvent({
      type: 'donation',
      message: [{ type: 'donation', from: `User${i}`, message: msg, amount: 5, currency: 'USD' }]
    });
  }, i * 1000);
});
```

## Files for Testing

- `test-overlay.html` - Interactive test interface
- `paid-chat-test.html` - Test version of overlay (uses test config)
- `config-test.js` - Test configuration (no real tokens needed)
- `demo.js` - Demo functions for console testing
- `TESTING.md` - This file

## Troubleshooting Tests

### "handleTestEvent is not defined"
- Make sure you're using `paid-chat-test.html` or the overlay has fully loaded
- Check browser console for JavaScript errors

### Messages not appearing
- Check that the test event structure matches the expected format
- Verify the overlay container is visible
- Look for console errors

### Translation not working
- Fake translation should always work (adds accents)
- For real translation, check API keys in `config-test.js`
- Verify network connectivity for API calls

### Styling issues
- Check browser compatibility (modern browsers recommended)
- Verify CSS is loading properly
- Test in different screen sizes

## Performance Testing

Test with rapid-fire events to ensure smooth performance:
```javascript
// Rapid event test
for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    handleTestEvent({
      type: 'donation',
      message: [{ type: 'donation', from: `Speed${i}`, message: `Fast ${i}`, amount: 1, currency: 'USD' }]
    });
  }, i * 100); // Very fast - 100ms intervals
}
```

The overlay should handle this gracefully and maintain the message limit.