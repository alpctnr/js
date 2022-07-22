const button = document.querySelector('button');
const output = document.querySelector('p');

// Promise example
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Timer done!');
    }, duration);
  })
  return promise;
}

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts)
  });
  return promise;
}

function trackUserHandler() {
  // This process will be yielded to browser api and code execution will be continue by javascript engine
  getPosition().then(posData => {
    console.log(posData);
  }, err => {
    console.log(err)
  })
  
  // Even time is 0 this code will not execute first. Time is not guaranteed. 
  // Process will be added to message queue then js engine will execute this if stack is empty
  setTimer(0).then((result) => {
    console.log(result)
  })

  // This code runs first before early processes added to message queue by browser api
  console.log('Getting current position');
}

// Async await version of promise
async function trackUserHandlerAsync() {
  console.log('Getting current position');
  let posData;
  let timer
  try {
    posData = await getPosition();
    timer = await setTimer(2000);
  }
  catch (error) {
    console.log(error);
  }
  console.log(timer, posData);
}


button.addEventListener('click', trackUserHandler);