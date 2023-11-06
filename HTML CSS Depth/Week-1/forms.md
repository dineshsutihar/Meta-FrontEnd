## Input Types Cheat Sheet

### Button
Displays a clickable button, commonly used in forms to trigger scripts.

**HTML:**
```html
<input type="button" value="Click me" onclick="msg()" />
```

**Alternate Method:**
```html
<button onclick="alert('Are you sure you want to continue?')">
    <img src="https://yourserver.com/button_img.jpg" alt="Submit the form" height="64" width="64">
</button>
```

### Checkbox
Allows users to select one or more options from a limited set of choices.

**HTML:**
```html
<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>

<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>
```

### Radio
Displays a single-select option within a group of related options.

**HTML:**
```html
<input type="radio" id="light" name="theme" value="Light">
<label for="light">Light</label>

<input type="radio" id="dark" name="theme" value="Dark">
<label for="dark">Dark</label>
```

### Submit
Creates a button to submit form data to a server.

**HTML:**
```html
<form action="myserver.com" method="POST">
    <!-- form fields -->
    <input type="submit" value="Submit" />
</form>
```

### Text
Defines a single-line text field for user input.

**HTML:**
```html
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname">
```

### Password
Creates a password input field, hiding the entered characters.

**HTML:**
```html
<label for="pwd">Password:</label>
<input type="password" id="pwd" name="pwd">
```

### Date
Allows users to enter a date without a specific time.

**HTML:**
```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```

### Datetime-local
Enables users to input both date and time.

**HTML:**
```html
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">
```

### Email
Accepts an email address and validates it automatically upon submission.

**HTML:**
```html
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">
```

### File
Allows users to upload files from their computer.

**HTML:**
```html
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">
```

### Hidden
A hidden input whose value is submitted to the server but not displayed.

**HTML:**
```html
<input type="hidden" id="custId" name="custId" value="3487">
```

### Image
Defines an image as a clickable submit button.

**HTML:**
```html
<input type="image" src="submit_img.png" alt="Submit" width="48" height="48">
```

### Number
Allows users to enter numerical values with specified constraints.

**HTML:**
```html
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

### Range
Displays a slider to select a numerical value within a specified range.

**HTML:**
```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```

### Reset
Resets the form fields to their default values.

**HTML:**
```html
<input type="reset">
```

### Search
Creates a text field for entering search queries.

**HTML:**
```html
<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">
```

### Time
Allows users to input a time value (hours and minutes).

**HTML:**
```html
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```

### Tel
Enables users to input a telephone number with optional validation.

**HTML:**
```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```

### Url
Accepts a URL and performs automatic validation.

**HTML:**
```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```

### Week
Allows users to input a week-year number and year.

**HTML:**
```html
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```

### Month
Enables users to input a month and year.

**HTML:**
```html
<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```

This cheat sheet provides a quick reference for choosing the appropriate input type for your HTML forms. Remember to use the associated `<label>` element for each input field to enhance accessibility.