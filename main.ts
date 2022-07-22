class SpeSkillTest {
  static digits: number | number[];

  constructor(digits: number | number[]) {
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

  parityOutlier(): boolean | number {
    const numbers = SpeSkillTest.digits as number[];

    let arrGanjil: number[] = [];
    let arrGenap: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        arrGenap.push(numbers[i]);
      } else {
        arrGanjil.push(numbers[i]);
      }
    }
    if (arrGanjil.length === numbers.length) return false;

    return arrGenap.length == 1 ? arrGenap[0] : arrGanjil[0];
  }
}

// const skillTest = new SpeSkillTest(111);
const skillTest = new SpeSkillTest([160, 3, 1719, 19, 11, 13, -21]);

// console.log({ result: skillTest.narcissisticNumber() });
console.log({ result: skillTest.parityOutlier() });
