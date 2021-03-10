let someObject = {
    someValue: 5,
    someString: 'str'
}

let makeObjectDeepCopy = (obj) => {
    return {...obj};
}

let checkArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] - 0))
            return false;
        else {
            if (i === arr.length - 1) {
                return true;
            }
        }
    }
}

let checkInterval = (interval) => {
    if (!(interval - 0))  return false;
    else { return true; }
}

let selectFromInterval = (arr, interval1, interval2) => {
    let leftInterval, rightInterval;
    let resultArray = [];
    try {
        if (!checkArray(arr)) {
            throw new Error ('Массив должен состоять только из чисел!');
        }
        if (!checkInterval(interval1) || !checkInterval(interval2, arr.length)) {
            throw new Error ('Невалидные значения интервалов');
        }
        
        if (interval1 < interval2) {
            leftInterval = interval1;
            rightInterval = interval2;
        }
        else {
            leftInterval = interval2;
            rightInterval = interval1;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= leftInterval && arr[i] <= rightInterval)
                resultArray.push(arr[i]);
        }
        return resultArray;
    }
    catch(e) {}
}

let myIterable = {
    from: 1,
    to: '1asds5',
    [Symbol.iterator]() {
        try {
            if (this.from - 0 || this.from === 0) {
                this.current = this.from;
                if (!(this.to - 0) || !(this.to === 0)) {
                    throw new Error ('Невлидное значение to');
                }
                return this;
            }
            else {
                throw new Error ('Невлидное значение from');
            }            
        }
        catch (e) {
            console.log(e);
        }
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        }
        else {
            return { done:true };
        }
    }
};

for (let num of myIterable) {
}