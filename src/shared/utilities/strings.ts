class Strings
{
    public toTitleCase(str: string)
    {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
}

var strings : Strings = new Strings();

export default strings;