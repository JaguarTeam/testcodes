
const dataset1 = [
    // Example 1
    {
      input: [1, 1],
      output: [2],
    },
    // Example 2
    {
      input: [4, 3, 2, 7, 8, 2, 3, 1],
      output: [5, 6],
    },
    {
      input: [2, 3, 1, 6, 5, 7],
      output: [4],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      output: [],
    },
    {
      input: [10, 5, 7, 2, 1, 3, 4, 6, 8, 9],
      output: [],
    },
    {
      input: [3, 5, 1, 2, 6],
      output: [4],
    },
    {
      input: [2, 3, 2, 4, 1],
      output: [5],
    },
    {
      input: [1, 1, 1, 1, 1, 1],
      output: [2, 3, 4, 5, 6],
    },

    {
      input: [6, 6, 6, 6, 6, 7],
      output: [1, 2, 3, 4, 5],
    },
    {
      input: [2, 3, 4, 1, 7, 8, 6, 10,11,12],
      output: [5, 9],
    },
  ];
  
  const dataset2 = [
    {
      input: [3, 3],
      target: 6,
      output: [0, 1],
    },
    {
      input: [3, 2, 4],
      target: 6,
      output: [1, 2],
    },
    {
      input: [2, 7, 11, 15],
      target: 9,
      output: [0, 1],
    },
    {
      input: [1, 2, 9, 4, 5],
      target: 7,
      output: [1, 4],
    },
    {
      input: [8, 10, 15, 12, 20],
      target: 25,
      output: [1, 2],
    },
    {
      input: [10, 20, 30, 41],
      target: 50,
      output: [1, 2],
    },
    {
      input: [5, 10, 15, 20],
      target: 20,
      output: [0, 2],
    },
    {
      input: [3, 2, 4, 6],
      target: 7,
      output: [0, 2],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8 ],
      target: 13,
      output: [5,6],
    },
    {
      input: [7, 5, 3, 1, 6, 4, 6],
      target: 9,
      output: [2, 4],
    },
    {
      input: [5, 5, 5, 5, 5],
      target: 10,
      output: [0, 1],
    },
  ];
  export{ dataset1, dataset2}