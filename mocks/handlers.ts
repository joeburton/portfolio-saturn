import { http, HttpResponse } from "msw";

import { pirates } from "./mock-data";

export const handlers = [
  http.get("https://portfolio-saturn-api.vercel.app/pirates-data", () => {
    return HttpResponse.json(pirates);
  }),
];
