var employee = function (name) {
    var position = ["software engineer"];

    //Turn all letters into lowercase and splits string 
    var names = name.toLowerCase().split(" ");

    //
    for (var i = 0; i < names.length; i++) {
        name = names[i];

        //Capitalizes initial letter of each word
        names[i] = (name.charAt(0).toUpperCase() + names[i].substring(1))

    }

    //Joins array into a string
    return names.join(" ");
}
module.exports = employee;