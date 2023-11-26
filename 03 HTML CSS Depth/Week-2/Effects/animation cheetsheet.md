# Animation and Effects Cheat Sheet

## Transform Property

**Syntax:**
```css
transform: transform-function-values;
```

**Example:**
```css
.sample-class {
    transform: rotate(60deg);
}
```

**Keyword-value type:**
- `none`
```css
.sample-class {
    transform: none;
}
```

**Function-value type: matrix()**
```css
.sample-class {
    transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
}
```

**Function-value type: rotate(deg)**
```css
.sample-class {
    transform: rotate3d(3, 2, 1, 100deg);
}
```
*Note: In `rotate3d()`, the respective values represent x, y, z coordinates and the degree of rotations.*

**Function-value type: translate(x,y)**
```css
.sample-class {
    transform: translate3d(10px, 20px, 30px);
}
```
*Note: In `translate3d()`, the respective values represent translation along the x, y, z coordinates.*

**Function-value type: scale(factor)**
```css
.sample-class {
    transform: scale3d(2, 1, 0.3);
}
```
*Note: In `scale3d()`, the respective values represent scaling along the x, y, z coordinates.*

**Function-value type: skew(deg, deg)**
```css
.sample-class {
    transform: skew(100deg);
}
```

**Global value types:**
```css
.sample-class {
    transform: inherit;
}
.sample-class {
    transform: initial;
}
.sample-class {
    transform: revert;
}
.sample-class {
    transform: revert-layer;
}
.sample-class {
    transform: unset;
}
```

**Multiple transform over the same element**
```css
.sample-class {
    transform: rotate(45deg) scale(1.5) translate(45px);
}
```

**Additional property under transform: transform-origin**
```css
.sample-class {
    transform-origin: 10px 10px;
}
.sample-class {
    transform-origin: right bottom;
}
```

## Transition Property

**Transition Shorthand:**
```css
transition: property duration timing-function delay;
```

**Example:**
```css
transition: margin-left 2s ease-in-out 0.5s;
```

## Animations and @keyframes

**Animation Property:**
```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

**Example:**
```css
.sample-class {
    animation: none 2s ease 0.5s 4 normal none running;
}
```

*The animation property is a shorthand for the following sub-properties:*
- `animation-name`
- `animation-duration`
- `animation-timing-function`
- `animation-delay`
- `animation-iteration-count`
- `animation-direction`
- `animation-fill-mode`
- `animation-play-state`

*Values not mentioned are given default values.*

**@keyframes Rule:**
```css
@keyframes mymove {
    from { property: value; }
    to { property: value; }
}
```

**Example:**
```css
@keyframes animation-name {
    from { bottom: 0px; }
    to { bottom: 100px; }
}
```

*Percentage denotes the timing of the animation.*

**Alternative Syntax:**
```css
@keyframes animation-name {
    /* declare actions here */
}
```

**Example:**
```css
@keyframes animation-name {
    0%, 100% {
        background-color: blue;
    }
    50% {
        background-color: green;
    }
}
```

**Multiple Animations:**
```css
#some-class {
    animation: animation-a 2s linear infinite alternate, 
               animation-b 3s ease infinite alternate;
}
```