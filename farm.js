//get yield for plant with environment factors
const getYieldForPlant = (plant, environmentFactors) => {
    let factors = []
    if(environmentFactors) {
    for (const efactor in environmentFactors) {
        for (const pfactor in plant.factors) {
            if (efactor == pfactor) {
                factors.push((plant.factors[pfactor][environmentFactors[efactor]]+100)/100)
                }
            }   
        }   
        return factors.reduce((prev, next) => prev * next, plant.yield)       
}
    else {
        return plant.yield
    }
}

//get yield for 1 crop
const getYieldForCrop = (crops, environmentFactors) => {
    return getYieldForPlant(crops.crop, environmentFactors) * crops.numCrops
}

//get yield of multiple crops
const getTotalYield = (crops, environmentFactors) => { 
    const totalYield = []
    crops.crops.map(crop => {
        totalYield.push(getYieldForCrop(crop, environmentFactors))
    });
    return totalYield.reduce((prev, next) => prev + next, 0)
}

//get costs for 1 crop
const getCostsForCrop = (crops) => {
    return crops.crop.cost * crops.numCrops
}

//get revenue for 1 crop
const getRevenueForCrop = (crops, environmentFactors) => {
    return crops.crop.saleprice * getYieldForCrop(crops, environmentFactors)
}

//get profit for 1 crop
const getProfitForCrop = (crops, environmentFactors) => {
    return getRevenueForCrop(crops, environmentFactors) - getCostsForCrop(crops)
}

//get total profit for multiple crops with environment factors
const getTotalProfit = (crops, environmentFactors) => {
    const totalProfit =[];
    crops.forEach(crop => {
        totalProfit.push(getProfitForCrop(crop, environmentFactors))
    })
    return totalProfit.reduce((prev, next) => prev + next,0)
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
}