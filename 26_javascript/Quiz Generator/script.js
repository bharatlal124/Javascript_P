    //Create your function with the name shuffle.
    //It should return a function when call should give the shuffled array.
    //Do not modify the anything in the starter code.
function main() {

  const Subject1 = [
      "Question1",
      "Question2",
      "Question3",
      "Question4",
      "Question5"
    ];
    //Write your function here
    
      const shuflfe = (array) => {
  
    let shuffledArray = array.slice();

    return function () {
   
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }

      return [...shuffledArray];
    };
  };
    
    const func = shuflfe(Subject1);
    console.log(func());
    console.log(func());
    return shuflfe;
  }
main();
  