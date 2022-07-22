var SpeSkillTest = /** @class */ (function () {
    function SpeSkillTest(digits) {
        SpeSkillTest.digits = digits;
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
    return SpeSkillTest;
}());
var skillTest = new SpeSkillTest([160, 3, 1719, 19, 11, 13, -21]);
// console.log({ result: skillTest.narcissisticNumber() });
console.log({ result: skillTest.parityOutlier() });
