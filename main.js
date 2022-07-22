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
    return SpeSkillTest;
}());
var skillTest = new SpeSkillTest(111);
console.log({ result: skillTest.narcissisticNumber() });
