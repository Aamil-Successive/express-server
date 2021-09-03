export default function equilateral (a)
{
    let string = "";
    console.log("Print a equilateral with rows "+a);

for (let i = 1; i <= a; i++)
{
    for (let j = a; j > i; j--)
    {
        string += " ";
    }
    for (let k = 1; k <= i; k++)
    string += "* ";
    string += "\n";
}
console.log(string);
}
