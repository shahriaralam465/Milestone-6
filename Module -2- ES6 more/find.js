/**  
 * what does "find" do ?
 * 1. Iterates Over Array: Goes through each element in the array
 * 2. Uses Callback Function: Applies a provided function to test each element.
 * 3. Checks Condition: Returns the first element that satisfies the condition in the callback function.
 * 4. Returns Undefined: If no element meets the condition, it returns undefined.
 * 5. Stops After First Match: Once it finds a match, it stops searching and returns that element.
*/

const players = [76, 54, 56, 87, 89];

// const selected = players.find(player => player > 70);
const selected = players.find(player => player > 80);
console.log(selected);