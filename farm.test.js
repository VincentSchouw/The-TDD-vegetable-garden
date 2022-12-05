const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });

  test("Get yield for plant with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 20,
          high: -50,
        },
        wind: {
          low: 0,
          medium: -20,
          high: -40,
        },
      },
    };
    const environmentFactors = {
      sun: "high",
      rain: "high",
      wind: "high",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(13.5);
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

  test("Get yield for crop with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 20,
          high: -50,
        },
        wind: {
          low: 0,
          medium: -20,
          high: -40,
        },
      },
    };
    const environmentFactors = {
      sun: "low",
      rain: "medium",
      wind: "high",
    };
    const vegetable = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 10,
    };
    expect(getYieldForCrop(vegetable)).toBe(10.8);
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

  test("Calculate total yield with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 0,
          high: 30,
        },
        wind: {
          low: 0,
          medium: -20,
          high: -40,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 0,
          high: -30,
        },
        wind: {
          low: 0,
          medium: 20,
          high: -40,
        },
      },
    };
    const environmentFactors = {
      sun: "low",
      rain: "medium",
      wind: "high",
    };

    const crops = [
      { crop: corn, environment: environmentFactors, numCrops: 5 },
      { crop: pumpkin, environment: environmentFactors, numCrops: 5 },
    ];
    expect(getTotalYield({ crops })).toBe(10.5);
  });
});

describe("getCostsForCrop", () => {
  test("Calculate the cost for a crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
    };
    const input = {
      crop: corn,
      numCrops: 1,
    };
    expect(getCostsForCrop(input)).toBe(2);
  });
});

describe("getRevenueForCrop", () => {
  test("Calculate the revenue for a crop (without environmental factors)", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
      salePrice: 2,
    };
    const sold = {
      crop: corn,
      numCrops: 1,
    };
    expect(getRevenueForCrop(sold)).toBe(6);
  });

  test("Calculate the revenue for a crop (with environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
      salePrice: 2,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 0,
          high: -30,
        },
        wind: {
          low: 0,
          medium: 20,
          high: -40,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
      rain: "low",
      wind: "medium",
    };

    const sold = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 1,
    };

    expect(getRevenueForCrop(sold)).toBe(7.6);
  });
});

describe("getProfitForCrop", () => {
  test("calculate the profit for a crop (without environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
      salePrice: 2,
    };
    const sold = {
      crop: corn,
      numCrops: 1,
    };

    expect(getProfitForCrop(sold)).toBe(4);
  });
  test("calculate the profit for a crop (with environmental factors)", () => {
    const avocado = {
      name: "avocado",
      yield: 5,
      costs: 2,
      salePrice: 2,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 0,
          high: -30,
        },
        wind: {
          low: 0,
          medium: 20,
          high: -40,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
      rain: "low",
      wind: "medium",
    };

    const sold = {
      crop: avocado,
      environment: environmentFactors,
      numCrops: 1,
    };

    expect(getProfitForCrop(sold)).toBe(10.6);
  });
});

describe("getTotalProfit", () => {
  test("calculate the profit for multiple crops (without environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      costs: 2,
      salePrice: 2,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      costs: 3,
      salePrice: 5,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalProfit({ crops })).toBe(54);
  });

  test("Calculate the profit for muliple crops (with environmental factors", () => {
    const avocado = {
      name: "avocado",
      yield: 6,
      costs: 2,
      salePrice: 2,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 0,
          high: -30,
        },
        wind: {
          low: 0,
          medium: 20,
          high: -40,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      costs: 3,
      salePrice: 5,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        rain: {
          low: -30,
          medium: 0,
          high: -30,
        },
        wind: {
          low: 0,
          medium: 20,
          high: -40,
        },
      },
    };
    const environmentFactors = {
      sun: "medium",
      rain: "high",
      wind: "low",
    };

    const crops = [
      { crop: avocado, environment: environmentFactors, numCrops: 2 },
      { crop: pumpkin, environment: environmentFactors, numCrops: 4 },
    ];
    expect(getTotalProfit({ crops })).toBe(56.8);
  });
});
