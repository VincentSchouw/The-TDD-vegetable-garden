const getYieldForPlant = (corn, environmentFactors) => {
  const cornYield = corn.yield;

  const sunLow = corn.factor.sun.low;
  const sunMedium = corn.factor.sun.medium;
  const sunHigh = corn.factor.sun.high;

  const windLow = corn.factor.wind.low;
  const windMedium = corn.factor.wind.medium;
  const windHigh = corn.factor.wind.high;

  if (environmentFactors.sun === "low") {
    result = Math.round(cornYield * ((100 + sunLow) / 100));
  } else if (environmentFactors.sun === "medium") {
    result = Math.round(cornYield * ((100 + sunMedium) / 100));
  } else if (environmentFactors.sun === "high") {
    result = Math.round(cornYield * ((100 + sunHigh) / 100));
  } else if (environmentFactors.wind === "low") {
    result = Math.round(cornYield * ((100 + windLow) / 100));
  } else if (environmentFactors.wind === "medium") {
    result = Math.round(cornYield * ((100 + windMedium) / 100));
  } else if (environmentFactors.wind === "high") {
    result = Math.round(cornYield * ((100 + windHigh) / 100));
  } else {
    result = cornYield;
  }

  if (environmentFactors.sun === "low" && environmentFactors.wind === "low") {
    result = Math.round(
      cornYield * ((100 + sunLow) / 100) * ((100 + windLow) / 100)
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      cornYield * ((100 + sunLow) / 100) * ((100 + windHigh) / 100)
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "low"
  ) {
    result = Math.round(
      cornYield * ((100 + sunMedium) / 100) * ((100 + windLow) / 100)
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      cornYield * ((100 + sunMedium) / 100) * ((100 + windHigh) / 100)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "low"
  ) {
    result = Math.round(
      cornYield * ((100 + sunHigh) / 100) * ((100 + windLow) / 100)
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "medium"
  ) {
    result = Math.round(
      cornYield * ((100 + sunLow) / 100) * ((100 + windMedium) / 100)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "medium"
  ) {
    result = Math.round(
      cornYield * ((100 + sunHigh) / 100) * ((100 + windMedium) / 100)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      cornYield * ((100 + sunHigh) / 100) * ((100 + windHigh) / 100)
    );
  }

  return result;
};

const getYieldForCrop = (input, environmentFactors) => {
  const cropYield = input.crop.yield;
  const crops = input.numCrops;
  const totalCrops = crops * cropYield;

  const sunLow = input.crop.factor.sun.low;
  const sunMedium = input.crop.factor.sun.medium;
  const sunHigh = input.crop.factor.sun.high;

  const windLow = input.crop.factor.wind.low;
  const windMedium = input.crop.factor.wind.medium;
  const windHigh = input.crop.factor.wind.high;

  if (environmentFactors.sun === "low") {
    result = Math.round(totalCrops * ((100 + sunLow) / 100));
  } else if (environmentFactors.sun === "medium") {
    result = Math.round(totalCrops * ((100 + sunMedium) / 100));
  } else if (environmentFactors.sun === "high") {
    result = Math.round(totalCrops * ((100 + sunHigh) / 100));
  } else if (environmentFactors.wind === "low") {
    result = Math.round(totalCrops * ((100 + windLow) / 100));
  } else if (environmentFactors.wind === "medium") {
    result = Math.round(totalCrops * ((100 + windMedium) / 100));
  } else if (environmentFactors.wind === "high") {
    result = Math.round(totalCrops * ((100 + windHigh) / 100));
  } else {
    result = totalCrops;
  }

  if (environmentFactors.sun === "low" && environmentFactors.wind === "low") {
    result = Math.round(
      totalCrops * ((100 + sunLow) / 100) * ((100 + windLow) / 100)
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      totalCrops * ((100 + sunLow) / 100) * ((100 + windHigh) / 100)
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "low"
  ) {
    result = Math.round(
      totalCrops * ((100 + sunMedium) / 100) * ((100 + windLow) / 100)
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      totalCrops * ((100 + sunMedium) / 100) * ((100 + windHigh) / 100)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "low"
  ) {
    result = Math.round(
      totalCrops * ((100 + sunHigh) / 100) * ((100 + windLow) / 100)
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "medium"
  ) {
    result = Math.round(
      totalCrops * ((100 + sunLow) / 100) * ((100 + windMedium) / 100)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "medium"
  ) {
    result = Math.round(
      totalCrops * ((100 + sunHigh) / 100) * ((100 + windMedium) / 100)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      totalCrops * ((100 + sunHigh) / 100) * ((100 + windHigh) / 100)
    );
  }

  return result;
};

const getTotalYield = ({ crops }, environmentFactors) => {
  const totalCorn = crops[0].crop.yield * crops[0].numCrops;
  const totalPumpkin = crops[1].crop.yield * crops[1].numCrops;

  const sunLowCorn = crops[0].crop.factor.sun.low;
  const sunMediumCorn = crops[0].crop.factor.sun.medium;
  const sunHighCorn = crops[0].crop.factor.sun.high;
  const sunLowPumpkin = crops[1].crop.factor.sun.low;
  const sunMediumPumpkin = crops[1].crop.factor.sun.medium;
  const sunHighPumpkin = crops[1].crop.factor.sun.high;

  const windLowCorn = crops[0].crop.factor.wind.low;
  const windMediumCorn = crops[0].crop.factor.wind.medium;
  const windHighCorn = crops[0].crop.factor.wind.high;
  const windLowPumpkin = crops[1].crop.factor.wind.low;
  const windMediumPumpkin = crops[1].crop.factor.wind.medium;
  const windHighPumpkin = crops[1].crop.factor.wind.high;

  if (environmentFactors.sun === "low") {
    result = Math.round(
      totalCorn * ((100 + sunLowCorn) / 100) +
        totalPumpkin * ((100 + sunLowPumpkin) / 100)
    );
  } else if (environmentFactors.sun === "medium") {
    result = Math.round(
      totalCorn * ((100 + sunMediumCorn) / 100) +
        totalPumpkin * ((100 + sunMediumPumpkin) / 100)
    );
  } else if (environmentFactors.sun === "high") {
    result = Math.round(
      totalCorn * ((100 + sunHighCorn) / 100) +
        totalPumpkin * ((100 + sunHighPumpkin) / 100)
    );
  } else if (environmentFactors.wind === "low") {
    result = Math.round(
      totalCorn * ((100 + windLowCorn) / 100) +
        totalPumpkin * ((100 + windLowPumpkin) / 100)
    );
  } else if (environmentFactors.wind === "medium") {
    result = Math.round(
      totalCorn * ((100 + windMediumCorn) / 100) +
        totalPumpkin * ((100 + windMediumPumpkin) / 100)
    );
  } else if (environmentFactors.wind === "high") {
    result = Math.round(
      totalCorn * ((100 + windHighCorn) / 100) +
        totalPumpkin * ((100 + windHighPumpkin) / 100)
    );
  } else {
    result = totalCorn + totalPumpkin;
  }

  if (environmentFactors.sun === "low" && environmentFactors.wind === "low") {
    const sumTotalCorn =
      totalCorn * ((100 + sunLowCorn) / 100) * ((100 + windLowCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunLowPumpkin) / 100) *
      ((100 + windLowPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "high"
  ) {
    const sumTotalCorn =
      totalCorn * ((100 + sunLowCorn) / 100) * ((100 + windHighCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunLowPumpkin) / 100) *
      ((100 + windHighPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "low"
  ) {
    const sumTotalCorn =
      totalCorn * ((100 + sunMediumCorn) / 100) * ((100 + windLowCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunMediumPumpkin) / 100) *
      ((100 + windLowPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "high"
  ) {
    const sumTotalCorn =
      totalCorn * ((100 + sunMediumCorn) / 100) * ((100 + windHighCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunMediumPumpkin) / 100) *
      ((100 + windHighPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "low"
  ) {
    const sumTotalCorn =
      totalCorn * ((100 + sunHighCorn) / 100) * ((100 + windLowCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunHighPumpkin) / 100) *
      ((100 + windLowPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "medium"
  ) {
    const sumTotalCorn =
      totalCorn * ((100 + sunLowCorn) / 100) * ((100 + windMediumCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunLowPumpkin) / 100) *
      ((100 + windMediumPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "medium"
  ) {
    const sumTotalCorn =
      totalCorn * ((100 + sunHighCorn) / 100) * ((100 + windMediumCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunHighPumpkin) / 100) *
      ((100 + windMediumPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "high"
  ) {
    const sumTotalCorn =
      totalCorn * ((100 + sunHighCorn) / 100) * ((100 + windHighCorn) / 100);
    const sumTotalPumpkin =
      totalPumpkin *
      ((100 + sunHighPumpkin) / 100) *
      ((100 + windHighPumpkin) / 100);
    result = Math.round(sumTotalCorn + sumTotalPumpkin);
  }

  return result;
};

// const getTotalYield = ({ crops }) => {
// 	return crops[0].crop.yield * crops[0].numCrops;
// };

const getCostsForCrop = (corn) => {
  return corn.cost * corn.numCrops;
};

const getRevenueForCrop = (corn, environmentFactors) => {
  const sunLowCorn = corn.factor.sun.low;
  const sunMediumCorn = corn.factor.sun.medium;
  const sunHighCorn = corn.factor.sun.high;

  const windLowCorn = corn.factor.wind.low;
  const windMediumCorn = corn.factor.wind.medium;
  const windHighCorn = corn.factor.wind.high;

  const kilos = corn.kilos;
  const price = corn.price;
  const totalPrice = kilos * price;

  if (environmentFactors.sun === "low") {
    result = Math.round(kilos * ((100 + sunLowCorn) / 100) * price);
  } else if (environmentFactors.sun === "medium") {
    result = Math.round(kilos * ((100 + sunMediumCorn) / 100) * price);
  } else if (environmentFactors.sun === "high") {
    result = Math.round(kilos * ((100 + sunHighCorn) / 100) * price);
  } else if (environmentFactors.wind === "low") {
    result = Math.round(kilos * ((100 + windLowCorn) / 100) * price);
  } else if (environmentFactors.wind === "medium") {
    result = Math.round(kilos * ((100 + windMediumCorn) / 100) * price);
  } else if (environmentFactors.wind === "high") {
    result = Math.round(kilos * ((100 + windHighCorn) / 100) * price);
  } else {
    result = totalPrice;
  }

  if (environmentFactors.sun === "low" && environmentFactors.wind === "low") {
    result = Math.round(
      kilos * ((100 + sunLowCorn) / 100) * ((100 + windLowCorn) / 100) * price
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      kilos * ((100 + sunLowCorn) / 100) * ((100 + windHighCorn) / 100) * price
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "low"
  ) {
    result = Math.round(
      kilos *
        ((100 + sunMediumCorn) / 100) *
        ((100 + windLowCorn) / 100) *
        price
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      kilos *
        ((100 + sunMediumCorn) / 100) *
        ((100 + windHighCorn) / 100) *
        price
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "low"
  ) {
    result = Math.round(
      kilos * ((100 + sunHighCorn) / 100) * ((100 + windLowCorn) / 100) * price
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "medium"
  ) {
    result = Math.round(
      kilos *
        ((100 + sunLowCorn) / 100) *
        ((100 + windMediumCorn) / 100) *
        price
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "medium"
  ) {
    result = Math.round(
      kilos *
        ((100 + sunHighCorn) / 100) *
        ((100 + windMediumCorn) / 100) *
        price
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "high"
  ) {
    result = Math.round(
      kilos * ((100 + sunHighCorn) / 100) * ((100 + windHighCorn) / 100) * price
    );
  }

  return result;
};

const getProfitForCrop = (corn, environmentFactors) => {
  const kilos = corn.kilos;
  const cost = corn.cost;
  const price = corn.price;

  const sunLowCorn = corn.factor.sun.low;
  const sunMediumCorn = corn.factor.sun.medium;
  const sunHighCorn = corn.factor.sun.high;

  const windLowCorn = corn.factor.wind.low;
  const windMediumCorn = corn.factor.wind.medium;
  const windHighCorn = corn.factor.wind.high;

  if (environmentFactors.sun === "low") {
    const totalKilos = kilos * ((100 + sunLowCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (environmentFactors.sun === "medium") {
    const totalKilos = kilos * ((100 + sunMediumCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (environmentFactors.sun === "high") {
    const totalKilos = kilos * ((100 + sunHighCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (environmentFactors.wind === "low") {
    const totalKilos = kilos * ((100 + windLowCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (environmentFactors.wind === "medium") {
    const totalKilos = kilos * ((100 + windMediumCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (environmentFactors.wind === "high") {
    const totalKilos = kilos * ((100 + windHighCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else {
    result = kilos * price - kilos * cost;
  }

  if (environmentFactors.sun === "low" && environmentFactors.wind === "low") {
    const totalKilos =
      kilos * ((100 + sunLowCorn) / 100) * ((100 + windLowCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "high"
  ) {
    const totalKilos =
      kilos * ((100 + sunLowCorn) / 100) * ((100 + windHighCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "low"
  ) {
    const totalKilos =
      kilos * ((100 + sunMediumCorn) / 100) * ((100 + windLowCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "high"
  ) {
    const totalKilos =
      kilos * ((100 + sunMediumCorn) / 100) * ((100 + windHighCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "low"
  ) {
    const totalKilos =
      kilos * ((100 + sunHighCorn) / 100) * ((100 + windLowCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "medium"
  ) {
    const totalKilos =
      kilos * ((100 + sunLowCorn) / 100) * ((100 + windMediumCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "medium"
  ) {
    const totalKilos =
      kilos * ((100 + sunHighCorn) / 100) * ((100 + windMediumCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "high"
  ) {
    const totalKilos =
      kilos * ((100 + sunHighCorn) / 100) * ((100 + windHighCorn) / 100);
    result = Math.round(totalKilos * price - totalKilos * cost);
  }

  return result;
};

const getTotalProfit = ({ crops }, environmentFactors) => {
  const kilosCorn = crops[0].kilos;
  const kilosPumpkin = crops[1].kilos;

  const costCorn = crops[0].crop.cost;
  const costPumpkin = crops[1].crop.cost;

  const priceCorn = crops[0].crop.price;
  const pricePumpkin = crops[1].crop.price;

  const sunLowCorn = crops[0].crop.factor.sun.low;
  const sunMediumCorn = crops[0].crop.factor.sun.medium;
  const sunHighCorn = crops[0].crop.factor.sun.high;
  const sunLowPumpkin = crops[1].crop.factor.sun.low;
  const sunMediumPumpkin = crops[1].crop.factor.sun.medium;
  const sunHighPumpkin = crops[1].crop.factor.sun.high;

  const windLowCorn = crops[0].crop.factor.wind.low;
  const windMediumCorn = crops[0].crop.factor.wind.medium;
  const windHighCorn = crops[0].crop.factor.wind.high;
  const windLowPumpkin = crops[1].crop.factor.wind.low;
  const windMediumPumpkin = crops[1].crop.factor.wind.medium;
  const windHighPumpkin = crops[1].crop.factor.wind.high;

  if (environmentFactors.sun === "low") {
    const totalKilosCorn = kilosCorn * ((100 + sunLowCorn) / 100);
    const totalKilosPumpk = kilosPumpkin * ((100 + sunLowPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (environmentFactors.sun === "medium") {
    const totalKilosCorn = kilosCorn * ((100 + sunMediumCorn) / 100);
    const totalKilosPumpk = kilosPumpkin * ((100 + sunMediumPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (environmentFactors.sun === "high") {
    const totalKilosCorn = kilosCorn * ((100 + sunHighCorn) / 100);
    const totalKilosPumpk = kilosPumpkin * ((100 + sunHighPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (environmentFactors.wind === "low") {
    const totalKilosCorn = kilosCorn * ((100 + windLowCorn) / 100);
    const totalKilosPumpk = kilosPumpkin * ((100 + windLowPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (environmentFactors.wind === "medium") {
    const totalKilosCorn = kilosCorn * ((100 + windMediumCorn) / 100);
    const totalKilosPumpk = kilosPumpkin * ((100 + windMediumPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (environmentFactors.wind === "high") {
    const totalKilosCorn = kilosCorn * ((100 + windHighCorn) / 100);
    const totalKilosPumpk = kilosPumpkin * ((100 + windHighPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else {
    result = Math.round(
      kilosCorn * priceCorn -
        kilosCorn * costCorn +
        (kilosPumpkin * pricePumpkin - kilosPumpkin * costPumpkin)
    );
  }

  if (environmentFactors.sun === "low" && environmentFactors.wind === "low") {
    const totalKilosCorn =
      kilosCorn * ((100 + sunLowCorn) / 100) * ((100 + windLowCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunLowPumpkin) / 100) *
      ((100 + windLowPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "high"
  ) {
    const totalKilosCorn =
      kilosCorn * ((100 + sunLowCorn) / 100) * ((100 + windHighCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunLowPumpkin) / 100) *
      ((100 + windHighPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "low"
  ) {
    const totalKilosCorn =
      kilosCorn * ((100 + sunMediumCorn) / 100) * ((100 + windLowCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunMediumPumpkin) / 100) *
      ((100 + windLowPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (
    environmentFactors.sun === "medium" &&
    environmentFactors.wind === "high"
  ) {
    const totalKilosCorn =
      kilosCorn * ((100 + sunMediumCorn) / 100) * ((100 + windHighCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunMediumPumpkin) / 100) *
      ((100 + windHighPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "low"
  ) {
    const totalKilosCorn =
      kilosCorn * ((100 + sunHighCorn) / 100) * ((100 + windLowCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunHighPumpkin) / 100) *
      ((100 + windLowPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (
    environmentFactors.sun === "low" &&
    environmentFactors.wind === "medium"
  ) {
    const totalKilosCorn =
      kilosCorn * ((100 + sunLowCorn) / 100) * ((100 + windMediumCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunLowPumpkin) / 100) *
      ((100 + windMediumPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "medium"
  ) {
    const totalKilosCorn =
      kilosCorn * ((100 + sunHighCorn) / 100) * ((100 + windMediumCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunHighPumpkin) / 100) *
      ((100 + windMediumPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  } else if (
    environmentFactors.sun === "high" &&
    environmentFactors.wind === "high"
  ) {
    const totalKilosCorn =
      kilosCorn * ((100 + sunHighCorn) / 100) * ((100 + windHighCorn) / 100);
    const totalKilosPumpk =
      kilosPumpkin *
      ((100 + sunHighPumpkin) / 100) *
      ((100 + windHighPumpkin) / 100);
    result = Math.round(
      totalKilosCorn * priceCorn -
        totalKilosCorn * costCorn +
        (totalKilosPumpk * pricePumpkin - totalKilosPumpk * costPumpkin)
    );
  }

  return result;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
