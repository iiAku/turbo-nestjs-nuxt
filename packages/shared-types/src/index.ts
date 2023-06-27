import { z } from "zod"

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
})
