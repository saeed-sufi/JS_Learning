function tipCalculations(bills) {
  this.bills = bills;
  this.tipsAverage = 0;
  this.tip = [];
  this.totalPaidAmount = [];

  this.tipCalculater = function() {
    let bill = 0;
    let tipPercent = 0;

    for (let i = 0; i < this.bills.length; i++) {
      bill = this.bills[i];

      if (bill < 50) {
        tipPercent = 0.2;
      } else if (bill >= 50 && bill < 200) {
        tipPercent = 0.15;
      } else {
        tipPercent = 0.1;
      }
      this.tip[i] = tipPercent * bill;
      this.totalPaidAmount[i] = tipPercent * bill + bill;
    }
  }

  this.tipsAverageCalculater = function () {
    let sum = 0;
    for (let i = 0; i < this.tip.length; i++) {
      sum += this.tip[i]
    }
    this.tipsAverage = sum / this.tip.length
  }

  this.tipCalculater()
  this.tipsAverageCalculater()
}

let johnBills = new tipCalculations([123, 12, 14, 89, 210])
console.log(johnBills);
