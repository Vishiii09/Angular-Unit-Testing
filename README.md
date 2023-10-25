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

<img width="924" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/9d7cd4f6-b4e5-4aac-817a-78f7688cc6ee">

Step by step implementation of the calculator service

Calculator.service.ts
<img width="847" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/cbb295aa-826e-484a-8233-853738e84961">

calculator.service.spec.ts
<img width="773" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/89730251-8e0a-4250-96aa-d0631f254f62">

Testing the service which has another service injected through dependency injection.

Implement logger service.
logger.service.ts

<img width="678" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/497d0be9-78ba-463b-bd3c-f172e3ba854b">

calculator.service.ts

<img width="747" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/4843b585-2375-40e9-857f-a9b1fa6c3728">

calculator.service.spec.ts
<img width="1009" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/981e85ea-6ad8-49d4-8796-db48d93a9b69">

The best practice is we should not call directly logger service while testing it is calling actual logger service method, log method and it executing logic on log method in logger.service.ts. So we need to create dummy logger service in which it has log method which do nothing. Check whether the log method is callled or not. So use Jasmine Spys.

Mocking the injected service using createSpyObj method and spy on the methods.

Create spy for logger service and try to create spyObject.

<img width="1013" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/7bd0f805-50f3-4d6f-b843-d38452bf6406">


<img width="696" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/563a8921-9913-42e0-9ff1-1a444d5159e9">

If you want logger method to be called with spyObject.

use callThrough() - It will spy on log method and also call log method.
<img width="841" alt="image" src="https://github.com/Vishiii09/angular-unit-testing/assets/42347700/46a71983-f327-46ca-bbe8-75c69f3ab208">








