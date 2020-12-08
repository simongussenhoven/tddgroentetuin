const { 
  getYieldForPlant, 
  getYieldForCrop, 
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit

} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant without environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
  test("Get costs for crop", () => {
      const corn = {
          name: "corn",
          yield: 3,
          cost: 1,
          saleprice: 2
      };
      const input = {
          crop: corn,
          numCrops: 5,
      };
      expect(getCostsForCrop(input)).toBe(5);
  });
});

describe("getRevenueForCrop", () => {
  test("Get revenue for crop", () => {
      const corn = {
        name: "corn",
        yield: 3,
        cost: 1,
        saleprice: 2
    };
    const input = {
        crop: corn,
        numCrops: 5,
    };
      expect(getRevenueForCrop(input)).toBe(30);
  });
});

describe("getProfitForCrop", () => {
  test("Get profit for one crop", () => {
      const corn = {
          name: "corn",
          yield: 3,
          cost: 1,
          saleprice: 2
      };
      const input = {
          crop: corn,
          numCrops: 5,
      };
      expect(getProfitForCrop(input)).toBe(25);
  });
});


describe("getYieldForPlant", () => {
  test("Get yield for plant WITH environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: -30,
          medium: 0,
          high: 30,
        },
      },
    };
    
    const environmentFactors = {
      sun: "low",
      wind: "high",
      earth: "low"
    };
      expect(getYieldForPlant(corn, environmentFactors)).toBe(19.5);
  });
});


describe("getProfitForCrop", () => {
  test("Get profit for corn WITH environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      saleprice: 2,
      cost: 1,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: -30,
          medium: 0,
          high: 30,
        },
      },
    };
    
    const environmentFactors = {
      sun: "low",
      wind: "high",
      earth: "low"
    }; 

    input = {
      crop: corn, 
      numCrops: 5
    }
    expect(getProfitForCrop(input, environmentFactors)).toBe(190);
  });
});
  describe("getProfitForCrop", () => {      
    test("Get profit for wheat WITH environment factors", () => {
      const wheat = {
        name: "wheat",
        yield: 15,
        saleprice: 3,
        cost: 2,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
            low: -30,
            medium: 0,
            high: 30,
          },
        },
      };
      
      const environmentFactors = {
        sun: "low",
        wind: "high",
        earth: "low"
      }; 

      input = {
        crop: wheat, 
        numCrops: 5
      }
      expect(getProfitForCrop(input, environmentFactors)).toBe(136.25);
    });
  });

describe("getProfitForCropsWithEnvironment", () => {
  test("Get profit for multiple crops WITH environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      saleprice: 2,
      cost: 1,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: -30,
          medium: 0,
          high: 30,
        },
      },
    };

    const wheat = {
      name: "wheat",
      yield: 15,
      saleprice: 3,
      cost: 2,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: -30,
          medium: 0,
          high: 30,
        },
      },
    };
    
    const environmentFactors = {
      sun: "low",
      wind: "high",
      earth: "low"
    }; 

    const crops = [
      { crop: corn, numCrops: 5 }, 
      { crop: wheat, numCrops: 5 }
    ]; 
    expect(getTotalProfit(crops, environmentFactors)).toBe(326.25);
  });
});