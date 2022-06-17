import { factory } from "@mswjs/data";
import { skuModel } from "./models/sku";

const db = factory({
  sku: skuModel
});

export default db;
