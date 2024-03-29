/**
 * https://adventofcode.com/2019/day/1
 */
const modules = [
  102473, 84495, 98490, 68860, 62204, 72810, 65185, 145951, 77892, 108861, 70764, 67286, 74002,
  80773, 52442, 131505, 107162, 126993, 59784, 64231, 91564, 68585, 98735, 69020, 77332, 60445,
  65826, 111506, 95431, 146687, 135119, 86804, 95915, 85434, 111303, 148127, 132921, 136213, 89004,
  143137, 144853, 143017, 104386, 100612, 54760, 63813, 144191, 84481, 69718, 84936, 98621, 124993,
  92736, 60369, 137284, 101902, 112726, 51784, 126496, 85005, 101661, 137278, 136637, 90340, 100209,
  53683, 50222, 132060, 98797, 139054, 135638, 100632, 137849, 125333, 103981, 76954, 134352, 74229,
  93402, 62552, 50286, 57066, 98439, 120708, 117827, 107884, 72837, 148663, 125645, 61460, 120555,
  142473, 106668, 58612, 58576, 143366, 90058, 121087, 89546, 126161,
];

function calculateFuel(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

let totalFuel = 0;
modules.forEach((mass) => {
  const fuel = calculateFuel(mass);

  // Part 1
  totalFuel += fuel;

  // Part 2
  let fuelForFuel = fuel;
  while (fuelForFuel > 0) {
    fuelForFuel = calculateFuel(fuelForFuel);

    if (fuelForFuel > 0) {
      // console.log('additional fuel:', fuelForFuel);
      totalFuel += fuelForFuel;
    }
  }
});

// Part 1 - correct answer: `3286680`
// Part 2 - correct answer: `4927158`
console.log(totalFuel);
