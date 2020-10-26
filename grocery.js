var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, unitPrice) {
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
    return Grocery;
}());
var mylist = [new Grocery("blueberry", 2, 4.99), new Grocery("mango", 6, 3.25),
    new Grocery("milk", 2, 5.75), new Grocery("bread", 1, 1.95)];
function showMyList(grocery) {
    document.write("<tr><td>List with Grocerys, amount, and price: </td></tr></br>");
    for (var i = 0; i < grocery.length; i++) {
        document.write("<td>" + "Grocery: " + "[" + mylist[i].name + "]" + ":" + "</td></tr>");
        document.write("<td>" + " amount needed: " + "[" + mylist[i].quantity + "]" + ":" + "</td></tr>");
        document.write("<td>" + " Price for each: " + "[" + mylist[i].unitPrice + "]" + "</td></tr></br>");
    }
}
showMyList(mylist);
