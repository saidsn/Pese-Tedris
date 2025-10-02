let myMoney = Number(prompt("Enter your money"));

let UI_Context = `1-View balance\n2-Get Money\n3-Add Money\n4-Exit`;

let operation = Number(prompt(UI_Context));

switch (operation) {
  case 1:
    alert(`Your balance is ${myMoney} Azn`);
    break;
  case 2:
    let getMoney = Number(prompt("Enter get money"));

    if (getMoney <= myMoney) {
      myMoney -= getMoney;
      alert(`You get ${getMoney} Azn, You current balance ${myMoney} Azn`);
    } else {
      alert(
        `Your current balance ${myMoney} Azn, Your missing money is ${
          getMoney - myMoney
        } Azn`
      );
    }
    break;
  case 3:
    let addMoney = Number(prompt("Enter add money"));
    let maxMoney = 5000;
    if (addMoney <= 5000) {
      myMoney += addMoney;
      alert(`You add ${addMoney} Azn, You current balance is ${myMoney} Azn`);
    } else {
      alert(`You are only add max ${maxMoney} Azn, At the moment you want to add ${addMoney}, You additinal money ${addMoney - maxMoney}`);
    }
    break;
  case 4:
    alert("Goodbye");
    break;
  default:
    alert("Invalid operation");
    break;
}
