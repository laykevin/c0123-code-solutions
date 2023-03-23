SELECT "customers"."firstName",
  "customers"."lastName",
  "payments"."amount"
  FROM "payments"
  JOIN "customers" USING ("customerId")
  ORDER BY "amount" DESC
  LIMIT 10;
