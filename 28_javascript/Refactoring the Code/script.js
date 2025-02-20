// Do not modify the main function
//Convert the functions present inside main to ES6 standard(i.e. to arrow function)  
function main() {
    let yearData = {};
    var createPerYearData = (year, total) => {
      yearData[year] = total;
    }
  
    var printReport = ()  => {
      console.log("Print Report");
    }
  
    var calculateTotalTillDate = (perYearBalance) => {
      let total = 0;
      for (let i = 0; i < perYearBalance.length; i++) {
        total += perYearBalance[i];
      }
      return total;
    }
  
    var adjustTotalOfYear = (year, adjustmentFactor) => {
      yearData[year] *= adjustmentFactor;
    }
    //Do not modify the code after this
    return {
      createPerYearData,
      printReport,
      calculateTotalTillDate,
      adjustTotalOfYear
    };
  }
  