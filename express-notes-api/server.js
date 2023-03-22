import express from 'express';
import * as fsPromises from 'node:fs/promises';

// const fileData = fs.readFileSync('data.json', 'utf8');
// const data = JSON.parse(fileData);
// const notes = data.notes;
const writeFileDataJSON = (data) => fsPromises.writeFile('data.json', JSON.stringify(data, null, 2));

const getFunction = async (req, res) => {
  const fileData = await fsPromises.readFile('data.json', 'utf8');
  const data = JSON.parse(fileData);
  res.send(Object.values(data.notes));
};

const getFunctionId = async (req, res) => {
  const fileData = await fsPromises.readFile('data.json', 'utf8');
  const data = JSON.parse(fileData);
  const notes = data.notes;
  const id = Number(req.params.id);
  if (id < 1 || !Number.isInteger(id) || isNaN(id)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).send(notes[id]);
  }
};

const postFunction = async (req, res) => {
  const fileData = await fsPromises.readFile('data.json', 'utf8');
  const data = JSON.parse(fileData);
  const notes = data.notes;
  const body = req.body;
  try {
    if (!body.content) {
      res.status(400).send({ error: 'content is a required field' });
      return;
    } else {
      notes[data.nextId] = body;
      notes[data.nextId].id = data.nextId;
      data.nextId++;
      await writeFileDataJSON(data);
      res.status(201).send(body);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occured.' });
  }
};

const deleteFunction = async (req, res) => {
  const fileData = await fsPromises.readFile('data.json', 'utf8');
  const data = JSON.parse(fileData);
  const notes = data.notes;
  const id = Number(req.params.id);
  try {
    if (id < 1 || !Number.isInteger(id) || isNaN(id)) {
      res.status(400).send({ error: 'id must be a positive integer' });
    } else if (!notes[id]) {
      res.status(404).send({ error: `cannot find note with id ${id}` });
    } else {
      delete notes[id];
      await writeFileDataJSON(data);
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occured.' });
  }
};

const putFunction = async (req, res) => {
  const fileData = await fsPromises.readFile('data.json', 'utf8');
  const data = JSON.parse(fileData);
  const notes = data.notes;
  const id = Number(req.params.id);
  const body = req.body;
  try {
    if (!body.content) {
      res.status(400).send({ error: 'content is a required field' });
      return;
    }
    if (id < 1 || !Number.isInteger(id) || isNaN(id)) {
      res.status(400).send({ error: 'id must be a poitive integer' });
      return;
    }
    if (!notes[id]) {
      res.status(404).send({ error: `cannot find note with id ${id}` });
      return;
    } else if (notes[id]) {
      notes[id].content = body.content;
      await writeFileDataJSON(data);
      res.status(200).send(notes[id]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occured.' });
  }
};

const app = express();

app.use(express.json());

app.get('/api/notes', getFunction);

app.get('/api/notes/:id', getFunctionId);

app.post('/api/notes', postFunction);

app.delete('/api/notes/:id', deleteFunction);

app.put('/api/notes/:id', putFunction);

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
