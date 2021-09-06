export default function diamond(a: number) {
    let x = '';
    console.log('Print a diamond with rows ' + a);
    for (let i = 1; i <= a; i++) {
        for (let j = a; j > i; j--) {
            x += ' ';
        }
        for (let k = 1; k <= i; k++)
        x += '* ';
        x += '\n';
    }
    for (let i = 0; i < a; i++) {
        for (let j = i; j > 0; j--) {
            x += ' ';
        }
        for (let k = i; k < a; k++) {
            x += '* ';
        }
        x += '\n';
    }
    console.log(x);
}
