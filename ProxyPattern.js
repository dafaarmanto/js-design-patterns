function CryptoAPI() {
  this.getValue = function (coin) {
    console.log('Calling API...');
    switch (coin) {
      case 'Bitcoin':
        return '$8.500';
      case 'Ethereum':
        return '$7.500';
      case 'DogeCoin':
        return '$5.000';
    }
  };
}

// const api = new CryptoAPI();

// console.log(api.getValue('Bitcoin'));
// console.log(api.getValue('Ethereum'));
// console.log(api.getValue('DogeCoin'));

function CryptoAPIProxy() {
  this.api = new CryptoAPI();
  this.cache = {};

  this.getValue = function (coin) {
    if (this.cache[coin] == null) this.cache[coin] = this.api.getValue(coin);

    return this.cache[coin];
  };
}

const proxy = new CryptoAPIProxy();

console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Ethereum'));
console.log(proxy.getValue('DogeCoin'));
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Ethereum'));
console.log(proxy.getValue('DogeCoin'));
