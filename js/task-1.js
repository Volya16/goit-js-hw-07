const categoriesEl = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach((category) => {
    const categoriesNameEl = category.querySelector('h2').textContent;
    console.log('Categories:', categoriesNameEl);

    const sublistItemEl = category.querySelectorAll(".sublist-item").length;

    console.log('ELements:',sublistItemEl);
});
























// const categories = document.querySelectorAll(".item");

// console.log("Numbers of categories:", categories.length);

// categories.forEach((category) => {
//     const categoryName = category.querySelector('h2').textContent;
//     const sublistItemAmount = category.querySelectorAll('.sublist-item').length;
//     // const sublistItems = category.querySelectorAll(".sublist-item");

//     // sublistItems.forEach((item) => {
//     //     console.log("Item name:", item.textContent);
//     // })

//     console.log("Categirie:", categoryName);
//     console.log("Elements:", sublistItemAmount);
    
// }
// );