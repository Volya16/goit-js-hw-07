const categories = document.querySelectorAll(".item");

console.log("Numbers of categories:", categories.length);

categories.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const sublistItemAmount = category.querySelectorAll('.sublist-item').length;
    // const sublistItems = category.querySelectorAll(".sublist-item");

    // sublistItems.forEach((item) => {
    //     console.log("Item name:", item.textContent);
    // })

    console.log("Categirie:", categoryName);
    console.log("Elements:", sublistItemAmount);
    
}
);