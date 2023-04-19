function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let maxNum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[maxNum]) {
        maxNum = j;
      }
    }
    if (maxNum != i) {
      let temp = array[i];
      array[i] = array[maxNum];
      array[maxNum] = temp;
    }
    console.log(`Swapping ${array[maxNum]} with ${array[i]}`);
    console.log(`Current Array: ${array}\n`);
  }
  return array;
}

let testArray: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray.push(Math.round(Math.random() * 100));
}

console.log(`Starting Array: ${testArray}`);
console.log(selectionSort(testArray));