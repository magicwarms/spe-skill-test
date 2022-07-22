class SpeSkillTest {
  static digits: number | number[] | string[];
  static digitsArr?: number[];
  static word: string;

  setInput(
    digits: number | number[] | string[],
    digitsArr?: number[],
    word?: string
  ): void {
    SpeSkillTest.digits = digits;
    SpeSkillTest.digitsArr = digitsArr;
    SpeSkillTest.word = word as string;
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

  findNeedle(): number {
    const words: string[] = SpeSkillTest.digits as string[];
    const findWord: string = SpeSkillTest.word;
    let findIndex = 0;
    words.forEach((element: string, ind: number) => {
      if (element === findWord) findIndex = ind;
    });
    return findIndex;
  }

  blueOcean(): number[] {
    const numbers1 = SpeSkillTest.digits as number[];
    const removeDuplicate = numbers1.filter((item, ind, arr) => {
      return arr.indexOf(item) === arr.lastIndexOf(item);
    });

    if (removeDuplicate.length === numbers1.length) {
      numbers1.shift();
      return numbers1;
    } else {
      return removeDuplicate;
    }
  }
}

const skillTest1 = new SpeSkillTest();
skillTest1.setInput(111);
console.log({ skillTest1: skillTest1.narcissisticNumber() });

const skillTest2 = new SpeSkillTest();
skillTest2.setInput([160, 3, 1719, 19, 11, 13, -21]);
console.log({ skillTest2: skillTest2.parityOutlier() });

const skillTest3 = new SpeSkillTest();
skillTest3.setInput([1, 2, 3, 4, 6, 10], [5]);
console.log({ skillTest3: skillTest3.blueOcean() });

const skillTest4 = new SpeSkillTest();
skillTest4.setInput(["red", "blue", "yellow", "black", "grey"], [], "blue");
console.log({ skillTest4: skillTest4.findNeedle() });
