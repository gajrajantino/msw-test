import { graphql } from "msw";
import db from "./db";

export const handlers = [
  graphql.query("getSku", (req, res, ctx) => {
    const { take, skip } = req.variables;

    console.log(req);

    [...Array(20)].map(() => db.sku.create());

    return res(
      ctx.data({
        data: db.sku.findMany({
          sort: {
            skuLength: "asc"
          },
          take,
          skip
        })
      })
    );
  })
];
