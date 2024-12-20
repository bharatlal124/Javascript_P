//Complete the findClassTopper function
//Do not alter alter the starter code. 
    //The object on which you will be working will be of this format.
    const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
    };
    function findClassTopper(studentMarks){
        //Implement your function here
        
    	let maxAverage = 0;
  		let topper = '';

  
  	for (const student in studentMarks) {
    
    const marks = studentMarks[student];
    const average = marks.reduce((sum, mark) => sum + mark, 0) /            marks.length;

   
    if (average > maxAverage) {
      maxAverage = average;
      topper = student;
    }
  }

  return topper;
        
        
    }
    console.log(findClassTopper(studentMarks));
    //Output : "Jane";