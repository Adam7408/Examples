// Task-C
function checkSimilarity(a, b) { 
    const harflar1 = a.split('').sort().join(); 
    const harflar2 = b.split('').sort().join(); 
   
    if (harflar1 === harflar2) { 
        return true; 
    } else { 
        return false; 
    } 
  } 
 
const result = checkSimilarity("laepp", "apple"); 
console.log(result);