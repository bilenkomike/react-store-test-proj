# Start

To start the project

1. download the code/clone repo to your pc
2. run npm i/npm install in folder where project js
3. run npm start

# Bug Fixes

1.dangerouslySetInnerHTML should not be used
2.Please format your code properly, indentation, empty lines, not more than 1 empty line is allowed, the empty line at the end of each file, etc  
3.It should be possible to open the PDP of the out-of-stock product
4.Attributes should not be selectable in the cart and mini-cart
5.On reload I should have previously selected currency not default one
6.On reload, I should have previously added cart items to the cart
7.Prices and total should be displayed as valid prices (with 2 decimals after the dot), check different currencies
8.Categories ids should be added to the path name to have the opportunity to implement logic that allows users to stay on the selected category after reloading and/or sharing the link, the same with products
9.It should be possible to add the same product to the cart with different attributes. No delete from cart button should be present on PDP, the user should be able to add to the cart as many times as wants, the same for the green button on PLP
10.Review your requests, too many of them on reload on PLP (10), and some of them are fired twice, should be a maximum 3, do not fetch all categories and related products only category and related products of the category, the user is currently in.
11.Resolve terminal warnings

# Additional notes

## Due to 10th item in 'Bug Fixes List'

So the task was to minimize requests
Now there are 2 http requests, but due to no ability to send request to get one specific category, as the requests don't work (photoes below), I decided to make a single query for all products and categories'
<img width="1371" alt="image" src="https://user-images.githubusercontent.com/80154023/203564888-e35ff9eb-213f-4ca2-9ec7-3dd66f4c14de.png">
<img width="1384" alt="image" src="https://user-images.githubusercontent.com/80154023/203565056-e8bb340f-2cf7-40ee-beb7-7c906503d627.png">

