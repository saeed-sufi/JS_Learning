let tips = {
  bills: [124, 48, 268, 188],

  tipCalculater: function () {
    this.tips = [];
    this.totalPaidAmount = [];

    for (let i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        tipPercentage = 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        tipPercentage = 0.15;
      } else {
        tipPercentage = 0.1;
      }
      this.tips[i] = tipPercentage * this.bills[i];
      this.totalPaidAmount[i] = this.tips[i] + this.bills[i];
    }
  },
};

tips.tipCalculater()
console.log(tips);
