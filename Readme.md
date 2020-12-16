# accent-color-theme-finder
simple tool to find your minimalistic dark/light theme incl. accent color

## how it works
Selecting a color value will output a light/dark background and an accent color.\
The background colors will be a really dark/light shade of the accent color that works well as a background.

If you click the save button the current theme will be copied to your clipboard. A theme looks like this:

``` css
  --accent: hsl(193,70%,50%);
  --bgdark: hsl(193,70%,3%);
  --bglight: hsl(193,70%,97%);
  --secondary1: hsl(313,70%,50%);
  --secondary2: hsl(73,70%,50%);
```
  
The two secondary colors are generated as a triade of the accent color.

![Screenshot](/screenshot1.png)
   