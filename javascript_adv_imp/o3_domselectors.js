// // 00:05 Understanding JavaScript and its manipulation of the page
// // JavaScript allows dynamic manipulation of the webpage (DOM)
// document.body.style.backgroundColor = "lightblue";
// console.log("Page background changed using JavaScript");

// // 01:45 Capturing and manipulating elements using JavaScript
// let heading = document.getElementById("main-heading");
// heading.style.color = "red";
// heading.innerText = "Updated Heading";

// // 05:19 Accessing elements in DOM using different selectors
// let elementById = document.getElementById("content");
// let elementsByClass = document.getElementsByClassName("info");
// let elementsByTag = document.getElementsByTagName("p");
// let elementQuery = document.querySelector(".info");
// let elementsQueryAll = document.querySelectorAll(".info");

// // 07:02 Get Attribute allows you to retrieve the value of a specific attribute
// let link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// // 10:26 Understanding DOM selectors and NodeList in JavaScript
// console.log(document.querySelectorAll("div")); // NodeList

// // 12:08 Difference between innerHTML and textContent
// let div = document.querySelector(".example");
// console.log(div.innerHTML); // Returns HTML content
// console.log(div.textContent); // Returns only text

// // 16:00 Understanding HTML collection and querying in JavaScript
// let collection = document.getElementsByClassName("items");
// console.log(collection); // HTMLCollection

// // 17:38 Using DOM selectors to select elements by ID and class
// let byId = document.getElementById("title");
// let byClass = document.getElementsByClassName("subtitle");

// // 21:07 How to select and manipulate DOM elements
// let button = document.getElementById("btn");
// button.addEventListener("click", function() {
//     alert("Button clicked!");
// });

// // 22:50 DOM selectors NodeList and HTMLCollection
// let nodelist = document.querySelectorAll(".list-item");
// let htmlCollection = document.getElementsByClassName("list-item");
// console.log(nodelist, htmlCollection);

// // 26:43 Difference between querySelector and querySelectorAll
// let firstItem = document.querySelector(".list-item"); // Returns first match
// let allItems = document.querySelectorAll(".list-item"); // Returns NodeList

// // 28:36 Understanding DOM selectors in JavaScript
// // (Selectors like getElementById, querySelector, etc. are key tools)

// // 32:27 Converting DOM selectors NodeList and HTMLCollection
// let arrayFromNodeList = Array.from(document.querySelectorAll("p"));
// let arrayFromHTMLCollection = Array.from(document.getElementsByClassName("info"));

// // 34:15 Using DOM selectors in JavaScript
// // Selecting an element by ID
// let title = document.getElementById("page-title");
// console.log(title);

// // Selecting elements by class name
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);

// // Selecting elements by tag name
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// // Selecting the first matching element using querySelector
// let firstListItem = document.querySelector(".list-group-item");
// console.log(firstListItem);

// // Selecting all matching elements using querySelectorAll
// let allListItems = document.querySelectorAll(".list-group-item");
// console.log(allListItems);

// // 37:58 Learn to manipulate DOM selectors NodeList and HTMLCollection
// nodelist.forEach(item => item.style.color = "blue");

// // 40:00 Handling HTML Collection and NodeList in JavaScript
// Array.from(htmlCollection).forEach(item => item.style.backgroundColor = "yellow");

// // Additional Examples

// // Manipulating attributes
// document.querySelector("#sample-link").setAttribute("href", "https://example.com");
// console.log(document.querySelector("#sample-link").getAttribute("href"));

// // Adding and removing classes
// document.querySelector(".box").classList.add("highlight");
// document.querySelector(".box").classList.remove("highlight");

// // Creating and appending elements
// let newElement = document.createElement("p");
// newElement.textContent = "New paragraph added dynamically.";
// document.body.appendChild(newElement);

// // Removing elements
// let removeTarget = document.querySelector(".remove-me");
// removeTarget.parentNode.removeChild(removeTarget);

// // Event listeners
// document.querySelector("#hover-btn").addEventListener("mouseover", function() {
//     console.log("Mouse hovered over button");
// });

// document.querySelector("#hover-btn").addEventListener("mouseout", function() {
//     console.log("Mouse moved away from button");
// });


// // ------------ OPTIMISATION OF DOM ----------

// // 02:00 Reduce DOM elements by adding list items using JavaScript function
// function addListItem(text) {
//     let ul = document.querySelector("ul");
//     let li = document.createElement("li");
//     li.textContent = text;
//     ul.appendChild(li);
// }
// addListItem("New Item 1");
// addListItem("New Item 2");

// // 03:45 Creating and adding elements to the DOM
// let newDiv = document.createElement("div");
// newDiv.className = "new-div";
// newDiv.textContent = "This is a new div element.";
// document.body.appendChild(newDiv);

// // 05:34 How to edit and remove elements in DOM using chai and JavaScript
// let editTarget = document.querySelector(".edit-me");
// if (editTarget) {
//     editTarget.textContent = "This element has been edited.";
// }

// let removeTarget = document.querySelector(".remove-me");
// if (removeTarget) {
//     removeTarget.parentNode.removeChild(removeTarget);
// }

// // 07:34 Creating and manipulating DOM elements in JavaScript
// let newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a dynamically added paragraph.";
// document.body.appendChild(newParagraph);

// // 09:39 Optimized approach to edit and remove elements in DOM
// function editElement(selector, newText) {
//     let element = document.querySelector(selector);
//     if (element) {
//         element.textContent = newText;
//     }
// }
// editElement(".edit-me", "This element has been edited again.");

// function removeElement(selector) {
//     let element = document.querySelector(selector);
//     if (element) {
//         element.parentNode.removeChild(element);
//     }
// }
// removeElement(".remove-me");

// // 11:33 The video discusses how to edit and remove elements in the DOM using JavaScript
// // (Covered in previous examples)

// // 13:49 Different ways to add and replace content in a DOM
// let replaceTarget = document.querySelector(".replace-me");
// if (replaceTarget) {
//     replaceTarget.innerHTML = "<span>Replaced content using innerHTML</span>";
// }

// // 15:39 Replacing elements in DOM using innerHTML and querySelector
// let anotherReplaceTarget = document.querySelector(".another-replace-me");
// if (anotherReplaceTarget) {
//     anotherReplaceTarget.innerHTML = "<div>Another replaced content</div>";
// }

// // 17:31 Methods to edit and remove elements in DOM using JavaScript
// // (Covered in previous examples)

// // 19:20 Learn how to edit and remove elements in DOM. generate example and theory for this.
// // Example and theory covered in previous code snippets.