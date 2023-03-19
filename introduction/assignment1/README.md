# Assignment1

*[HTML](./index.html)*  
given an HTML page containing scripts and our task to write good comments on this script in these comments, you will write which script will be correct to affect on page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      // Code One
      document.getElementById("el").style.color = "red";
    </script>
    <script>
      // Code Two
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      // Code Three
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>
```
