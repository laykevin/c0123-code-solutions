import express from 'express';
import pg from 'pg';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
      from "grades";
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const { body } = req;
    if (!body.name || !body.course || !Object.hasOwn(body, 'score')) {
      res.status(400).json({ error: 'Missing name, course, or score' });
      return;
    } else if (!Number.isInteger(body.score) || body.score > 100 || body.score < 0) {
      res.status(400).json({ error: 'score must be an integer from 0-100' });
      return;
    } else {
      const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
      `;
      const params = [body.name, body.course, body.score];
      const result = await db.query(sql, params);
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const { body } = req;
    const gradeId = Number(req.params.gradeId);
    if (!body.name || !body.course || !Object.hasOwn(body, 'score')) {
      res.status(400).json({ error: 'Missing name, course, or score' });
      return;
    } else if (!Number.isInteger(gradeId) || gradeId < 1 || isNaN(gradeId)) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else {
      const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
       where "gradeId" = $4
      returning *;
      `;
      const params = [body.name, body.course, body.score, gradeId];
      const result = await db.query(sql, params);
      const updatedGrade = result.rows[0];
      if (updatedGrade) {
        res.status(200).json(updatedGrade);
      } else {
        res.status(404).json({ error: `Cannot find grade with Id ${gradeId}` });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId < 1 || isNaN(gradeId)) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else {
      const sql = `
      delete
        from "grades"
       where "gradeId" = $1
      returning *;
      `;
      const result = await db.query(sql, [gradeId]);
      const deleteGrade = result.rows[0];
      if (deleteGrade) {
        res.status(204).json(deleteGrade);
      } else {
        res.status(404).json({ error: `Cannot find grade with Id ${gradeId}` });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured' });
  }
});

app.use((req, res) => res.status(404).json({ error: 'Path not found' }));

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
