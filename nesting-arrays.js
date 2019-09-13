function canNest(arr1, arr2) {
	if (Math.min(...arr1) > (Math.min(...arr2))){
		return true 
	} else if (Math.max(...arr1) > (Math.max(...arr2))){
		return false
	} else {
		return false 
	}
}
