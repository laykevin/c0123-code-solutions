let count = 3;
const interval = setInterval(() => {
  if (count) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(interval);
  }
}, 1000);
