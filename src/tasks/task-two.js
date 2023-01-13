// Pythagorean tiles

// https://projecteuler.net/problem=139

const LIMIT = 100000000;

let count = 0;
const mlimit = Math.floor(Math.sqrt(LIMIT));
for (let i = 2; i <= mlimit; i++) {
  const i2 = i * i;
  for (let j = 1; j < i; j++) {
    if ((i + j) % 2 == 0 || gcd(j, i) > 1) {
      continue;
    }
    const j2 = j * j;
    const a = i2 - j2;
    const b = 2 * i * j;
    const c = i2 + j2;
    const perimeter = a + b + c;
    if (perimeter >= LIMIT) {
      break;
    }
    const tiling = c / (b - a);
    if (tiling != Math.floor(tiling)) {
      continue;
    }
    let multiple = perimeter;
    while (multiple <= LIMIT) {
      count++;
      multiple += perimeter;
    }
  }
}

console.log(count);

function gcd(int1, int2) {
  if (int1 > int2) {
    let tmp = int2;
    int2 = int1;
    int1 = tmp;
  }

  while (int1) {
    let tmp = int2;
    int2 = int1;
    int1 = tmp % int1;
  }

  return int2;
}
