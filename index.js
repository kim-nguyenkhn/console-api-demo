// Special thanks to @areknawo's article:
// https://areknawo.com/getting-creative-with-the-console-api/

// String subs - use expressions to replace with provided arguments
console.log("Object value: %o with string substitution", {
  string: "str",
  number: 10
});

console.log(
  "Object value: ",
  { string: "str", number: 10 },
  " with string substitution"
);

// CSS - style your logged messages
console.log(
  "Example %cCSS-styled%c %clog!",
  "color: red; font-family: monoscope;",
  "",
  "color: green; font-size: large; font-weight: bold"
);

// Grouping - Provides groups & nesting
console.group();
console.log("Inside 1st group");
console.group();
console.log("Inside 2nd group");
console.groupEnd();
console.groupEnd();
console.log("Outer scope");

// Tracing - Execution path & stack track
console.trace("Logging the way down here!");

// Warnings - Displayed in yellow, with a warning icon
console.warn("This is a warning!");

// Errors - Displayed in red, with an error icon
console.error("This is an error!");

// Info & Debug - Can filter based on category of logs
console.info("This is very informative!");
console.debug("Debugging a bug!");

// Assertions - conditional logging
console.assert(true, "This won't be logged!");
console.assert(false, "This will be logged!");

// Timing - Consider using the Performance API instead: https://developer.mozilla.org/en-US/docs/Web/API/Performance_API
console.time();
console.timeLog(); // default: [time] ms
console.timeEnd(); // default: [time] ms

// Counting - basic counter
console.count(); // default: 1
console.count(); // default: 2
console.count(); // default: 3
console.countReset();
console.count(); // default: 1

// Tables - outputs sortable tables!!!
console.table([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]);
