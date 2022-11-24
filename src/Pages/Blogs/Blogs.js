import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-8">
        Welcome To My Blog!!!
      </h2>
      <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-4/5 mx-auto">
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Ques : What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              Answer : There are four main types of state you need to properly
              manage in your React apps: <br />
              1.Local state <br />
              2.Global state <br />
              3.Server state <br />
              4.URL state <br />
              Local (UI) state – Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. <br />
              Global (UI) state – Global state is data we manage across multiple
              components. Global state is necessary when we want to get and
              update data anywhere in our app, or in multiple components at
              least. <br />
              Server state – Data that comes from an external server that must
              be integrated with our UI state. Server state is a simple concept,
              but can be hard to manage alongside all of our local and global UI
              state. <br />
              URL state – Data that exists on our URLs, including the pathname
              and query parameters. URL state is often missing as a category of
              state, but it is an important one. In many cases, a lot of major
              parts of our application rely upon accessing URL state. <br />
            </p>
          </div>
        </div>
        <div className="card bg-success text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Ques : How does prototypical inheritance work?
            </h2>
            <p>
              Answer : The Prototypal Inheritance is a feature in javascript
              used to add methods and properties in objects. It is a method by
              which an object can inherit the properties and methods of another
              object. Traditionally, in order to get and set the [[Prototype]]
              of an object, we use Object.getPrototypeOf and Object. <br />
              JavaScript objects are dynamic "bags" of properties (referred to
              as own properties). JavaScript objects have a link to a prototype
              object. When trying to access a property of an object, the
              property will not only be sought on the object but on the
              prototype of the object, the prototype of the prototype, and so on
              until either a property with a matching name is found or the end
              of the prototype chain is reached. <br />
              Let’s walk through an example of prototypical inheritance you’re
              likely familiar with from grade school: all squares are
              rectangles, but not all rectangles are squares. If we think of
              this as a JS program, we could say that the rectangle is a
              prototype to the square: the square inherits all properties of a
              rectangle (i.e. four-sides and closed), while also adding a new
              feature (i.e. all sides are the same length). We could not,
              however, construct this same concept using the square as a
              prototype, because there are properties of a square that do not
              apply to rectangles (i.e. all sides are the same length).
            </p>
          </div>
        </div>
        <div className="card bg-warning text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              Ques : What is a unit test? Why should we write unit tests?
            </h2>
            <p>
              Answer : In computer programming, unit testing is a software
              testing method by which individual units of source code—sets of
              one or more computer program modules together with associated
              control data, usage procedures, and operating procedures—are
              tested to determine whether they are fit for use. <br />
              Here are a few benefits to writing unit tests: <br />
              1.Unit tests save time and money. Usually, we tend to test the
              happy path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. The time to fix these issues
              could’ve been used to build new features or optimize the existing
              system. <br />
              2.Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions. <br />
              3.It simplifies the debugging process. <br />
              4.Unit testing is an integral part of extreme programming. Extreme
              programming is basically a
              “test-everything-that-can-possibly-break” programming strategy.{" "}
              <br />
              5.Unit testing improves code coverage. A debatable topic is to
              have 100% code coverage across your application.
              <br />
            </p>
          </div>
        </div>
        <div className="card bg-error text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Ques : React vs. Angular vs. Vue?</h2>
            <p>
              Answer : <br />
              <span className="text-xl font-medium">Angular : </span> <br />
              Angular definitely is the "biggest" framework of the three. It's
              sometimes even called a "platform" rather than a framework.Because
              Angular out of the box includes support for a lot of things. It
              helps you (= the developer) with controlling the UI, reacting to
              user input, validating user input in forms, routing, state
              management sending Ajax Http requests, providing offline support &
              PWA capabilities, testing, building your application, managing
              multiple applications and connecting them and much, much more! All
              frameworks have the goal of making it easier for you, as a
              developer, to build reactive, complex user interfaces.
              <br />
              <span className="text-xl font-medium">React : </span> <br />
              React is totally different! Where Angular gives you everything,
              React gives you only one thing: A library for rendering content to
              the DOM and controlling it efficiently thereafter. It's also all
              about components and all about building user interfaces from
              components. It also gives you all the "tools" you need to define
              what should be rendered in which way under which circumstances.
              But it does not include built-in form validation support. It does
              not include a router (for rendering different components based on
              URL changes) and it does not ship its own Http client. It has some
              state management support built-in but not for all scenarios.
              <br />
              <span className="text-xl font-medium">Vue : </span> <br />
              Vue is a framework which kind of sits between React and Angular.
              It's not as "big" as Angular but it definitely includes more
              features than React does. Vue does give you built-in state
              management and it also ships with a built-in router. It does,
              however, not include form validation or Http client
              functionalities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
