Certainly! Here's the information organized into a markdown (.md) file for better readability:

# iFrame Sandbox Cheat Sheet

The `<iframe>` element is used to embed an HTML page into another page. In addition to global attributes, specific attributes for the `<iframe>` element are listed below:

## `allow` Attribute

Specifies features or permissions available to the frame, such as access to microphone, camera, and other APIs.

```html
<iframe src="https://example.com/" allow="camera; microphone"></iframe>
```

## `name` Attribute

Specifies the name for the `<iframe>`.

```html
<iframe name="My Frame" width="400" height="300"></iframe>
```

## `height` and `width` Attributes

Specifies the height and width of the frame in CSS pixels.

```html
<iframe height="150" width="300"></iframe>
```

## `referrerpolicy` Attribute

Indicates which referrer information to send when loading the frame resource.

- `no-referrer`: Referrer header will not be sent.
- `origin`: Referrer limited to the origin of the referring page.
- `strict-origin`: Origin of the document is sent as referrer only for the same protocol security level (HTTPS to HTTPS).

## `sandbox` Attribute

Applies extra restrictions to the content in the `<iframe>`. Common permission tokens include:

- `allow-downloads`: Allows user to download an item.
- `allow-forms`: Allows user to submit forms.
- `allow-modals`: Allows opening modal windows.
- `allow-orientation-lock`: Lets the resource lock the screen orientation.
- `allow-popups`: Allows popups to open.
- `allow-presentation`: Allows a presentation session to start.
- `allow-scripts`: Lets the resource run scripts without creating popup windows.

Example:

```html
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"></iframe>
```

## `src` Attribute

Specifies the URL of the page to embed in the `<iframe>`. Use `about:blank` to embed an empty page.

## `srcdoc` Attribute

Specifies inline HTML to embed in the `<iframe>`. Overrides the `src` attribute.

Example:

```html
<iframe srcdoc="<p>My inline HTML</p>"></iframe>
```

## `loading` Attribute

Specifies if the iframe should be loaded immediately (eager) or when displayed in the browser (lazy).

Example:

```html
<iframe src="my_iframe_src.html" loading="lazy"></iframe>
```

## `title` Attribute

Adds a description to the iframe for accessibility purposes.

Example:

```html
<iframe src="history.html" title="An embedded document about the history of my family"></iframe>
```

These attributes provide control and flexibility when embedding content using `<iframe>`.
