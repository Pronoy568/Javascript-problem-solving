// Task 3: Write a JavaScript program to find the most frequent
// element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(array) {
    const frequencyMap = {};

    array.forEach((element) => {
      if (frequencyMap[element]) {
        frequencyMap[element]++;
      } else {
        frequencyMap[element] = 1;
      }
    });
  
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (const element in frequencyMap) {
      if (frequencyMap[element] > maxFrequency) {
        mostFrequentElement = element;
        maxFrequency = frequencyMap[element];
      }
    }
  
    return mostFrequentElement;
  }
  
  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5, 3];
  const result = findMostFrequentElement(array);
  
  console.log("Example Output:", result);
  