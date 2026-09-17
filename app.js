const priceApel = 5000;
const pricePisang = 10000;
const totalApel = 3;
const totalPisang = 2;
const discount = 0.1;
const normalPrice = totalApel * priceApel + totalPisang * pricePisang;
const discountPrice = normalPrice * discount;
const price = normalPrice - discountPrice;
console.log(price);

const hasChildren = false;
const isStudent = true;
const isEmployed = false;
const canRideBike = true;
const hasPets = false;
const isTall = true;
const hasSim = true

if (hasSim) {
  console.log('Kamu boleh mengemudi');
}
const hasPassport = false
if (hasPassport) {
  console.log('Kamu boleh ke luar negeri');
} else {
  console.log('Kamu TIDAK boleh ke luar negeri');
}
const isSoldOut = false
if (isSoldOut) {
  console.log('Produk sudah habis');
} else {
  console.log('Produk masih tersedia');
}

if (1 !== 2) {
  console.log('Benar');
} else {
  console.log('Salah');
}
if (5 > 1) {
  console.log('Benar');
} else {
  console.log('Salah');
}

if (10 > 5) {
  console.log('Benar');
} else {
  console.log('Salah');
}
if (8 < 4) {
  console.log('Benar');
} else {
  console.log('Salah');
}
if (-1 >= 2) {
  console.log('Benar');
} else {
  console.log('Salah');
}
if (0.5 <= 0) {
  console.log('Benar');
} else {
  console.log('Salah');
}

console.log(5 > 2);
console.log(10 < 0);
console.log(-1 >= 2);

const test = 1 === 1;
console.log(test);
const value = 'a' === 'a'
console.log(value);
console.log('abc' === 'abc');
console.log(false !== true);
console.log('cab' === 'cba');
console.log(false === false);

const color = 'hitam';
if (color === 'merah') {
  console.log('berhenti');
} else {
    if (color === 'kuning') {
    console.log('hati-hati');
  } else {
    if (color === 'hijau') {
      console.log('GO!');
    } else {
      console.log('warna tidak valid');
    }
  }
}

const number = 67591;
if (number < 10) {
  console.log('satuan');
} else if (number < 100) {
  console.log('puluhan');
} else if (number < 1000) {
  console.log('ratusan');
} else if (number < 10000) {
  console.log('ribuan');
} else {
  console.log(number)
}

const product = {
  name: 'pisang',
  weighr: 5,
  isSoldOut: false
};
const person = {
  name: 'irin',
  age: 18,
  yearOfBorn: 2007,
  isEmployed: false,
};
console.log(person);
console.log(person.isEmployed);
const text = person.name + ' lahir pada tahun ' + person.yearOfBorn;
console.log(text);

const avengers = [
  'iron man',
  'hulk',
  'black widow',
  'captain america',
  'thor'
];
const textArray = 'ada ' + avengers.length + ' anggota avengers';
console.log(textArray);
const hasThor = avengers.includes('thor');
console.log(hasThor);
console.log (avengers);
console.log(avengers[0]);

const usernames = [
  'yandy',
  'dimas',
  'mita',
  'irin'
];
const textUsername = 'ada total ' + usernames.length + ' username';
console.log(textUsername);
const newUsername = 'irin';
const isTaken = usernames.includes(newUsername);
if (isTaken) {
  console.log('username sudah digunakan');
} else {
  console.log('username tersedia');
}

const favoriteFood = [
  'indomie',
  'nasi goreng',
  'mie ayam'
];
console.log('makanan favoritku yang kedua adalah ' + favoriteFood[1]);

const x = undefined;
const y = null;
console.log(typeof y);
console.log(x !== y);
const pet = null;
const shoe = 'nike';
const bike = null;
const motorcycle = 'scoopy';
const car = null;
const boat = null;
const airplane = null;
const object = {a: 'a'};
const array = ['a', 'b'];

function sayHappyBirthday(name) {
  console.log('selamat ulang tahun, ' + name + '!');
};
sayHappyBirthday('irin');
function sayMyName() {
  console.log('Khairina Rahma');
};
sayMyName();
sayMyName();
sayMyName();
sayMyName();

function logNumberType(number) {
  if (number < 0) {
    console.log('negatif');
  } else if (number> 0) {
    console.log('positif');
  } else {
    console.log('netral');
  }
};
logNumberType(1);

function sayLolosSNBT(name) {
  console.log(name + ' lolos SNBT 2026');
};

sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');
sayLolosSNBT('nayla');