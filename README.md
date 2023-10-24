Course Registration


Description
This project is a simple web application that allows users to manage a course cart with the following features:

Add Items to Cart: Users can add items to their cart. Each cart item includes the following information:

Image: A visual representation of the item.
Description: A brief description of the item.
Credit Amount: The cost of the item in credits.
Calculate Total Credits: Users can click a button to calculate the total credits in their cart. This will sum up the credit amounts of all items in the cart.

Credit Limit: There is a maximum credit limit of 20 credits. Users cannot add more items to their cart if the total credits exceed this limit.

Usage:
Start by adding items to your cart. You can click an "Select" button on each item to include it in your course cart.

To check the total credits in your cart, click the "Calculate Total Credits" button.

The application will prevent you from adding more items to your cart if the total credits exceed 20.

Enjoy course with your credit limit in mind!




.Discuss how you managed the state in your assignment project.

Description:

This project is a simple web application for course registration. It allows users to select courses, add them to their cart, and keep track of the total credit hours selected. The application also enforces a credit limit of 20 credits and provides a notification system using react-toastify.

State Management:

In this project, state management is achieved using React and the useState hook. Here's how state is managed:



addCredit State: This state is used to keep track of the courses added to the cart. It's initialized as an empty array and is updated when a user adds a course to the cart using the handleClick function.
const [addCredit, setAddCredit] = useState([]);

total State: This state keeps track of the total credit hours selected by the user. It is updated whenever a course is added or removed from the cart.
const [total, setTotal] = useState(0);

remaining State: This state calculates the remaining credit hours the user can add to the cart without exceeding the 20-credit limit.
const [remaining, setRemaining] = useState(0);