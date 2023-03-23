SELECT "countries"."name" AS "country",
  COUNT("cities".*) AS "NumberOfCities"
  FROM "countries"
  JOIN "cities" USING ("countryId")
  GROUP BY "countries"."name";
