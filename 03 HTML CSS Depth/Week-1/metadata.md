# Metadata Cheat Sheet

## HTML `<meta>` Tags 

Meta tags can be used to convey information to search engines to better categorize your pages. This cheat sheet can be used as a reference when building your web applications. 

### Structure of a Meta Tag

- **Name**: The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. Example: `<meta name="author" content="name">` to state the author of the page. 

- **Content**: The content field specifies the property's value. Example: `<meta name="language" content="english">`, to specify the language of the webpage to search engines. 

- **Charset**: This field lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8. Example: `<meta charset="UTF-8">`.

- **HTTP-equiv**: This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. Example: `<meta http-equiv="refresh" content="30">` to instruct the browser to refresh the page every 30 minutes.

## Basic Meta Tags (Meta Tags For SEO)

- `<meta name="description"/>` provides a brief description of the web page.
- `<meta name="title"/>` specifies the title of the web page.
- `<meta name="author" content="name">` specifies the author of the web page.
- `<meta name="language" content="english">` specifies the language of the web page.
- `<meta name="robots" content="index,follow" />` tells search engines how to crawl or index a certain page.
- `<meta name="google"/>` tells Google not to show the sitelinks search box for your page when showing search results.
- `<meta name="googlebot" content="notranslate" />` tells Google you don’t want to provide an automatic translation for your page if the user uses a different language.
- `<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />` specifies the last modified date and time on which you have made certain changes.
- `<meta name="rating" content="safe for kids">` specifies the expected audience for your page.
- `<meta name="copyright" content="Copyright 2022">` specifies a Copyright.

## `<meta http-equiv="..."/>` Tags

- `<meta http-equiv="content-type" content="text/html">` specifies the format of the document returned by the server.
- `<meta http-equiv="default-style"/>` specifies the format of the styling document.
- `<meta http-equiv="refresh"/>` specifies the duration of the page before it’s considered stale.
- `<meta http-equiv="Content-language"/>` specifies the language of the page.
- `<meta http-equiv="Cache-Control" content="no-cache">` instructs the browser how to cache your page.

## Responsive Design/Mobile Meta Tags

- `<meta name="format-detection" content="telephone=yes"/>` indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call.
- `<meta name="HandheldFriendly" content="true"/>` specifies that the page can be properly visualized on mobile devices.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` specifies the area of the window in which web content can be seen.