# Junior-Front-end-Web-Developer-Task

### - [x] Build a simple site which displays this picture.
I wanted the image to be exactly in the centre of the screen regardless of size. As there is no other content on the page, I set the position property to fixed. This positioned the image relative to the viewport, which meant it would always stay in the same place. I then set the top and left properties to 50% to position the upper left corner exactly to centre of the page. The translate value for transform is dependent on the size of the element, so setting the x and y values to -50% centred the image perfectly. Now when the viewport is resized, the image will shrink/expand to fit the size of the viewport, always centred on the screen.
A simple 8px white border with a box shadow on a white background frames the image nicely and doesn’t distract the user from the image being displayed. 

### - [x] Add a feature of your choice to the site – Related image search
If a user clicks the image, an AJAX call will be made to Flickr's public API. The image will then be replaced by the latest photo posted to the site that shares a tag with the title attribute of the original image (in this case "otter"). Each time a user clicks, a new image will be displayed, until all related photos have been displayed and the image resets.

### - [x] -BONUS POINTS- Only if you’ve got time! On mobile/tablet prompt the user to put their device in landscape orientation in order to display the picture.
The orientation media query feature is used create a breaking point that displays a prompt any time a device is in portrait mode (i.e. viewport H > Viewport W). The user also has the option to ignore this warning and close the prompt using the button provided. 
