# NFT Preview Card Component

## Dive into the world of Non-Fungible Tokens (NFTs)!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Dive into the world of Non-Fungible Tokens (NFTs) with the NFT Preview Card Component! This component, presented in a card format, showcases various NFTs of different artists along with some of their specifications. Users can explore the beauty of NFTs in a beautiful, interactive, and responsive format. They can view the optimal layout depending on their device's screen size and experience hover states for interactive elements.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](./screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/SartHak-0-Sach/NFT-preview-card-component_frontend_project)
- Live Site URL: [Live Site](https://nft-preview-card-frontend-component.netlify.app/)

## My process

### Built with

- HTML5
- CSS3
- JavaScript

You will find all the required assets in the `/design` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### What I learned

Through this project I got to learn a lot of concepts and revise old ones which are the core of web development and are the foundation/fundamental of a website and should be known to all developers such as managing links/attributes/images in HTML, using flexbox, declaring variables, using variety of tag selectors etc and properties like inheritance from parent nodes to child nodes in design of a website in CSS, along with DOM manipulation and event listeners in JavaScript.

Following code snippet is one such example of implementation of JavaScript concept mentioned above-

```js
window.onload = (event) => {
    console.log("page is fully loaded");
  
      function hide(){
    const object_d = document.querySelector('.hov');
       object_d.style.visibility = 'hidden' ; 
      }
      function show(){
         const object_d = document.querySelector('.hov');
         object_d.style.visibility = 'visible';
      }
      document.querySelector('.img-hover').addEventListener('mouseover',show);
      document.querySelector('.img-hover').addEventListener('mouseout',hide);
  };
```

### Continued development

The continuously learning journey of a programmer never ends. This project made me realize that there are many concepts that I need to work upon including fundamentals like flex-box and its properties, to more complex concepts like working with fetch and async await in javascript. These areas are some that I think I need to work more upon in the upcoming future as they highlight some of the most significant regions of web development that are important for every developer to know of. 

These key points mentioned here will help me grow accountable and consistent towards improving at writing good quality code and be a successful full stack developer one day.

### Useful resources

- [Harkirat Singh course notes](https://github.com/SartHak-0-Sach/harkirat-singh-course_code_and_notes) - I have added notes of all lectures along with code and lecture insights of all weeks along with bonus lectures to help you all as much as I can.
- [My development code and notes](https://github.com/SartHak-0-Sach/cwh-web-dev-playlist_code_and_notes) - These are my notes that I made while working on my development skills in initial days and did these courses. Make sure to star the repository if you like it.✨💫
- [MDN documentation hover state for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - This is an amazing article which helped me finally understand hover states. I'd recommend it to anyone still learning this concept.

## Author

<b><strong>Sarthak Sachdev</strong></b>
- Website - [Sarthak Sachdev](https://itsmesarthak.netlify.app/)
- LeetCode - [@sarthak_sachdev](https://leetcode.com/u/sarthak_sachdev/)
- Twitter - [@sarthak_sach69](https://www.twitter.com/sarthak_sach69)

## Acknowledgments

I feel like the solutions provided on the website and the continuous doubt solving by industry experts on discord for free is something that is unmatched by anyone else and need to be acknowledged for their efforts in improving me as a developer by suggesting the best practices in your respective tech stack.

## Got feedback for me?

I love receiving feedback! I am always looking to improve my code and take up new innovative ideas to work upon. So if you have anything you'd like to mention, please email 'hi' at saarsaach30[at]gmail[dot]com.

If you liked this project make sure to spread the word and share it with all your friends.

**Dive into the NFT world!** 🚀🎨
