import { LiProduct } from "../types/LiProduct";

export const LiProductBox = (product: LiProduct) => {
  return `    
    <li class="span4">
      <div
        class="listagem-item prod-id-${product.id}  prod-cat-19770635 prod-cat-19824019 prod-cat-19770635 prod-cat-19824670"
        data-id="${product.id}"
        style="
    border-radius: 15px;
    box-shadow: 0px 0px 20px 5px #d97e7ead;
    padding: 10px 5px !important;
    margin-top: 20px;
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
          title="${product.nome}"
        ></a>
        <div class="imagem-produto has-zoom">
          <img
            loading="lazy"
            src="${product.imagens[0]?.media}"
            alt="${product.nome}"
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
            ${product.nome}
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
                  data-sell-price="89.90"
                >
                  ${product.preco}
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
                    R$ 29,96
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
                  R$ 85,40
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

    <li class="span-4" style="opacity: 0"> </li>
    <li class="span-4" style="opacity: 0"> </li>
 
    `;
};
