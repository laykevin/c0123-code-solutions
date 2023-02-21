/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (typeof amount !== 'number' || amount < 1 || amount % 1 !== 0) {
    return false;
  }
  if (amount > 0) {
    this.transactions.push(deposit);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  if (typeof amount !== 'number' || amount < 1 || amount % 1 !== 0) {
    return false;
  }
  if (amount > 0) {
    this.transactions.push(withdrawal);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var funds = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      funds += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      funds -= this.transactions[i].amount;
    }
  }
  return funds;
};
