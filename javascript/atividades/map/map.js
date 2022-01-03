 
// === Map com this === //

const orange = {
	price: 3,
};

const apple = {
	price: 2,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

// function mapArray() {
// 	const array = [1, 2, 3, 4, 5];

// 	return array.map(function (item) {
// 		return item * this.price;
// 	}, apple);
// }

const nums = [1, 2];

console.log('this -> orange', mapComThis(nums, orange));
console.log('this -> apple', mapComThis(nums, apple));

// it's bringing NAN. I've checked, tried but I don't know what's happening. She doesn't show it on the class.
