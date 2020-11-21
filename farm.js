const get_yield_for_plant = (plant) => {
    return plant.yield
}

const get_yield_for_crop = (input) => {
    const crop = input.crop
    return (get_yield_for_plant(crop) * input.num_crops);
}

const get_total_yield = (input) => {
    let total_yield = 0;
    input.crops.forEach(crop => {
        total_yield += get_yield_for_crop(crop)
    })
    return total_yield
}


module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
}
