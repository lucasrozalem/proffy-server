import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

//Corpo (Request Body): dados para criação ou atualização de um registro *vem do json*
//Route Params: identificar qual recurso eu quero atualizar ou deletar *vem da chamada*
//Query Params: Paginação, filtros, ordenação *vem da url*
app.use(routes)

app.listen(3333);