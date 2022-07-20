// Fix the slow function to be asynchronous/non-blocking
function slow(callback) {
  setTimeout(() => {
    for (let i = 0; i <= 5e8; i++) {}
  }, 0);
  if (Math.random() > 0.5) {
    return callback("Error", null);
  }
  return callback(null, { id: 12345 });
}
function exec(fn) {
  // Complete the code here to implement chaining with callback
  const callback = function (...restParam) {
    return restParam[0] === null ? restParam[1] : restParam[0];
  };
  const result = fn(callback);
  return {
    done: function (cb) {
      if (result !== "Error") {
        cb(result);
      }
      return this;
    },
    fail: function (cb) {
      if (result === "Error") {
        cb(result);
      }
      return this;
    },
  };
}

exec(slow)
  .done(function (data) {
    console.log(data);
  })
  .fail(function (err) {
    console.log("Error: " + err);
  });
