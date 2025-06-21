import express from 'express';
import { processarJogadores, converterPontos } from './converter';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/converter/:score', (req, res) => {
  try {
    const score = parseInt(req.params.score);
    const pontos = converterPontos(score);
    res.json({ original: score, convertido: pontos });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/processar', (req, res) => {
  try {
    const jogadores: any[] = req.body.jogadores || [];
    const processados = processarJogadores(jogadores);
    res.json(processados);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});