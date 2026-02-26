1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementById() selects one element by Id name. Id must be unique in tha page.

    getElementsByClassName() selects multiple elements who have the same class name. It gives a HTML collection. It is live means it changes automatically when DOM  changes.

    querySelector() selects one element but the first one that matches. it uses css selector like (.className #idName)

    querySelectorAll() selects all the elements that matches.It also used css selector. It gives a nodeList and it's static means doesn't change automatically when DOM changes.

2. How do you create and insert a new element into the DOM?

ans: first we create an element by document.createElement(). then we add content to the element like innerText or innerHTML then we append it to the parent element using appendChild() to show it on the web.

3.  What is Event Bubbling? And how does it work?

ans: When an event happens on an element for example, a click on a button inside a div, the browser first executes the event handler attached to that button. After that, the same event automatically moves up to its parent element, then to the grandparent, and continues up the DOM tree until it reaches the document object.
So the flow is:
Child -> Parent -> Grandparent -> Body -> Document

This upward propagation of an event is called Event Bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

ans: Event Delegation is a technique where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element and handle the events using event bubbling.Which means, we let the parent handle events for its children. Because of event bubbling, when a child element is clicked, the event first runs on the child and then moves up to the parent. So we attach the event listener to the parent and check which child triggered the event using event.target. By this method we dont need to add event listener to multiple child elements which reduces the work.

5. What is the difference between preventDefault() and stopPropagation() methods?

ans: The difference between preventDefault() and stopPropagation() is preventDefault() stops the browser from doing what it normally does for that event. For example stopping Stopping a form from submitting when a submit button is clicked. And event.stopPropagation() stops the event from propagating (bubbling up) to parent elements in the DOM tree.
