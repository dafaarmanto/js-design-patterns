async function RetryOperation() {
  let current = 0;

  while (true) {
    try {
      ExternalServiceCall();
      console.log('Succeded!');
      break;
    } catch (error) {
      current++;
      console.log(`Failed attempt: ${current}`);

      if (current >= 10) {
        console.log(`Retry maximum reached! Exiting...`);
        break;
      }
    }
    await sleep(3000);
  }
}

function ExternalServiceCall() {
  console.log('Calling external service ...');
  const shouldPass = Math.random() < 0.4;

  if (shouldPass) return true;
  else throw 'Failure';
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

RetryOperation();
