SELECT "genres"."name" AS "genre",
  COUNT("films".*) AS "appearances"
  FROM "genres"
  JOIN "filmGenre" USING ("genreId")
  JOIN "castMembers" USING ("filmId")
  JOIN "films" USING ("filmId")
  JOIN "actors" USING ("actorId")
  WHERE "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
  GROUP BY ("genres"."name");
