import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Corpo (Request Body): dados para criação ou atualização de um registro *vem do json*
//Route Params: identificar qual recurso eu quero atualizar ou deletar *vem da chamada*
//Query Params: Paginação, filtros, ordenação *vem da url*


app.listen(3333);