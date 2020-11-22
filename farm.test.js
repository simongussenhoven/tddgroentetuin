const {
  get_yield_for_plant,
  get_yield_for_crop,
  get_total_yield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
} = require("./farm");

//pre given tests below
describe("get_yield_for_plant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(get_yield_for_plant(corn)).toBe(30);
  });
});

describe("get_yield_for_crop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(get_yield_for_crop(input)).toBe(30);
  });
});

describe("get_total_yield", () => {
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
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(get_total_yield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, num_crops: 0 }];
    expect(get_total_yield({ crops })).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  test("Get costs for one crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 2,
    };
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(getCostsForCrop(input)).toBe(20);
  });
});

describe("getRevenueForCrop", () => {
  test("get revenue for one crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 2,
      salePrice: 4,
    };
    const input = {
      crop: corn,
      num_crops: 5,
    };
    expect(getRevenueForCrop(input)).toBe(60);
  });
});

describe("getProfitForCrop", () => {
  test("get revenue for one crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 2,
      salePrice: 4,
    };
    const input = {
      crop: corn,
      num_crops: 5,
    };
    expect(getProfitForCrop(input)).toBe(50);
  });
});

describe("get_yield_for_plant", () => {
  test("get yield with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };
    expect(get_yield_for_plant(corn, environmentFactors)).toBe(15);
  });
});

describe("get_yield_for_plant", () => {
  test("get yield with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
    };
    expect(get_yield_for_plant(corn, environmentFactors)).toBe(45);
  });
});

describe("get_yield_for_plant", () => {
  test("get yield with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const environmentFactors = {
      earth: "high",
    };
    expect(get_yield_for_plant(corn, environmentFactors)).toBe(30);
  });
});

describe("get_yield_for_plant", () => {
  test("get yield with environment factors", () => {
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
          low: 50,
          medium: 0,
          high: -50,
        }
      },
    };

    const environmentFactors = {
      wind: "low",
      earth: "high",
      sun: "low",
    };
    expect(get_yield_for_plant(corn, environmentFactors)).toBe(30);
  });
});