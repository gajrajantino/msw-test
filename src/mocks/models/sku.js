import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

export const skuModel = {
    product: primaryKey(faker.datatype.uuid),
    skuInventory: () => faker.random.numeric(3),
    skuMinOrder: () => faker.random.numeric(3),
    skuPrice: {
        costPrice: () => faker.random.numeric(3),
        boPrice: () => faker.random.numeric(3),
        msp: () => faker.random.numeric(3),
        gstPercent: () => faker.helpers.arrayElements([0, 5, 10, 15]),
    },
    skuBreadth: () => faker.random.numeric(2),
    skuHeight: () => faker.random.numeric(2),
    skuDimensionUnit: () => faker.helpers.arrayElement(["cm", "in"]),
};
