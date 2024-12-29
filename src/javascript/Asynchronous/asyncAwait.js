// async and await provide a way to work with promises more easily. async functions return a promise,
//  and await is used to wait for a promise to resolve before continuing with the execution.
//   This makes asynchronous code look and behave more like synchronous code.
//   Here is an example of how to use async and await with promises:

async function fetchData() {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched succesfuly");
    }, 1000);
  });
  console.log(result);
}

fetchData();

async function myData() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('"Error fetching data"');
      }, 1000);
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
myData();
