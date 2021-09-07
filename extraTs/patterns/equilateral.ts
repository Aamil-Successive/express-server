export default function equilateral (a: number): void {
    let x: string = '';
    console.log('Print a equilateral with rows ' + a);

for (let i = 1; i <= a; i++) {
    for (let j = a; j > i; j--) {
        x += ' ';
    }
    for (let k = 1; k <= i; k++)
    x += '* ';
    x += '\n';
}
console.log(x);
}
