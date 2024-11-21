let PhysicsMarks =+ prompt('Enter your physics marks here out of 100');
let ChemistryMarks =+ prompt('Enter your chemistry marks here out of 100');
let BiologyMarks =+ prompt('Enter your bio marks here out of 100');
let MathMarks =+ prompt('Enter your maths marks here out of 100');

let result=PhysicsMarks + ChemistryMarks + BiologyMarks + MathMarks
let finalresult = result/400 * 100;
console.log(finalresult + "" + " % ");

if(finalresult >=90){
    console.log("Congratulations A+ grade");
    
} else if(finalresult >= 80){
    console.log("Congratulations A+ grade");
    
} else if(finalresult >= 70){
    console.log("Congratulations A grade");
    
} else if (finalresult >= 60){
    console.log("Congratulations B grade");

}  else {  
    console.log("you are failed");
}