# Introduction to DOM Manipulation in JavaScript

## Table of Contents
- [Introduction to DOM Manipulation](#introduction-to-dom-manipulation)
- [Understanding the Window and Document Objects](#understanding-the-window-and-document-objects)
- [Structure of an HTML Document](#structure-of-an-html-document)
- [Basic Example of DOM Manipulation](#basic-example-of-dom-manipulation)

## Introduction to DOM Manipulation

DOM (Document Object Model) manipulation in JavaScript allows you to access and manipulate web page elements. It is a powerful feature that enables dynamic content updates, interactive user interfaces, and more.

## Understanding the Window and Document Objects

The `window` object represents the browser window, while the `document` object represents the HTML document loaded in that window. These objects provide various properties and methods to interact with the web page.

## Structure of an HTML Document

An HTML document consists of a `window`, a `document`, and HTML having two child elements: `head` and `body`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Document Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

## Basic Example of DOM Manipulation

Here is a basic example of how to manipulate the DOM using JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation Example</title>
</head>
<body>
    <h1 id="title">Original Title</h1>
    <button onclick="changeTitle()">Change Title</button>

    <script>
        function changeTitle() {
            // Access the element with id "title"
            var titleElement = document.getElementById("title");
            // Change the text content of the element
            titleElement.textContent = "New Title";
        }
    </script>
</body>
</html>
```

In this example, clicking the "Change Title" button will change the text content of the `<h1>` element from "Original Title" to "New Title". This demonstrates how you can use JavaScript to interact with and manipulate the DOM.
### More Examples of DOM Manipulation

#### Changing Element Styles

You can also change the styles of elements using JavaScript. Here is an example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Change Style Example</title>
</head>
<body>
    <h1 id="title">Styled Title</h1>
    <button onclick="changeStyle()">Change Style</button>

    <script>
        function changeStyle() {
            // Access the element with id "title"
            var titleElement = document.getElementById("title");
            // Change the style of the element
            titleElement.style.color = "blue";
            titleElement.style.fontSize = "24px";
        }
    </script>
</body>
</html>
```

In this example, clicking the "Change Style" button will change the color and font size of the `<h1>` element.

#### Adding and Removing Elements

You can dynamically add and remove elements from the DOM. Here is an example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Add/Remove Element Example</title>
</head>
<body>
    <div id="container">
        <p>This is a paragraph.</p>
    </div>
    <button onclick="addElement()">Add Element</button>
    <button onclick="removeElement()">Remove Element</button>

    <script>
        function addElement() {
            // Create a new paragraph element
            var newElement = document.createElement("p");
            // Set the text content of the new element
            newElement.textContent = "This is a new paragraph.";
            // Append the new element to the container
            document.getElementById("container").appendChild(newElement);
        }

        function removeElement() {
            // Access the container element
            var container = document.getElementById("container");
            // Remove the last child element of the container
            if (container.lastChild) {
                container.removeChild(container.lastChild);
            }
        }
    </script>
</body>
</html>
```

In this example, clicking the "Add Element" button will add a new paragraph to the container, and clicking the "Remove Element" button will remove the last paragraph from the container.

#### Event Listeners

You can use event listeners to handle various events. Here is an example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Listener Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>

    <script>
        // Access the button element
        var button = document.getElementById("myButton");
        // Add an event listener to the button
        button.addEventListener("click", function() {
            alert("Button was clicked!");
        });
    </script>
</body>
</html>
```

In this example, clicking the button will display an alert message saying "Button was clicked!".