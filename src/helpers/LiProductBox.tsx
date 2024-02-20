import { LiProduct } from "../types/LiProduct";

export const LiProductBox = (product: LiProduct) => {
  const name = product.nome.includes("]")
    ? product.nome.split("]")[1].trim()
    : product.nome;
  return `    
  <div
    onclick="window.location.href='${product.url}'"
    style="
    height: 600px;
    background: url('${product.imagens[0]?.grande}');
    background-size: cover;
    border-radius: 10px;
    background-position: center center;
    display: block;
    cursor: pointer;"
  >
    <li class="span4">
      <div
        class="listagem-item prod-id-${
          product.id
        }  prod-cat-19770635 prod-cat-19824019 prod-cat-19770635 prod-cat-19824670"
        data-id="${product.id}"
        style="
    border-radius: 15px;
    box-shadow: 0px 0px 20px 5px #d97e7ead;
    padding: 10px 5px !important;
    margin-top: 20px;
    background: white;
"
      >
        <a
          class="add-fav"
          href="javascript:void(0);?sort=%2Bnome"
          data-link="/conta/favorito/${product.id}/adicionar"
        ></a>
        <a
          href="${product.url}"
          class="produto-sobrepor"
          title="${name}"
        ></a>
        <div class="imagem-produto has-zoom">
          <img
            loading="lazy"
            src="${product.imagens[0]?.media}"
            alt="${name}"
            class="imagem-principal"
            data-imagem-caminho="${product.imagens[1]?.media}"
          />
          <img
            src="${product.imagens[1]?.media}"
            class="wNNs"
          />
          <img
            src="${product.imagens[1]?.media}"
            class="imagem-zoom"
          />
        </div>
        <div class="info-produto">
          <a
            href="${product.url}"
            class="nome-produto cor-secundaria"
          >
            ${name}
          </a>
          <div class="produto-sku hide">1291_9mm</div>
          <div
            data-trustvox-product-code="${product.id}"
            class="hide trustvox-stars"
          ></div>

          <div>
            <div class="preco-produto destaque-preco ">
              <div>
                <strong
                  class="preco-promocional cor-principal titulo"
                  data-sell-price="${product.preco.toFixed(2)}"
                >
                ${
                  "R$ " +
                  product.preco.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })
                }
             
                </strong>
              </div>

              <div>
                <span class="preco-parcela ">
                  até
                  <strong
                    class="cor-secundaria "
                    style="color: rgb(217, 126, 126) !important"
                  >
                    3x
                  </strong>
                  de
                  <strong
                    class="cor-secundaria"
                    style="color: rgb(217, 126, 126) !important"
                  >
                         ${
                           "R$ " +
                           (product.preco / 3).toLocaleString("pt-BR", {
                             minimumFractionDigits: 2,
                           })
                         }
                  </strong>
                  <span>sem juros</span>
                </span>
              </div>

              <span class="desconto-a-vista">
                ou{" "}
                <strong
                  class="cor-secundaria"
                  style="color: rgb(217, 126, 126) !important"
                >
                       ${
                         "R$ " +
                         (product.preco * 0.95).toLocaleString("pt-BR", {
                           minimumFractionDigits: 2,
                         })
                       }
                </strong>
                via Boleto Bancário
              </span>
            </div>
          </div>
        </div>

        <div class="acoes-produto hidden-phone">
          <a
            href="${product.url}"
            title="Ver detalhes do produto"
            class="botao botao-comprar principal fundo-principal com-hover"
            data-placement="left"
            style="background: rgb(217, 126, 126)!important;"
          >
            <i class="icon-search"></i>Comprar
          </a>
        </div>
        <div class="acoes-produto-responsiva visible-phone">
          <a
            href="${product.url}"
            title="Ver detalhes do produto"
            class="tag-comprar fundo-principal"
          >
            <span class="titulo">Comprar</span>
            <i class="icon-search"></i>
          </a>
        </div>

        <div class="bandeiras-produto"></div>
      </div>
    </li>

    <li class="span-4" style="width: 60%;height: 600px;display: flex;justify-content: center;align-items: center;">
      <div style="
          margin-top: 15px;
          font-weight: 700;
          background: #ffffffd6;
          border-radius: 10px;
          padding: 15px 45px;
          font-size: medium;
      ">
          ${name}
      </div>        
    </li>

    <li class="span-4" style="width: 92%;text-align: center;margin: 25px;color: #d97e7e;font-weight: 800;padding-bottom: 5px;font-size: medium;">
      Você também pode gostar de        
    </li>
  </div>
 
    `;
};
