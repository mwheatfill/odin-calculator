# JS Calculator Project
This is a basic calculator designed to meet the core requirements of the project outlined in the JS Fundamentals course of The Odin Project.

# Live Website
https://mwheatfill.github.io/odin-calculator/
# Potential improvements
* Currently the calculator looks really nice, but is not responsive. It has a fixed width, but also has the ability to shrink beyond a reasonable amount which skews the flexbox items.
* I have a feeling there are more succint ways of approaching some of the conditional logic. I've refactored a bit, but will inspect other solutions now that I have a working model, and may improve the code if I can fully understand certain patterns and then implement them.
* Implement extra credit items:
  * Add a "backspace" button so a user can undo if they click the wrong number. In theory this would be simple to account for one character, but to account for all characters in the display would most likely involve storing each character in an array that could then be referenced to remove that character and update the display. A simpler option could simply be able to run a substring on the display for each character, but would not address updating the expression object that contains the current operation to be evaluated.
  * Add keyboard support. This should be straight forward to add an additional event listener to each key under the document object, and then filter specific keys based on a data value. The basic implementation of this is demonstrated in [Wes Bos's Javascript 30 Drum Kit exercise]([https://link](https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)). CSS would need to be refactored into JS potentially to still get the hover and click effects.
