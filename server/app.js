import express from 'express'
import http from 'http';
import {mailer} from './helpers.js'
import cors from 'cors';
const app = express()
const PORT = process.env.PORT || 3000;

const corsOptions ={
  origin:'http://localhost:5173',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(cors(corsOptions));

app.post('/mail', (req, res) => {
  try {
    mailer(req.body.email, req.body.subject, req.body.message)
  } catch (err) {
    console.log(err)
  }

  res.send('message sent')
})

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});