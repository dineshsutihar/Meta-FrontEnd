# Understanding Flexbox

Flexbox is a type of container in HTML that offers improved scalability and dynamic control over containers compared to traditional block and inline containers. It allows items to grow, shrink, and align inside the container, providing better control over content and styling.

## Flexbox Basics

Flexbox is single-dimensional, aligning either along a row or a column. The main and cross-axes, similar to x and y-axes in coordinate geometry, determine alignment. By default, the main axis is horizontal, and the cross axis is vertical. Properties like `flex-direction` can modify these axes.

![Flexbox Diagram](![Alt text](image.png))
https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology

## Flexbox Properties

### Original HTML Code

```html
<body>
  <div class="flex-container">
    <div class="box box1">One..</div>
    <div class="box box2">Two..</div>
    <!-- ... (up to box7) -->
  </div>
</body>
```

### Original CSS Code

```css
.box {
    background-color: aquamarine;
    border-radius: 5px;
    margin: 2px;
    padding: 10px;
}

.flex-container {
    display: flex;
}
```

### Output

Seven flex containers aligned from left to right in the top left corner.

## Alignment Properties

### Justify-Content

```css
.flex-container {
    display: flex;
    justify-content: center;
}
```

Aligns items on the main axis to the center.

### Flex-Wrap

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
```

Wraps items to the size of the viewport.

### Flex-Direction

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}
```

Sets the main axis to a column, making it a vertical layout.

### Align-Items

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
}
```

Aligns items on the cross-axis to the flex-end, creating right-centered items.

### Align-Self

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
}

.box3 {
    background-color: blanchedalmond;
    align-self: center;
}
```

Changes color and alignment of the third box, overriding align-items.

### Gap

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 10px;
}
```

Creates space between items along the main axis.

## Flex Properties

### Flex-Grow, Flex-Shrink, and Flex-Basis

```css
.flex-container {
    flex: 0 1 auto;
}
```

Defines how flex takes up space, grows, and shrinks. Shorthand notation sets flex-grow to 0, flex-shrink to 1, and flex-basis to auto.

```css
.box3 {
    background-color: blanchedalmond;
    align-self: center;
    flex: 1 1 auto;
}
```

Third box takes up entire free space because flex-grow is set to 1.

Understanding how changes in the main and cross axes affect the flexbox is crucial. With practice, you'll become comfortable using flexbox properties for effective layout and alignment.