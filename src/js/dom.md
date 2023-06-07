# js操作dom

## 以下是一些关于操作DOM元素的常见API：

1. getElementById：通过元素的ID属性获取对应的DOM元素节点。
```javascript
var element = document.getElementById("myElement");
```

2. getElementsByClassName：通过类名获取DOM元素节点的集合。
```javascript
var elements = document.getElementsByClassName("myClass");
```

3. getElementsByTagName：通过标签名获取DOM元素节点的集合。
```javascript
var elements = document.getElementsByTagName("div");
```

4. querySelector：使用CSS选择器选择第一个匹配的元素节点。
```javascript
var element = document.querySelector("#myElement .myClass");
```

5. querySelectorAll：使用CSS选择器选择所有匹配的元素节点。
```javascript
var elements = document.querySelectorAll("div.myClass");
```

6. createElement：创建新的元素节点。
```javascript
var element = document.createElement("div");
```

7. appendChild：将一个元素节点添加为另一个元素节点的子节点。
```javascript
parentElement.appendChild(childElement);
```

8. removeChild：从父节点中移除一个子节点。
```javascript
parentElement.removeChild(childElement);
```

9. replaceChild：用一个新的子节点替换父节点中的指定子节点。
```javascript
parentElement.replaceChild(newChildElement, oldChildElement);
```

10. insertBefore：在指定的子节点之前插入一个新的子节点。
```javascript
parentElement.insertBefore(newChildElement, referenceElement);
```

11. cloneNode：克隆一个元素节点。
```javascript
var clonedElement = element.cloneNode(true); // true表示深度克隆，包括子节点
```

12. innerHTML：获取或设置一个元素节点的HTML内容。
```javascript
var htmlContent = element.innerHTML;
element.innerHTML = "<p>New content</p>";
```

13. outerHTML：获取或设置一个元素节点及其子节点的HTML内容。
```javascript
var htmlContent = element.outerHTML;
element.outerHTML = "<div id='newElement'>New element</div>";
```

14. className：获取或设置一个元素节点的类名。
```javascript
var className = element.className;
element.className = "newClass";
```

15. classList：获取一个元素节点的类名列表，并提供添加、删除、切换类名的方法。
```javascript
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("active");
element.classList.contains("className");
```

16. style：获取或设置一个元素节点的样式属性。
```javascript
element.style.backgroundColor = "red";
element.style.fontSize = "16px";
```

17. attributes：获取一个元素节点的属性列表，并提供操作属性的方法。
```javascript
var attributes = element.attributes;
var attributeValue = element.getAttribute("data-id");
element.setAttribute("data-id", "123");
element.removeAttribute("data-id");
```

这些API提供了操作和操纵DOM元素的基本功能。根据需要，还可以使用其他更高级的API和库来实现更复杂的DOM操作。

## 当涉及到操作DOM元素的子节点时，以下是一些常见的API：

1. childNodes：获取一个元素节点的所有子节点的集合（包括文本节点、元素节点等）。
```javascript
var childNodes = parentElement.childNodes;
```

2. children：获取一个元素节点的所有子元素节点的集合。
```javascript
var children = parentElement.children;
```

3. firstChild：获取一个元素节点的第一个子节点。
```javascript
var firstChild = parentElement.firstChild;
```

4. lastChild：获取一个元素节点的最后一个子节点。
```javascript
var lastChild = parentElement.lastChild;
```

5. parentNode：获取一个元素节点的父节点。
```javascript
var parentNode = childElement.parentNode;
```

6. nextSibling：获取一个节点的下一个兄弟节点。
```javascript
var nextSibling = element.nextSibling;
```

7. previousSibling：获取一个节点的前一个兄弟节点。
```javascript
var previousSibling = element.previousSibling;
```

8. firstElementChild：获取一个元素节点的第一个子元素节点。
```javascript
var firstElementChild = parentElement.firstElementChild;
```

9. lastElementChild：获取一个元素节点的最后一个子元素节点。
```javascript
var lastElementChild = parentElement.lastElementChild;
```

10. nextElementSibling：获取一个元素节点的下一个兄弟元素节点。
```javascript
var nextElementSibling = element.nextElementSibling;
```

11. previousElementSibling：获取一个元素节点的前一个兄弟元素节点。
```javascript
var previousElementSibling = element.previousElementSibling;
```

这些API可用于遍历、访问和操作DOM元素的子节点和父节点。请注意，子节点集合可能包含不仅仅是元素节点，还可能包含文本节点、注释节点等。因此，根据需要，可能需要额外的逻辑来处理特定类型的节点。