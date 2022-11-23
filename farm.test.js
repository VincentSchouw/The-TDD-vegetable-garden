const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm.js");

// describe("getYieldForPlant", () => {
// 	const corn = {
// 		name: "corn",
// 		yield: 30,
// 	};

// 	test("Get yield for plant with no environment factors", () => {
// 		expect(getYieldForPlant(corn)).toBe(30);
// 	});
// });

// describe("getYieldForCrop", () => {
// 	test("Get yield for crop, simple", () => {
// 		const corn = {
// 			name: "corn",
// 			yield: 3,
// 		};
// 		const input = {
// 			crop: corn,
// 			numCrops: 10,
// 		};
// 		expect(getYieldForCrop(input)).toBe(30);
// 	});
// });

// describe("getTotalYield", () => {
// 	test("Calculate total yield with multiple crops", () => {
// 		const corn = {
// 			name: "corn",
// 			yield: 3,
// 		};
// 		const pumpkin = {
// 			name: "pumpkin",
// 			yield: 4,
// 		};
// 		const crops = [
// 			{ crop: corn, numCrops: 5 },
// 			{ crop: pumpkin, numCrops: 2 },
// 		];
// 		expect(getTotalYield({ crops })).toBe(23);
// 	});
// });

// test("Calculate total yield with 0 amount", () => {
// 	const corn = {
// 		name: "corn",
// 		yield: 3,
// 	};
// 	const crops = [{ crop: corn, numCrops: 0 }];
// 	expect(getTotalYield({ crops })).toBe(0);
// });

describe("getCostsForCrop", () => {
  const corn = {
    name: "corn",
    cost: 3,
    numCrops: 55,
  };

  test("Get costs for sowing a crop", () => {
    expect(getCostsForCrop(corn)).toBe(165);
  });
});

// describe("getRevenueForCrop", () => {
// 	const corn = {
// 		name: "corn",
// 		price: 3,
// 		kilos: 30,
// 	};

// 	test("Get revenue for selling crops", () => {
// 		expect(getRevenueForCrop(corn)).toBe(90);
// 	});
// });

// describe("getProfitForCrop", () => {
// 	const corn = {
// 		name: "corn",
// 		price: 3,
// 		cost: 2,
// 		numCrops: 50,
// 		kilos: 40,
// 	};

// 	test("Get profit for selling crops", () => {
// 		expect(getProfitForCrop(corn)).toBe(20);
// 	});
// });

// describe("getTotalProfit", () => {
// 	test("Calculate total profit with multiple crops", () => {
// 		const corn = {
// 			name: "corn",
// 			price: 3,
// 			cost: 2,
// 		};
// 		const pumpkin = {
// 			name: "pumpkin",
// 			price: 5,
// 			cost: 3,
// 		};
// 		const crops = [
// 			{ crop: corn, numCrops: 5, kilos: 25 },
// 			{ crop: pumpkin, numCrops: 2, kilos: 15 },
// 		];
// 		expect(getTotalProfit({ crops })).toBe(134);
// 	});
// });

/* without environment factors: functions working --> rewrite functions
with environment factors */

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: 50,
        medium: 0,
        high: 35,
      },
      wind: {
        low: -40,
        medium: 30,
        high: -30,
      },
    },
  };

  const environmentFactors = {
    sun: "low",
    wind: "high",
  };

  test("Get yield for plant with environment factors", () => {
    expect(getYieldForPlant(corn, environmentFactors)).toBe(31);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 20,
          medium: 15,
          high: -30,
        },
      },
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };

    const environmentFactors = {
      sun: "low",
      wind: "medium",
    };

    expect(getYieldForCrop(input, environmentFactors)).toBe(17);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 20,
          medium: 0,
          high: -30,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factor: {
        sun: {
          low: -60,
          medium: 25,
          high: 70,
        },
        wind: {
          low: 50,
          medium: 0,
          high: -20,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];

    const environmentFactors = {
      sun: "low",
      wind: "low",
    };
    expect(getTotalYield({ crops }, environmentFactors)).toBe(14);
  });
});

describe("getRevenueForCrop", () => {
  const corn = {
    name: "corn",
    price: 3,
    kilos: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 32,
      },
      wind: {
        low: 20,
        medium: 14,
        high: -30,
      },
    },
  };

  const environmentFactors = {
    sun: "high",
    wind: "medium",
  };

  test("Get revenue for selling crops", () => {
    expect(getRevenueForCrop(corn, environmentFactors)).toBe(135);
  });
});

describe("getProfitForCrop", () => {
  const corn = {
    name: "corn",
    price: 3,
    cost: 2,
    numCrops: 50,
    kilos: 40,
    factor: {
      sun: {
        low: -50,
        medium: 10,
        high: 70,
      },
      wind: {
        low: 20,
        medium: 0,
        high: -30,
      },
    },
  };

  const environmentFactors = {
    sun: "high",
    wind: "high",
  };

  test("Get profit for selling crops", () => {
    expect(getProfitForCrop(corn, environmentFactors)).toBe(48);
  });
});

describe("getTotalProfit", () => {
  test("Calculate total profit with multiple crops", () => {
    const corn = {
      name: "corn",
      price: 5,
      cost: 1,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
          low: 20,
          medium: 0,
          high: -30,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      price: 12,
      cost: 6,
      factor: {
        sun: {
          low: 200,
          medium: -30,
          high: 0,
        },
        wind: {
          low: 20,
          medium: 0,
          high: -35,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 7, kilos: 66 },
      { crop: pumpkin, numCrops: 3, kilos: 166 },
    ];

    const environmentFactors = {
      sun: "medium",
      wind: "high",
    };

    expect(getTotalProfit({ crops }, environmentFactors)).toBe(638);
  });
});
