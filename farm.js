//calculate yield from plant
const get_yield_for_plant = (plant) => {
    return plant.yield
}

//calculate yield * number of crops
const get_yield_for_crop = (input) => {
    return (get_yield_for_plant(input.crop) * input.num_crops);
}

//calculate total yield from array of crops
const get_total_yield = (input) => {
    let total_yield = 0;
    input.crops.forEach(crop => {
        total_yield += get_yield_for_crop(crop)
    })
    return total_yield
}

//calculating the cost for one crop
const getCostsForCrop = (input) => {
    return input.crop.cost * input.num_crops
}

//calculating revenue for one crop
const getRevenueForCrop = (input) => {
    return get_yield_for_crop(input) * input.crop.salePrice
}

//calculating profit for one crop
const getProfitForCrop = (input) => {
    return getRevenueForCrop(input) - getCostsForCrop(input)
}
module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
}
