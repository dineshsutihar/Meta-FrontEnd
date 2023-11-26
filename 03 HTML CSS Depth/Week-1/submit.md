
# Understanding Form Submission: Action and Method

Forms are integral components of the web, used for various purposes like logging in, purchasing items, or ordering food. When you add a form to your webpage, you specify how it should be submitted using the `action` and `method` attributes.

## Action Attribute

The `action` attribute determines the web address where the form data will be sent. It can be a full URL, an absolute path, or a relative path.

- Full URL: Submits the form data to an external website.
  ```html
  <form action="https://example.com/login">
  </form>
  ```

- Absolute Path: Starts with a forward slash (/) and combines with the base address of the current website.
  ```html
  <form action="/login">
  </form>
  ```

- Relative Path: Combines with the current web address.
  ```html
  <form action="login">
  </form>
  ```

## Method Attribute

The `method` attribute specifies the HTTP method used to submit the form: GET or POST. If not provided, the form defaults to the GET method.

- GET Method: Encodes form data in the URL.
  ```html
  <form method="get">
  </form>
  ```

- POST Method: Sends form data as part of the HTTP request body.
  ```html
  <form method="post">
  </form>
  ```

When the form is submitted, the web server processes the data and responds, indicating the success or failure of the submission. Remember, forms are not the only way to submit data; developers often use JavaScript and other tools for more complex interactions.

As you learn, practice building HTML forms and explore different attributes to enhance your web development skills.
