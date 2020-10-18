# vanilla-js-todo
A simple to-do list app made with just javascript

## Running or building
```bash
> npm dev
```
```bash
> npm build
```
## Running tests (with Jest!)
```bash
> npm test
```
### Results
```bash
> jest --coverage

 PASS  src/test/todo-list/todo-list.component.spec.js (6.766 s)
  Todo-List Component
    √ Should have declared view file (49 ms)
    √ Should have loaded DOM events (35 ms)
    √ Should have fetched data from localstorage (41 ms)
    √ Should have added new to-do when submited (18 ms)
    √ Should not have added new empty to-do when submited (10 ms)
    √ Should have removed to-do when clicked on remove button (30 ms)

-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------|---------|----------|---------|---------|-------------------
All files                |     100 |      100 |     100 |     100 | 
 app/todo-list           |     100 |      100 |     100 |     100 | 
  todo-list.component.js |     100 |      100 |     100 |     100 | 
 test/jest               |     100 |      100 |     100 |     100 | 
  importMock.js          |     100 |      100 |     100 |     100 | 
-------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        11.889 s, estimated 18 s
Ran all test suites.
```
