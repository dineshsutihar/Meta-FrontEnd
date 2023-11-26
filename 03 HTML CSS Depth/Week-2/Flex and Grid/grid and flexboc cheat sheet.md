# Grids and Flexbox Cheat Sheet

## Grid

### Creating a Grid

```css
selector {
    display: grid; /* or inline-grid */
}
```

### Grid Shorthand

A grid helps organize elements on a page.

- `grid-template-rows: none`: Configures elements in rows.
- `grid-template-columns: none`: Configures elements in columns.
- `grid-template-areas: none`: Configures named grid areas.
- `grid-auto-rows: auto`: Default size for unconfigured rows.
- `grid-auto-columns: auto`: Default size for unconfigured columns.
- `grid-auto-flow: row`: Default location for unallocated rows.
- `column-gap: normal`: Gap between columns.
- `row-gap: normal`: Gap between rows.

### Grid Properties for Container

- `grid-template-columns`: Defines column size and names.
- `grid-template-rows`: Defines row size and names.
- `grid-auto-columns`: Default size for unconfigured columns.
- `grid-auto-rows`: Default size for unconfigured rows.
- `grid-template`: Defines and maintains named cells on a grid.
  - Example: `"header header" auto`, `"main right" 75vh`, `"footer footer" 20rem`.

### Gap

- `grid-gap`: Gap between rows and columns.
- `grid-column-gap`: Gap between columns.
- `grid-row-gap`: Gap between rows.

### Alignment

- `justify-items`: Align items along the grid's inline axis.
- `align-items`: Align items along the grid's block axis.
- `place-items`: Shorthand for `justify-items` and `align-items`.

### Justification

- `justify-content`: Allocates space along the main axis.
- `align-content`: Allocates space along the cross and block axes.
- `place-content`: Shorthand for `justify-content` and `align-content`.

### Positioning

- `grid-auto-flow`: Configures automatic item placement.
- `grid-auto-columns`: Default size for unconfigured columns.
- `grid-auto-rows`: Default size for unconfigured rows.

### Grid Properties for Items (Child)

- `grid-column`: Specifies column start and end positions.
  - Example: `1/2`.
- `grid-column-start`: Specifies starting column position.
- `grid-column-end`: Specifies ending column position.
- `grid-row`: Specifies row start and end positions.
  - Example: `1/2`.
- `grid-row-start`: Specifies starting row position.
- `grid-row-end`: Specifies ending row position.

### Justification and Alignment

- `justify-self`: Aligns item inside its container along the appropriate axis.
- `align-self`: Aligns item within a grid area.
- `place-self`: Shorthand for `justify-self` and `align-self`.

## Flexbox

### Creating a Flexbox

```css
selector {
    display: flex | inline-flex;
}
```

### Flexbox Container Properties

- `flex-direction`: Specifies the direction of flex items.
- `flex-wrap`: Controls whether items wrap or not.
- `align-items`: Aligns flex items on the page.
- `justify-content`: Aligns flex items along the main axis.
  
### Flexbox Items (Child) Properties

- `flex-grow`: Enables proportional growth of flex container.
- `flex-shrink`: Allows elements to shrink in relation to other items.
- `flex-basis`: Sets the initial main size of an item.
- `order`: Specifies the position of items in flex order.
- `align-self`: Aligns child items within the flex container.