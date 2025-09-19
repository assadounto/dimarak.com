// lib/validation/shop.ts
import * as z from "zod";

export const shopBasicsSchema = z.object({
  name: z.string().min(2, "Shop name is required"),
  slug: z
    .string()
    .min(2, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens"),
  category: z.string().min(1, "Pick a category"),
  logoFile: z.any().optional(), // File | undefined
  bannerFile: z.any().optional(), // File | undefined
});

export const shopContactSchema = z.object({
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Phone is required"),
  whatsapp: z.string().optional(),
  addressLine1: z.string().min(2, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  region: z.string().min(2, "Region is required"),
  country: z.string().min(2, "Country is required"),
});

export const shopPayoutSchema = z
  .object({
    payoutMethod: z.enum(["bank", "mobile_money"]),
    bankName: z.string().optional(),
    accountName: z.string().optional(),
    accountNumber: z.string().optional(),
    momoProvider: z.string().optional(),
    momoNumber: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.payoutMethod === "bank") {
        return !!(data.bankName && data.accountName && data.accountNumber);
      }
      return !!(data.momoProvider && data.momoNumber);
    },
    { message: "Fill the required payout fields" },
  );

export const shopPoliciesSchema = z.object({
  returnsPolicy: z.string().min(10, "Add a brief returns policy"),
  shippingPolicy: z.string().min(10, "Add a brief shipping policy"),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the Terms" }),
  }),
});

export const createShopSchema = shopBasicsSchema
  .and(shopContactSchema)
  .and(shopPayoutSchema)
  .and(shopPoliciesSchema);

export type CreateShopInput = z.infer<typeof createShopSchema>;
