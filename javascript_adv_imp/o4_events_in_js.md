### **Events in JavaScript - Detailed Notes with Examples**  

---

## **1. Introduction to Events in JavaScript**  
Events in JavaScript allow developers to make web pages interactive by responding to user actions such as mouse clicks, key presses, and form submissions.

---

## **2. Types of Events in JavaScript**  
JavaScript provides various types of events categorized based on user actions:  

### **a) Mouse Events**  
- `click` – Triggered when an element is clicked.  
- `dblclick` – Triggered on a double-click.  
- `mouseover` – Triggered when the mouse enters an element.  
- `mouseout` – Triggered when the mouse leaves an element.  
- `mousedown` – Triggered when a mouse button is pressed.  
- `mouseup` – Triggered when a mouse button is released.  

**Example: Handling Click Event**  
```javascript
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});
```

---

### **b) Keyboard Events**  
- `keydown` – Triggered when a key is pressed down.  
- `keyup` – Triggered when a key is released.  
- `keypress` – (Deprecated) Similar to `keydown`, but does not detect all keys.  

**Example: Detecting Key Presses**  
```javascript
document.addEventListener("keydown", function(event) {
    console.log("Key Pressed: " + event.key);
});
```

---

### **c) Form Events**  
- `submit` – Triggered when a form is submitted.  
- `change` – Triggered when a form field value changes.  
- `focus` – Triggered when an input field is focused.  
- `blur` – Triggered when an input field loses focus.  

**Example: Prevent Form Submission**  
```javascript
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submission prevented!");
});
```

---

### **d) Window Events**  
- `load` – Fires when the page fully loads.  
- `resize` – Fires when the window is resized.  
- `scroll` – Fires when the page is scrolled.  

**Example: Detecting Page Scroll**  
```javascript
window.addEventListener("scroll", function() {
    console.log("Page is being scrolled!");
});
```

---

## **3. Different Approaches to Handling Events**  
There are three main approaches to handling events in JavaScript:

### **a) Inline Event Handling (Not Recommended)**  
```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```
- This method is not recommended as it mixes JavaScript with HTML.  

### **b) Using `onEvent` Properties**  
```javascript
document.getElementById("btn").onclick = function() {
    alert("Button Clicked!");
};
```
- This method allows separation of HTML and JavaScript but supports only one event handler per event.  

### **c) Using `addEventListener()` (Best Approach)**  
```javascript
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});
```
- Allows multiple event handlers and greater flexibility.

---

## **4. Event Object and Its Properties**  
When an event occurs, an event object is passed to the event handler, containing details about the event.

**Example: Accessing Event Object Properties**  
```javascript
document.addEventListener("click", function(event) {
    console.log("Event Type:", event.type);
    console.log("X Position:", event.clientX);
    console.log("Y Position:", event.clientY);
});
```

---

## **5. Event Propagation (Bubbling & Capturing)**  
Event propagation determines how events travel through the DOM.  

### **a) Event Bubbling (Default Behavior)**  
- Events start from the target element and bubble up to the parent elements.

**Example: Event Bubbling**  
```javascript
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent Clicked!");
});

document.getElementById("child").addEventListener("click", function() {
    alert("Child Clicked!");
});
```
- Clicking `child` will also trigger `parent` due to bubbling.

---

### **b) Event Capturing (Top-Down Propagation)**  
- Events travel from the top-most element down to the target.  

**Example: Using Event Capturing**  
```javascript
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent Clicked!");
}, true); // Capturing mode enabled
```

---

## **6. Stopping Event Propagation**  
To stop event bubbling, use `stopPropagation()`.

**Example:**  
```javascript
document.getElementById("child").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Child Clicked!");
});
```
- Now clicking `child` will not trigger `parent`.

---

## **7. Preventing Default Behavior**  
Some elements have default behaviors (e.g., links navigating, form submissions). Use `preventDefault()` to stop them.

**Example: Preventing Link Navigation**  
```javascript
document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Default action prevented!");
});
```

---

## **8. Creating Interactive Events**  
### **a) Making an Image Disappear When Clicked**  
```javascript
document.getElementById("myImage").addEventListener("click", function() {
    this.style.display = "none";
});
```

### **b) Dynamically Removing Elements**  
Using `removeChild()` to remove an element on click.  

```javascript
document.getElementById("removeBtn").addEventListener("click", function() {
    var element = document.getElementById("toBeRemoved");
    element.parentNode.removeChild(element);
});
```

---

## **9. Attaching and Removing Event Listeners**  
You can dynamically add or remove event listeners using `addEventListener()` and `removeEventListener()`.

**Example: Removing an Event Listener**  
```javascript
function clickHandler() {
    alert("Event Triggered!");
}

document.getElementById("btn").addEventListener("click", clickHandler);

// Remove event after 5 seconds
setTimeout(function() {
    document.getElementById("btn").removeEventListener("click", clickHandler);
}, 5000);
```

---

## **10. Event Delegation**  
Instead of adding event listeners to multiple elements, you can add a single listener to a parent and handle child elements dynamically.

**Example: Using Event Delegation**  
```javascript
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        alert("You clicked: " + event.target.textContent);
    }
});
```

---

## **11. Summary & Important Points**
- JavaScript events allow interactive user experiences.  
- **Three approaches** to handling events: **Inline**, `onEvent` properties, and `addEventListener()` (**best method**).  
- **Event propagation** involves **bubbling (default)** and **capturing**.  
- **Use `stopPropagation()`** to stop event propagation.  
- **Use `preventDefault()`** to stop default actions.  
- **Use event delegation** for efficient event handling.  
- **Dynamically add or remove events** using `addEventListener()` and `removeEventListener()`.  
