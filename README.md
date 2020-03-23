# Introduction

Thanks for your interest in working with The Taproom! This is our frontend developer technical test. Read through this readme in full so you know what you'll be doing.

# Installation

Make sure you have the following dependencies are **globally installed**:
* [themekit](https://shopify.github.io/themekit/)
* [Parcel](https://parceljs.org/getting_started.html)
* [Concurrently](https://www.npmjs.com/package/concurrently#install)

Once both dependencies are installed, connect the repo to your development store using the config.yml file included (rename `config.example.yml` to `config.yml`).

Finally, run the command below:
```sh
$ theme deploy
$ ./bin/watch.sh
```

***

# Challenge

### Introduction
This is the technical test for our frontend developer position. We have created a [Figma design file](https://www.figma.com/file/lNVNe5OHovFYInyK6sMZVL/The-Taproom-Dev-Test?node-id=0%3A1) with all design elements for desktop and mobile ready for you to code. Your task is to take these designs and build a Shopify theme for this specific page.

***

### Shopify Buildout: The details
This is where you'll be spending most of your time, so we want to make sure you're strong on the Shopify theme development front.

#### Mega Menu
When hovering over the first "Category" link, a mega menu should appear with four groups of links and an image with a caption.

#### Quick View
Clicking on the "Quick View" button (which should appear when hovering over a product) should trigger a modal with product information, and this "Add to Cart" button should add the item to the cart without closing the modal and update the cart state to reflect the new cart count.

#### Featured Product Slider
Create a Shopify section to preview a collection of products in a slider. You can choose which slider script you'd like to use, as long as the website matches the design.

***

### What we'll be looking for

#### On the UX/UI side...
* Your theme should be as close to the design as possible. We're looking for you to use the same fonts (from Google Fonts), sizes, letter spacing, element spacing, etc.
* We'll be testing your theme at all browser widths, so the design should flow regardless of browser width.
* Don't worry about links going to specific pages. All we'll be testing are the elements and functionality listed above.

#### On the development side...
* Your code should be clean and consistent.
* We'll be looking closely at your preferred methods for JavaScript and CSS. We're fans of ES6 and keeping libraries to a minimum. **use the /scripts directory to compile your es6**.
* Code should be placed in the appropriate files.

### Get started
To get started, you'll need to create a Shopify development store. Please see intallation section at the top of this readme for instructions on how to deploy this theme to your development store.

Build out the page with the requirements mentioned above. Create a GitHub repo to share with us and send over the myshopify URL so we can request collaborator access.

### Questions?
If you have any questions or run into issues, send an email to [kelly@thetaproom.com](mailto:kelly@thetaproom.com).








