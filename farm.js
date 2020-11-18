const get_yield_for_plant = (plant) => {
    return plant.yield
}

const get_yield_for_crop = (input) => {
    const crop = input.crop
    return (get_yield_for_plant(crop) * input.num_crops);
}

// const get_total_yield = (crops) => {
//         total_yield = [];
//         crops.forEach(crop => {
//             crop_type = crop.crop;
//             crop_yield = crops.crop.yield;
//         })
    
// }

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    // get_total_yield,
}
