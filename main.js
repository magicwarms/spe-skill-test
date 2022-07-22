var SpeSkillTest = /** @class */ (function () {
    function SpeSkillTest() {
    }
    // constructor(
    //   digits: number | number[] | string[],
    //   digitsArr?: number[],
    //   word?: string
    // ) {
    //   SpeSkillTest.digits = digits;
    //   SpeSkillTest.digitsArr = digitsArr;
    //   SpeSkillTest.word = word as string;
    // }
    SpeSkillTest.prototype.setInput = function (digits, digitsArr, word) {
        SpeSkillTest.digits = digits;
        SpeSkillTest.digitsArr = digitsArr;
        SpeSkillTest.word = word;
    };
    SpeSkillTest.prototype.narcissisticNumber = function () {
        var convertToString = SpeSkillTest.digits.toString();
        var digitLength = convertToString.length;
        var result = 0;
        convertToString.split("").forEach(function (digit) {
            result += Math.pow(Number(digit), digitLength);
        });
        return result === SpeSkillTest.digits;
    };
    SpeSkillTest.prototype.parityOutlier = function () {
        var numbers = SpeSkillTest.digits;
        var arrGanjil = [];
        var arrGenap = [];
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                arrGenap.push(numbers[i]);
            }
            else {
                arrGanjil.push(numbers[i]);
            }
        }
        if (arrGanjil.length === numbers.length)
            return false;
        return arrGenap.length == 1 ? arrGenap[0] : arrGanjil[0];
    };
    SpeSkillTest.prototype.findNeedle = function () {
        var words = SpeSkillTest.digits;
        var findWord = SpeSkillTest.word;
        var findIndex = 0;
        words.forEach(function (element, ind) {
            if (element === findWord)
                findIndex = ind;
        });
        return findIndex;
    };
    SpeSkillTest.prototype.blueOcean = function () {
        var numbers1 = SpeSkillTest.digits;
        var removeDuplicate = numbers1.filter(function (item, ind, arr) {
            return arr.indexOf(item) === arr.lastIndexOf(item);
        });
        if (removeDuplicate.length === numbers1.length) {
            numbers1.shift();
            return numbers1;
        }
        else {
            return removeDuplicate;
        }
    };
    return SpeSkillTest;
}());
var skillTest1 = new SpeSkillTest();
skillTest1.setInput(111);
console.log({ skillTest1: skillTest1.narcissisticNumber() });
var skillTest2 = new SpeSkillTest();
skillTest2.setInput([160, 3, 1719, 19, 11, 13, -21]);
console.log({ skillTest2: skillTest2.parityOutlier() });
var skillTest3 = new SpeSkillTest();
skillTest3.setInput([1, 2, 3, 4, 6, 10], [5]);
console.log({ skillTest3: skillTest3.blueOcean() });
var skillTest4 = new SpeSkillTest();
skillTest4.setInput(["red", "blue", "yellow", "black", "grey"], [], "blue");
console.log({ skillTest4: skillTest4.findNeedle() });
