SELECT "firstName",
       "lastName",
      SUM("payments"."amount") AS "totalSpent"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  GROUP BY ("customers"."customerId")
  ORDER BY "totalSpent" DESC;
