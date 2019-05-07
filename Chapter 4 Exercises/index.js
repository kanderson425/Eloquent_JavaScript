// The Sum of a Range

function range(start, end) {
    let array = [];
    for (var i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }

function sum(arr) {
    let sum = 0;
    arr.forEach(function(element) {
        sum += element;
    })
}

sum([1,2,3,4,5,6,7,8,9,10])

// The Sum of a Range Bonus Assingment:
function range(start, end, step) {
    let array = [];
    if (start < end) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
    return array;
  } else {
    for (var i = start; i >= end; i += step) {
      array.push(i);
    }
    return array;
  }
}

// *The above function accounts for negative step values as well

// Reversing an Array
function reverseArray(array) {
    let newArray = [];
    for (var i = array.length-1; i >= 0; i --) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  reverseArray([1,2,3,4,5]);

// In Place
function reverseArrayInPlace(array) {
    for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
      let el = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = el;
    }
    return array;
  }
  reverseArrayInPlace([1,2,3,4,5]);

  //* A more efficient way to write this:
  let reverse = a => [...a].map(a.pop, a);

// A List 
function arrayToList(array) {
    var obj = {}
    for(var i = 0; i < array.length; i++) {
      if (i == array.length) {
        return obj.rest = null;
      }
      obj.value = array.splice(0, 1)[0];
      obj.rest = (array.length > 0) ? arrayToList(array) : null;
    }
    return obj;
    }
    arrayToList([10,20,30]);

    function listToArray(listValue){
        var arrayResult = [];
   
        while(listValue.list){
           arrayResult.push(listValue.value);
           listValue = listValue.list;
         }
   
       arrayResult.push(listValue.value);
   
       return arrayResult;
   }

// Deep Comparision
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;
    
    var propsInA = 0;
    var propsInB = 0;
    
    for (var prop in a) {
      propsInA += 1;
    }
    
    for (var prop in b) {
      propsInB += 1;
      if ( !(prop in a) || !deepEqual(a[prop], b[prop])) {
        return false;
      }
    }
    return propsInA == propsInB;
    }
    
    deepEqual({value: 5, key: "20"}, {value: 5, key: "20"});





