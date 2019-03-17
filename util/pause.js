const pause = time =>
  new Promise((resolve, reject) =>
    setTimeout(
      (() => {
        resolve;
      },
      time)
    )
  );

module.exports = pause;
