// @flow

/**
 * test flow
 */
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(7, 7));

/**
 * test async/await
 */
function timeoutLog(message: string, timeout: number = 1000){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, timeout);
  });
}

async function asyncTest(){
  await timeoutLog('100ms after start', 100);
  await timeoutLog('1s after previous');
}

asyncTest();

