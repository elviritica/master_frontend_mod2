console.log("************** DELIVERABLE 05 *********************");

function getRandomBoolean(): boolean {
  return Math.random() >= 0.5;
}

class SlotMachine {
  price: number = 0;
  wheelA: boolean;
  wheelB: boolean;
  wheelC: boolean;

  play() {
    this.price += 1;
    this.wheelA = getRandomBoolean();
    this.wheelB = getRandomBoolean();
    this.wheelC = getRandomBoolean();

    if (this.wheelA && this.wheelB && this.wheelC === true) {
      console.log(`Congratulations!!!. You won ${this.price} coins!!`);
      this.price = 0;
    }
    console.log("Good luck next time!!");
  }
}

const machine = new SlotMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
