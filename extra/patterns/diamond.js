export default function diamond(a)
{
    let string = "";
    console.log("Print a diamond with rows "+a);
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
    for (var i = 0; i < a; i++)
    {
        for (var j = i; j > 0; j--)
        {
            string += " ";
        }
        for (var k = i; k < a; k++)
        {
            string += "* ";
        }
        string += "\n";
    }
    console.log(string);
}
