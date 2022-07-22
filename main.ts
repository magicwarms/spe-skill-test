class SpeSkillTest {
  static digits: number;

  constructor(digits: number) {
    SpeSkillTest.digits = digits;
  }

  narcissisticNumber(): boolean {
    const convertToString: string = SpeSkillTest.digits.toString();
    const digitLength = convertToString.length;
    let result = 0;

    convertToString.split("").forEach((digit) => {
      result += Math.pow(Number(digit), digitLength);
    });

    return result === SpeSkillTest.digits;
  }
}

const skillTest = new SpeSkillTest(111);

console.log({ result: skillTest.narcissisticNumber() });
