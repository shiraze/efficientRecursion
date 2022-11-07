Provides the $n^{th}$ item that satisfies the following rules:

$$f(1) = 1$$

$$f(n + 1) = 1 + f(n + 1 - f(f(n)))$$

Note that the solution uses a global sequence array that is extended in each test and is not cleared between tests.

### How to run tests

In VS Code, there is an included launch.json to enable running the tests using the Run and Debug tool. To run the tests in your CLI run `npm test` in the root directory.

Ensure the terminal is open when running tests remotely to see the results
