/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count = 0;
    
    while(min <= max )
    {
        guess = Math.floor((min + max)/2);
        count = count + 1;
        
        if(array[guess] === targetValue)
        {
            println("no of guess :" + count);
            return guess;
            
        }
        else if(array[guess] < targetValue)
        {
            min = guess + 1;
        }
        else
        {
            max = guess - 1;
        }
        println("guess index :" + guess);
        
}
    
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
		var result = doSearch(primes, 73);
println("Found prime at index " + result);
Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 79), 21);
Program.assertEqual(doSearch(primes, 83), 22);
