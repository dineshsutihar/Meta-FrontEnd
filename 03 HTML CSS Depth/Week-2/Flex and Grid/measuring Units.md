**CSS Units of Measurement**

A web page, in its essence, is two-dimensional, characterized by width and height. The terms vertical and horizontal, length and breadth, or the x and y-axis are all synonymous with expressing these dimensions. Another pivotal attribute of a web page is its size, which can either be static or dynamic. As you delve into CSS code, you'll encounter various ways to declare values for the same property, employing different units of measurement. These units play a crucial role in accommodating the dynamism and dimensionality of a web page.

Let's explore the most widely used units of measurement, broadly categorized as Absolute and Relative units.

**Absolute Units**

Absolute units maintain a constant size across different devices, making them suitable for activities like printing. However, they may not be as adaptable to the diverse array of devices today with varying viewport sizes. Absolute units find their utility when the size of the web page is known and remains constant.

The table for absolute units is as follows:

| Unit | Name | Comparison |
|------|------|------------|
| Q    | Quarter-millimeters | 1Q = 1/40th of 1cm |
| mm   | Millimeters | 1mm = 1/10th of 1cm |
| cm   | Centimeters | 1cm = 37.8px = 25.2/64in |
| in   | Inches | 1in = 2.54cm = 96px |
| pc   | Picas | 1pc = 1/6th of 1in |
| pt   | Points | 1pt = 1/72nd of 1in |
| px   | Pixels | 1px = 1/96th of 1in |

Among these, pixels and centimeters are most frequently used for defining properties.

**Relative Values**

In web development, a single element rarely exists in isolation. Even in the case of containers like flexboxes and grids, multiple elements are usually present to which rules are applied. Relative values are defined in relation to other elements inside the parent element or in relation to the viewport or the visible web page size. Given the dynamic nature of modern web pages and the variable sizes of devices, relative units are commonly favored.

Here are some important relative units:

| Unit | Description and Relativity |
|------|-----------------------------|
| em   | Font size of the parent where present |
| ex   | x-coordinate or height of the font element |
| ch   | Width of the font character |
| rem  | Font size of the root element |
| lh   | Value computed for line height of the parent element |
| rlh  | Value computed for line height of the root element (<html>) |
| vw   | 1% of the viewport width |
| vh   | 1% of the viewport height |
| vmin | 1% of the smaller dimension of the viewport |
| vmax | 1% of the larger dimension of the viewport |
| %    | Denotes a percentage value in relation to its parent element |

Many of these units pertain to the relative size of fonts, with specific contexts influencing their suitability. For example, when viewport dimensions are crucial, vw and vh are more appropriate. In a broader context, the most frequently encountered relative units include percentage, em, vh, vw, and rem.

Just as discussed with absolute and relative units, certain properties have their own set of acceptable values. For instance, color-based properties like `background-color` will have values such as hexadecimal, rgb(), rgba(), hsl(), hsla(), and so forth. Understanding each property individually and practicing with the code will guide you in choosing the most suitable unit of measurement.