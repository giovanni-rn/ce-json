/* utilisé pour transmettre des données rapidement */
/* clé entourée de guillemets doubles */

// Import
const data = require("./people.json");

// Affichage
console.log(data);
console.log(data.bob.age);

// Conversion en string
text_data = JSON.stringify(data);
console.log("\n", typeof text_data);
console.log(text_data);

// Reconversion en objet
object_data = JSON.parse(text_data);
console.log("\n", typeof object_data);
console.log(object_data);

// Affichage d'une valeur
console.log("\n", object_data.patrick.stupide);
