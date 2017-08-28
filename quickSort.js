function quicksort(arr){
	
	if(arr.length < 2) return arr;
	
	let wall = 0;
	let last = arr.length - 1;
	let pivot = arr[last];
	
	arr.forEach( (el, i) => {
		if(el < pivot) {
			[ arr[wall], arr[i] ] = [ arr[i], arr[wall] ];
			wall++;
		}	
	});
	
	let firstHalf = arr.slice(0, wall);
	let secondHalf = arr.slice(wall, -1);
	
	return quicksort(firstHalf).concat(pivot).concat(quicksort(secondHalf));
	
}

quicksort([0, 4, 8, -2, 10, 4, 3, 2]);
