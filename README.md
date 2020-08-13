# ND - Challenge in React Native


How to use it?

Click on the central button of the first screen, enter cocktail to search the top input of the second screen, and the results will appear in a list. Press the cancel button to clear the list, and the arrow (icon) back to return to the first screen.




How to Install? 
Clone this repository and open a terminal into the resulting folder.  Then type npm install.



How to Run it?
Android: Open a terminal in the main folder, and type npx react-native run-android
Ios: Open a terminal in the main folder, and type npx react-native run-ios




Librarys

To manage the state globally i used Redux, with thunk.
Axios for making the api calls.
React Navigation 4x to navigate between screens.  
React Native Vector Icons to use some basic icons such as the "Back" arrow.





How to make the list more performant?

Well, Flatlist is already performant thanks to the Lazy Load of renderItems. But it could be made more efficient by adding pages to the results, and even better by increasing the minimum number of characters before starting a query to the api, or by putting some kind of delay.
