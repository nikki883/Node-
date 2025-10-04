// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create an instance (object) of EventEmitter
const customEmitter = new EventEmitter(); 

// EventEmitter mainly works with two methods:
// 1. on()   → used to listen (subscribe) to an event
// 2. emit() → used to trigger (publish) that event

// Note: The event name passed in .on() and .emit() must be the same,
// otherwise the listener won’t respond to the emitted event.

customEmitter.on('response', () => {
    console.log(`Data received`);
});

// You can attach multiple listeners (functions) to the same event name.
// All of them will run in the order they were registered.
customEmitter.on('response', () => {
    console.log(`Some other logic here`);
});

// Important: Always register your listeners (on()) BEFORE emitting the event,
// otherwise the event will be emitted with no listener to handle it.
customEmitter.emit('response');
