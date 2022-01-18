// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(height>0&&mass>0){
        var bim=parseInt((mass/(height*height)))
        return bim
    }else{
        var res="INVALID INPUT"
        return res
    }
}

module.exports = BMICalculator;
