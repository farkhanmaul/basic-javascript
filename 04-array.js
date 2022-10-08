/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */
const evenNumber = [];
for (n = 1; n <= 100; n++) {
  if (n % 2 == 0) {
    evenNumber.push(n);
  }
}
console.log(evenNumber);

module.exports = evenNumber;
