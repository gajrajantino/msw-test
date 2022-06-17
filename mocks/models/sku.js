import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

export const skuModel = {
  product: primaryKey(faker.datatype.uuid),
  skuImages: [
    "https://s3.amazonaws.com/appforest_uf/f1652276889718x548838396021016400/191.png",
    "https://s3.amazonaws.com/appforest_uf/f1652276888430x762289291518042100/194.png",
    "https://s3.amazonaws.com/appforest_uf/f1652276885723x513197239330946750/192.png"
  ],
  skuName: "Magic Spiral Design Water Bottle 1000ml with Diamond Cap",
  skuTotalBought: 230,
  skuCode: "bizz101652",
  skuDescriptions: [
    "Strong and sturdy looks, Freezer-safe PET bottleBPA-free and leak-proof, Hygienic and 100 percent food grade materialDurable, Break ResistantThese bottles look quite attractive with their Designer pattern that also enhances the grip.Safe for drinking and OdourlessPerfect size spout for easy pouring and drinking"
  ],
  skuAttribute: [
    {
      key: "material",
      value: "Steel"
    },
    {
      key: "Color",
      value: "Red"
    },
    {
      key: "Volume",
      value: "450 ml"
    }
  ],
  skuPackOf: 1,
  skuInventory: () => faker.random.numeric(3),
  skuWeight: null,
  skuWeightUnit: null,
  skuMinOrder: () => faker.random.numeric(3),
  skuEAN: null,
  skuScanIdentifier: "bizz101652",
  skuPrice: {
    costPrice: () => faker.random.numeric(3),
    boPrice: () => faker.random.numeric(3),
    msp: () => faker.random.numeric(3),
    gstPercent: () => faker.helpers.arrayElements([0, 5, 10, 15]),
    skuFlashSaleDiscountPercentage: 26.85
  },
  supplier: [],
  skuFeature: [
    "Color : Multicolor",
    "Capacity : 1000ML",
    "Material : Plastic",
    "Usage : Water bottle, water and juices storage ",
    "Quantity : 1",
    "Packaging Type : Sealed Poly Bag",
    "",
    "",
    "* Color Will Be Sent As Per Availability",
    "* COD Available",
    "* 7 Days Return/Replacement"
  ],
  skuBreadth: () => faker.random.numeric(2),
  skuHeight: () => faker.random.numeric(2),
  skuLength: () => faker.random.numeric(2),
  skuDimensionUnit: () => faker.helpers.arrayElement(["cm", "in"]),
  packagingBreadth: () => faker.random.numeric(2),
  packagingHeight: () => faker.random.numeric(2),
  packagingLength: () => faker.random.numeric(2),
  packagingDimensionUnit: () => faker.helpers.arrayElement(["cm", "in"]),
  packagingWeight: () => faker.random.numeric(2),
  packagingWeightUnit: () => faker.helpers.arrayElement(["g", "kg", "lb"]),
  skuIsActive: () => faker.datatype.boolean(),
  categoryLastUpdateDate: () => faker.date.recent(30),
  categoryLastUpdateBy: () => "-1",
  categoryCreatedDate: () => faker.date.past(1)
};
