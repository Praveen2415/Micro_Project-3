const food_data = require("./food.json");

// list of all foodnames
let all_items = food_data.map(items=>{
    return (items.foodname);
});
console.log(all_items);

// list of all vegetable
let all_vegetable_items = food_data.filter(items =>{
    return (items.category === "Vegetable");
});
console.log(all_vegetable_items);

//list of all fruits
let all_fruits_items = food_data.filter(items =>{
    return(items.category === "Fruit");
});
console.log(all_fruits_items);

// list of all proteins
let all_proteins_items = food_data.filter(items =>{
    return (items.category === "Protein");
});
console.log(all_proteins_items);

//list of all nuts
let all_nuts_items = food_data.filter(items =>{
    return(items.category === "Nuts");
});
console.log(all_nuts_items);

//list of all grains
let all_grains_items = food_data.filter(items=>{
    return(items.category === "Grain");
});
console.log(all_grains_items);

// list of all dairy
let all_dairy_items = food_data.filter(items=>{
    return(items.category === "Dairy");
});
console.log(all_dairy_items);

// list of protein above 100
let high_proteins = food_data.filter(items=>{
    return(items.calorie>100);
});
console.log(high_proteins);

// list of protein below 100
let low_proteins = food_data.filter(items=>{
    return(items.calorie<100);
});
console.log(low_proteins);

//list of high to low protein order
let sort_protein = food_data.sort((low,high)=>{
    return (high.proteins - low.proteins);
});
console.log(sort_protein);

//list of low to high cabs
let sort_cabs = food_data.sort((low,high)=>{
    return (low.cab - high.cab );
});
console.log(sort_cabs);