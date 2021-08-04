const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('Succeeded');
    });
  } else {
    reject('fail');
  }
});

myPromise
  .then((value) => console.log(value + '!!!!!'))
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));

const myAsyncFunction = async () => {};
