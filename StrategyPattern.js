function FEDEX() {
  this.calculate = (package) => {
    return 2.45;
  };
}

function JNE() {
  this.calculate = (package) => {
    return 1.25;
  };
}

function JNT() {
  this.calculate = (package) => {
    return 3.0;
  };
}

function Shipping() {
  this.company = '';
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new FEDEX();
const jne = new JNE();
const jnt = new JNT();
const shipping = new Shipping();
const package = { from: 'Bandung', to: 'Sukabumi', weight: 1.99 };

shipping.setStrategy(fedex);
console.log('Fedex: ' + shipping.calculate(package));

shipping.setStrategy(jne);
console.log('JNE: ' + shipping.calculate(package));

shipping.setStrategy(jnt);
console.log('JNT: ' + shipping.calculate(package));
