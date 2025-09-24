// Demo script for testing the overlay functionality
// Run this in the browser console when viewing paid-chat.html

function runDemo() {
  console.log('🎬 Starting Streamlabs Overlay Demo...');
  
  const demoEvents = [
    {
      type: 'donation',
      message: [{
        type: 'donation',
        from: 'DemoUser',
        message: 'This is a test donation message!',
        amount: 5,
        currency: 'USD',
        avatar: 'https://via.placeholder.com/40/7c5cff/ffffff?text=D'
      }]
    },
    {
      type: 'superchat',
      message: [{
        type: 'superchat',
        name: 'YouTubeFan',
        comment: 'Amazing content, keep it up!',
        amount: 10,
        currency: 'USD',
        profileImageUrl: 'https://via.placeholder.com/40/ef4444/ffffff?text=Y'
      }]
    },
    {
      type: 'bits',
      message: [{
        type: 'bits',
        name: 'TwitchViewer',
        message: 'Cheer500 Great stream!',
        amount: 500,
        profileImageUrl: 'https://via.placeholder.com/40/9333ea/ffffff?text=T'
      }]
    },
    {
      type: 'hype_chat',
      message: [{
        type: 'hype_chat',
        name: 'HypedFan',
        message: 'This stream is incredible! 🔥',
        amount: 3,
        currency: 'USD',
        profileImageUrl: 'https://via.placeholder.com/40/06b6d4/ffffff?text=H'
      }]
    }
  ];

  // Send events with delays to show animation
  demoEvents.forEach((event, index) => {
    setTimeout(() => {
      console.log(`Sending demo event ${index + 1}:`, event.type);
      if (window.handleTestEvent) {
        window.handleTestEvent(event);
      } else {
        console.error('handleTestEvent function not found. Make sure the overlay is loaded.');
      }
    }, index * 2000); // 2 second delays
  });

  console.log('Demo events scheduled. Watch the overlay!');
}

function clearDemo() {
  if (window.clearAllMessages) {
    window.clearAllMessages();
    console.log('Demo messages cleared.');
  } else {
    console.error('clearAllMessages function not found.');
  }
}

function testTranslation() {
  const testMessages = [
    'Hello world, this is a test!',
    'Thank you for the donation!',
    'Amazing stream, keep it up!',
    'This is a longer message to test how the translation system handles more complex text with multiple sentences.',
    'こんにちは！素晴らしい配信ですね！' // Japanese
  ];

  testMessages.forEach((message, index) => {
    setTimeout(() => {
      const event = {
        type: 'donation',
        message: [{
          type: 'donation',
          from: `TestUser${index + 1}`,
          message: message,
          amount: Math.floor(Math.random() * 50) + 1,
          currency: 'USD',
          avatar: `https://via.placeholder.com/40/7c5cff/ffffff?text=${index + 1}`
        }]
      };
      
      if (window.handleTestEvent) {
        window.handleTestEvent(event);
      }
    }, index * 1500);
  });

  console.log('Translation test started with 5 different messages.');
}

// Make functions available globally
window.runDemo = runDemo;
window.clearDemo = clearDemo;
window.testTranslation = testTranslation;

console.log('Demo functions loaded! Available commands:');
console.log('- runDemo() - Run a full demo with different event types');
console.log('- testTranslation() - Test translation with various messages');
console.log('- clearDemo() - Clear all messages from overlay');