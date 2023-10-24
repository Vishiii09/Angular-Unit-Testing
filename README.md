# Angular-Unit-Testing

Unit Testing increases the quality of the software.

Angular has two types of unit tests -

1. Isolated unit tests
   When you try to check single functionality of a single piece/unit of code
   It does not depend on anything.

2. Integration unit tests
   End to end testing is focused on testing the interactions and behaviour of multiple components, services, and the application as a whole.

Types of tests in Angular -

1. Unit Testing
   Focus on testing indiviual parts or units of code, such as components, services and directives.

2. Integration Testing
   Verify how different parts of your applications works together.
   You can use Angular's TestBed to configure your components and services and then test their interactions.

3. End to End Testing
   Checks the functionality of your application from user's perspective.

There are few Angular units that can be tested in isolation

1. Pipe
2. Services
3. Class
4. Component
5. Directives

In isolation we always should mock our dependencies, otherwise it isn't isolation anymore.

In isolated unit testing, we don't test the template for a component, only the logic behind it.

Integration Test

We actually create a module that we are going to test.

1. Shallow Test
   We only test a single component with its template.
2. Deep Test (parent + child)
   We test many component actually having child components.

Mock

Types of Mock -

1. Dummies
2. Stubs
3. Spies

How to write basic spec?

describe('First Test', () =>{
let testVariable: any;
beforeEach()
}>)
