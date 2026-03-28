import { connect } from "@planetscale/database";

export const conn = connect({
  url: process.env.DATABASE_URL,
});
