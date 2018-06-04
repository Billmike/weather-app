console.log("Starting app.js");

setTimeout(() => {
  console.log('The first time-out call here')
}, 2000);

setTimeout(() => {
  console.log('The second time-out call')
}, 5000);

console.log('End of the call stack');

/**
 * * Call stack kicks off by calling the main() function.
 * * setTimeout() gets called and pushed into the node API calls.
 * * once setTimeout() is done, it gets moved into the callback queue.
 * * Event loop checks to see if the call-stack is empty. Once it's empty,
 * * it checks the callback queue to see if there's anything left to be resolved.
 * * setTimeout resolves finally and prints its result to the console.
 */
