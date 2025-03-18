const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/sendWebhook', (req, res) => {
  const { content } = req.body;

  const webhookURL = "https://discord.com/api/webhooks/1351382005027438663/Gg4yXljIFNCatCBl0kQK9BCO5NjRK0IN9lF0zDziOxhE5d9CMzAfTrjMRjf7Tr3dV5Uq";

  axios.post(webhookURL, { content })
    .then(() => {
      res.status(200).send('Webhook enviado com sucesso!');
    })
    .catch(error => {
      res.status(500).send('Erro ao enviar webhook: ' + error.message);
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
