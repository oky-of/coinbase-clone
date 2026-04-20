const toTrimmedString = (value) =>
  typeof value === "string" ? value.trim() : "";

const toFiniteNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

export const normalizeCoinSymbol = (value) => toTrimmedString(value).toUpperCase();

export const normalizeBackendCoin = (coin, fallbackMeta = {}) => {
  const symbol = normalizeCoinSymbol(coin?.symbol || coin?.id);
  const name = toTrimmedString(coin?.name) || fallbackMeta.name || symbol;
  const image = toTrimmedString(coin?.image) || fallbackMeta.image || "";
  const price =
    toFiniteNumber(coin?.current_price) ?? toFiniteNumber(coin?.price);
  const change24h =
    toFiniteNumber(coin?.price_change_percentage_24h) ??
    toFiniteNumber(coin?.change24h) ??
    0;
  const marketCap =
    toFiniteNumber(coin?.market_cap) ?? toFiniteNumber(coin?.mktCap) ?? 0;
  const totalVolume =
    toFiniteNumber(coin?.total_volume) ?? toFiniteNumber(coin?.volume) ?? 0;

  if (!symbol || !name || price == null || price <= 0) {
    return null;
  }

  return {
    id: coin?._id || coin?.id || symbol,
    name,
    symbol,
    image,
    current_price: price,
    price_change_percentage_24h: change24h,
    market_cap: marketCap,
    total_volume: totalVolume,
  };
};
