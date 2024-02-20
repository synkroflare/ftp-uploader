import axios from "axios";
import cron from "node-cron";

export const coupomActivator = () => {
  cron.schedule("0 0 * * *", async () => {
    const precoResponse = await axios.patch(
      `https://api.awsli.com.br/v1/cupom/${2538567}?chave_api=aaba145ba78dc7524820&chave_aplicacao=92fae45b-dd41-46c2-ac0d-840642d6982a`,
      {
        ativo: true,
      }
    );

    console.log("Ativando cupom MADRUGA15");
  });

  cron.schedule("0 6 * * *", async () => {
    const precoResponse = await axios.patch(
      `https://api.awsli.com.br/v1/cupom/${2538567}?chave_api=aaba145ba78dc7524820&chave_aplicacao=92fae45b-dd41-46c2-ac0d-840642d6982a`,
      {
        ativo: false,
      }
    );

    console.log("Desativando cupom MADRUGA15");
  });
};
