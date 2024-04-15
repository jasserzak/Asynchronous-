//task 1
async function iterateWithAsyncAwait(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log(arr[i]);
        resolve();
      }, 1000)
    );
  }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

//task 2
async function awaitCall() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage:
awaitCall();

// task 5
const parallelCalls = async (urls) => {
  try {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );
    const responses = await Promise.all(fetchPromises);
    responses.forEach((response) => console.log(response));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Example usage:
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

parallelCalls(urls);
