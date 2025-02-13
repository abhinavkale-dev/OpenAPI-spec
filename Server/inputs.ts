import { z } from "@hono/zod-openapi"

//Inputs from users from the route
export const ParamsSchema = z.object({
    id: z.string().min(1).max(10).openapi({
     param: {
       name: "id",
       in: "path"
     },
     example:"123"
    })
 })