var SpeSkillTest = /** @class */ (function () {
    function SpeSkillTest(digits, digitsArr) {
        SpeSkillTest.digits = digits;
        SpeSkillTest.digitsArr = digitsArr;
    }
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
    SpeSkillTest.prototype.blueOcean = function () {
        var numbers1 = SpeSkillTest.digits;
        var numbers2 = SpeSkillTest.digitsArr;
        // let result: number[] = [];
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
// const skillTest = new SpeSkillTest(111);
// const skillTest = new SpeSkillTest([160, 3, 1719, 19, 11, 13, -21]);
var skillTest = new SpeSkillTest([1, 2, 3, 4, 6, 10], [5]);
// console.log({ result: skillTest.narcissisticNumber() });
// console.log({ result: skillTest.parityOutlier() });
console.log({ result: skillTest.blueOcean() });
