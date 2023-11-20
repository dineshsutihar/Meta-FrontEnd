# CSS Pseudo Cheat Sheet

## Simple Selectors

| Selector | Syntax            | Example     | Description                        |
|----------|-------------------|-------------|------------------------------------|
| Element  | `element`         | `div {}`    | Selects all <div> elements.        |
| Class    | `.class`           | `.alpha {}` | Selects all elements with class alpha. |
| ID       | `#id`              | `#alpha {}` | Selects the element with ID alpha. |
| Universal| `*`               | `* {}`      | Selects all elements.              |

## Variations of Simple Selectors

| Selector        | Syntax                        | Example              | Description                                      |
|-----------------|-------------------------------|----------------------|--------------------------------------------------|
| Two Classes     | `.first-class.second-class`   | `.alpha.beta {}`     | All elements with classes alpha and beta.        |
| Element and Class| `element.class`               | `p.alpha {}`         | All alpha class elements inside <p>.             |
| Two Elements    | `element, element`            | `p, div {}`          | All <p> and <div> elements.                      |
| Two Elements    | `element element`             | `p div {}`           | All <div> elements inside <p>.                   |

## Descendant Selectors/Combinators

| Selector         | Syntax                 | Example     | Description                                |
|------------------|------------------------|-------------|--------------------------------------------|
| Descendant       | `element element`      | `div p {}`  | All <p> descendants of <div>.              |
| Child            | `element>element`       | `div > p {}`| All <p> direct descendants of <div>.       |
| Adjacent Sibling | `element+element`       | `div + p {}`| <p> element directly after <div>.         |
| General Sibling  | `element~element`       | `div ~ p {}`| All <p> element iterations after <div>.    |

## Attribute Selectors

| Selector           | Syntax                | Example          | Description                                     |
|--------------------|-----------------------|------------------|-------------------------------------------------|
| [attribute]        | `[href] {}`           | `[href]`         | Selects all elements with a href attribute.     |
| [attribute=value]  | `[lang="fr"] {}`      | `[lang="fr"]`    | Selects elements with lang attribute value "fr".|
| [attribute~=value] | `[input~=hello] {}`   | `[input~=hello]`| Elements with input attribute containing "hello".|
| [attribute|=value] | `[lang|=en] {}`       | `[lang|=en]`     | Elements with lang attribute value "en" or "en-".|
| [attribute^=value] | `a[href^="https"] {}` | `a[href^="https"]`| <a> elements with href attribute starting "https".|
| [attribute$=value] | `a[href$=".docx"] {}` | `a[href$=".docx"]`| <a> elements with href attribute ending ".docx".|
| [attribute*=value] | `a[href*="meta"] {}`  | `a[href*="meta"]`| <a> elements with href attribute containing "meta".|

## Pseudo-classes

| Selector     | Example             | Description                              |
|--------------|---------------------|------------------------------------------|
| :active      | `a:active {}`      | All active links.                        |
| :checked     | `input:checked {}` | All checked <input> elements.            |
| :default     | `input:default {}` | All default <input> elements.            |
| :disabled    | `input:disabled {}`| All disabled <input> elements.           |
| :empty       | `div:empty {}`      | All <div> elements with no children.    |
| :enabled     | `input:enabled {}`  | All enabled <input> elements.            |
| :first-child | `p:first-child {}`  | All <p> elements as the first child of a parent. |
| :first-of-type| `p:first-of-type {}`| First <p> element of its parent.         |
| :focus       | `input:focus {}`   | Input element under focus.               |
| :fullscreen  | `:fullscreen {}`   | The element in full-screen mode.         |
| :hover       | `p:hover {}`       | Action effect on mouse hover.            |
| :invalid     | `input:invalid {}` | Input elements with an invalid value.    |
| :last-child  | `p:last-child {}`  | Last <p> element of its parent.          |
| :last-of-type| `p:last-of-type {}`| Last <p> element of its parent.          |
| :link        | `a:link {}`        | All unvisited links.                     |
| :not(selector)| `:not(div) {}`     | All elements that are not a <div> element. |
| :nth-child(n)| `div:nth-child(3) {}`| <p> elements that are the third child of a parent. |
| :nth-last-child(n)| `div:nth-last-child(3) {}`| <div> elements which are the third child, counting from last child. |
| :nth-last-of-type(n)| `p:nth-last-of-type(2) {}`| Second sibling from the last child of a parent. |
| :nth-of-type(n)| `p:nth-of-type(2) {}`| Second sibling of a parent.             |
| :only-of-type| `p:only-of-type {}`| <p> elements that are only <p> elements inside its parent. |
| :only-child  | `p:only-child {}`  | <p> elements that are only child of a parent. |
| :optional    | `input:optional {}` | Input elements with no "required" attribute. |
| :required    | `input:required {}` | Input elements with "required" attribute specified. |
| :root        | `:root {}`         | The Root element of document.            |
| ::selection  | `::selection {}`   | Portion of an element selected by a user.|
| :valid       | `input:valid {}`   | Input elements with a valid value.       |
| :visited     | `a:visited {}`     | All visited links.                       |

## Pseudo-element Selectors

| Syntax             | Example             | Description                              |
|--------------------|---------------------|------------------------------------------|
| ::after            | `p::after {}`      | Inserts content after content of <p>.    |
| ::before           | `p::before {}`     | Inserts content before content of <p>.   |
| ::first-letter     | `p::first-letter {}`| Selects first letter of every <p> element.|
| ::first-line       | `p::first-line {}`  | Selects first line of every <
