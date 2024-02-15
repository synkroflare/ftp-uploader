import { Product } from "../types/Product";

export const ProductBox = (product: Product) => {
  return `
        <div
      class="js-item-product col-6 col-md-3 item-product col-grid is-inViewport"
      data-product-type="list"
      data-product-id={product.id}
      data-store={"product-item-${product.id}"}
      data-component="product-list-item"
      data-component-value={product.id}
      data-transition="fade-in-up"
      style="
    box-shadow: 0 0px 49px 3px #d97e7e;
    max-width: 100%;
    width: 100%;
"
    >
      <div class="item">
        <div
          class="h-[400px] lg:h-[500px] js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
          data-variants='[{"product_id":200065459,"price_short":"R$79,00","price_long":"R$79,00","price_number":79,"compare_at_price_short":null,"compare_at_price_long":null,"compare_at_price_number":null,"stock":null,"sku":"CAN_2733_60x40","available":true,"contact":false,"option0":"40x60","option1":null,"option2":null,"id":822008344,"image":599441985,"image_url":"\/\/dcdn.mitiendanube.com\/stores\/003\/499\/567\/products\/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-1024-1024.webp","installments_data":"{\"Nuvem Pago\":{\"1\":{\"installment_value\":79,\"installment_value_cents\":7900,\"interest\":0,\"total_value\":79,\"without_interests\":true},\"2\":{\"installment_value\":43.1577,\"installment_value_cents\":4315.77,\"interest\":0.0926,\"total_value\":86.3154,\"without_interests\":false},\"3\":{\"installment_value\":29.193133333333,\"installment_value_cents\":2919.3133333333,\"interest\":0.1086,\"total_value\":87.5794,\"without_interests\":false},\"4\":{\"installment_value\":22.118025,\"installment_value_cents\":2211.8025,\"interest\":0.1199,\"total_value\":88.4721,\"without_interests\":false},\"5\":{\"installment_value\":17.78764,\"installment_value_cents\":1778.764,\"interest\":0.1258,\"total_value\":88.9382,\"without_interests\":false},\"6\":{\"installment_value\":14.900716666667,\"installment_value_cents\":1490.0716666667,\"interest\":0.1317,\"total_value\":89.4043,\"without_interests\":false},\"7\":{\"installment_value\":12.796871428571,\"installment_value_cents\":1279.6871428571,\"interest\":0.1339,\"total_value\":89.5781,\"without_interests\":false},\"8\":{\"installment_value\":11.2545375,\"installment_value_cents\":1125.45375,\"interest\":0.1397,\"total_value\":90.0363,\"without_interests\":false},\"9\":{\"installment_value\":10.067233333333,\"installment_value_cents\":1006.7233333333,\"interest\":0.1469,\"total_value\":90.6051,\"without_interests\":false},\"10\":{\"installment_value\":9.09369,\"installment_value_cents\":909.369,\"interest\":0.1511,\"total_value\":90.9369,\"without_interests\":false},\"11\":{\"installment_value\":8.3064909090909,\"installment_value_cents\":830.64909090909,\"interest\":0.1566,\"total_value\":91.3714,\"without_interests\":false},\"12\":{\"installment_value\":7.6393,\"installment_value_cents\":763.93,\"interest\":0.1604,\"total_value\":91.6716,\"without_interests\":false}}}"},{"product_id":200065459,"price_short":"R$159,00","price_long":"R$159,00","price_number":159,"compare_at_price_short":null,"compare_at_price_long":null,"compare_at_price_number":null,"stock":null,"sku":"CAN_2733_90x60","available":true,"contact":false,"option0":"90x60","option1":null,"option2":null,"id":822008346,"image":599441985,"image_url":"\/\/dcdn.mitiendanube.com\/stores\/003\/499\/567\/products\/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-1024-1024.webp","installments_data":"{\"Nuvem Pago\":{\"1\":{\"installment_value\":159,\"installment_value_cents\":15900,\"interest\":0,\"total_value\":159,\"without_interests\":true},\"2\":{\"installment_value\":86.8617,\"installment_value_cents\":8686.17,\"interest\":0.0926,\"total_value\":173.7234,\"without_interests\":false},\"3\":{\"installment_value\":58.7558,\"installment_value_cents\":5875.58,\"interest\":0.1086,\"total_value\":176.2674,\"without_interests\":false},\"4\":{\"installment_value\":44.516025,\"installment_value_cents\":4451.6025,\"interest\":0.1199,\"total_value\":178.0641,\"without_interests\":false},\"5\":{\"installment_value\":35.80044,\"installment_value_cents\":3580.044,\"interest\":0.1258,\"total_value\":179.0022,\"without_interests\":false},\"6\":{\"installment_value\":29.99005,\"installment_value_cents\":2999.005,\"interest\":0.1317,\"total_value\":179.9403,\"without_interests\":false},\"7\":{\"installment_value\":25.755728571429,\"installment_value_cents\":2575.5728571429,\"interest\":0.1339,\"total_value\":180.2901,\"without_interests\":false},\"8\":{\"installment_value\":22.6515375,\"installment_value_cents\":2265.15375,\"interest\":0.1397,\"total_value\":181.2123,\"without_interests\":false},\"9\":{\"installment_value\":20.2619,\"installment_value_cents\":2026.19,\"interest\":0.1469,\"total_value\":182.3571,\"without_interests\":false},\"10\":{\"installment_value\":18.30249,\"installment_value_cents\":1830.249,\"interest\":0.1511,\"total_value\":183.0249,\"without_interests\":false},\"11\":{\"installment_value\":16.718127272727,\"installment_value_cents\":1671.8127272727,\"interest\":0.1566,\"total_value\":183.8994,\"without_interests\":false},\"12\":{\"installment_value\":15.3753,\"installment_value_cents\":1537.53,\"interest\":0.1604,\"total_value\":184.5036,\"without_interests\":false}}}"},{"product_id":200065459,"price_short":"R$299,00","price_long":"R$299,00","price_number":299,"compare_at_price_short":null,"compare_at_price_long":null,"compare_at_price_number":null,"stock":null,"sku":"CAN_2733_90x120","available":true,"contact":false,"option0":"120x90","option1":null,"option2":null,"id":822008347,"image":599441985,"image_url":"\/\/dcdn.mitiendanube.com\/stores\/003\/499\/567\/products\/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-1024-1024.webp","installments_data":"{\"Nuvem Pago\":{\"1\":{\"installment_value\":299,\"installment_value_cents\":29900,\"interest\":0,\"total_value\":299,\"without_interests\":true},\"2\":{\"installment_value\":163.3437,\"installment_value_cents\":16334.37,\"interest\":0.0926,\"total_value\":326.6874,\"without_interests\":false},\"3\":{\"installment_value\":110.49046666667,\"installment_value_cents\":11049.046666667,\"interest\":0.1086,\"total_value\":331.4714,\"without_interests\":false},\"4\":{\"installment_value\":83.712525,\"installment_value_cents\":8371.2525,\"interest\":0.1199,\"total_value\":334.8501,\"without_interests\":false},\"5\":{\"installment_value\":67.32284,\"installment_value_cents\":6732.284,\"interest\":0.1258,\"total_value\":336.6142,\"without_interests\":false},\"6\":{\"installment_value\":56.396383333333,\"installment_value_cents\":5639.6383333333,\"interest\":0.1317,\"total_value\":338.3783,\"without_interests\":false},\"7\":{\"installment_value\":48.433728571429,\"installment_value_cents\":4843.3728571429,\"interest\":0.1339,\"total_value\":339.0361,\"without_interests\":false},\"8\":{\"installment_value\":42.5962875,\"installment_value_cents\":4259.62875,\"interest\":0.1397,\"total_value\":340.7703,\"without_interests\":false},\"9\":{\"installment_value\":38.102566666667,\"installment_value_cents\":3810.2566666667,\"interest\":0.1469,\"total_value\":342.9231,\"without_interests\":false},\"10\":{\"installment_value\":34.41789,\"installment_value_cents\":3441.789,\"interest\":0.1511,\"total_value\":344.1789,\"without_interests\":false},\"11\":{\"installment_value\":31.438490909091,\"installment_value_cents\":3143.8490909091,\"interest\":0.1566,\"total_value\":345.8234,\"without_interests\":false},\"12\":{\"installment_value\":28.9133,\"installment_value_cents\":2891.33,\"interest\":0.1604,\"total_value\":346.9596,\"without_interests\":false}}}"},{"product_id":200065459,"price_short":"R$599,00","price_long":"R$599,00","price_number":599,"compare_at_price_short":null,"compare_at_price_long":null,"compare_at_price_number":null,"stock":null,"sku":"CAN_2733_180x90","available":true,"contact":false,"option0":"180x90","option1":null,"option2":null,"id":822008348,"image":599441985,"image_url":"\/\/dcdn.mitiendanube.com\/stores\/003\/499\/567\/products\/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-1024-1024.webp","installments_data":"{\"Nuvem Pago\":{\"1\":{\"installment_value\":599,\"installment_value_cents\":59900,\"interest\":0,\"total_value\":599,\"without_interests\":true},\"2\":{\"installment_value\":327.2337,\"installment_value_cents\":32723.37,\"interest\":0.0926,\"total_value\":654.4674,\"without_interests\":false},\"3\":{\"installment_value\":221.35046666667,\"installment_value_cents\":22135.046666667,\"interest\":0.1086,\"total_value\":664.0514,\"without_interests\":false},\"4\":{\"installment_value\":167.705025,\"installment_value_cents\":16770.5025,\"interest\":0.1199,\"total_value\":670.8201,\"without_interests\":false},\"5\":{\"installment_value\":134.87084,\"installment_value_cents\":13487.084,\"interest\":0.1258,\"total_value\":674.3542,\"without_interests\":false},\"6\":{\"installment_value\":112.98138333333,\"installment_value_cents\":11298.138333333,\"interest\":0.1317,\"total_value\":677.8883,\"without_interests\":false},\"7\":{\"installment_value\":97.029442857143,\"installment_value_cents\":9702.9442857143,\"interest\":0.1339,\"total_value\":679.2061,\"without_interests\":false},\"8\":{\"installment_value\":85.3350375,\"installment_value_cents\":8533.50375,\"interest\":0.1397,\"total_value\":682.6803,\"without_interests\":false},\"9\":{\"installment_value\":76.332566666667,\"installment_value_cents\":7633.2566666667,\"interest\":0.1469,\"total_value\":686.9931,\"without_interests\":false},\"10\":{\"installment_value\":68.95089,\"installment_value_cents\":6895.089,\"interest\":0.1511,\"total_value\":689.5089,\"without_interests\":false},\"11\":{\"installment_value\":62.982127272727,\"installment_value_cents\":6298.2127272727,\"interest\":0.1566,\"total_value\":692.8034,\"without_interests\":false},\"12\":{\"installment_value\":57.9233,\"installment_value_cents\":5792.33,\"interest\":0.1604,\"total_value\":695.0796,\"without_interests\":false}}}"}]'
          data-quickshop-id={"quick${product.id}"}
        >
          <div class="!h-[200px] lg:!h-[300px] js-item-with-secondary-image item-image item-with-two-images">
            <div
              style="padding-bottom: 100%;"
              class="js-item-image-padding position-relative"
              data-store="product-item-image-200065459"
            >
              <a
                class=""
                href="${product.canonical_url}"
                title="${product.name.pt}"
                aria-label="${product.name.pt}"
              >
                <img
                  alt="${product.name.pt}"
                  data-expand="-10"
                  src="${product.images[0].src}"
                  // data-srcset="//dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-240-0.webp 240w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-320-0.webp 320w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-480-0.webp 480w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-640-0.webp 640w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-1024-1024.webp 1024w"
                  class="!h-[200px] lg:!h-[300px] js-item-image lazyautosizes img-absolute img-absolute-centered fade-in item-image-primary lazyloaded"
                  width="800"
                  height="800"
                  sizes="300px"
                  // srcset="//dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-240-0.webp 240w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-320-0.webp 320w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-480-0.webp 480w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-640-0.webp 640w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-1024-1024.webp 1024w"
                />
                <div class="placeholder-fade"></div>
                <div class="!hidden absolute z-10 top-0 left-0 !p-[7px] flex items-center justify-center !text-white font-bold !bg-[#d97e7e]">
                  <div class=" labels " data-store="product-item-labels"></div>
                  <span
                    class="hidden"
                    data-store="stock-product-200065459-infinite"
                  ></span>{" "}
                </div>
                <img
                  alt="${product.name.pt}"
                  data-sizes="auto"
                  src="${product.images[1].src}"
                  // data-srcset="//dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-240-0.webp 240w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-320-0.webp 320w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-480-0.webp 480w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-640-0.webp 640w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-1024-1024.webp 1024w"
                  class="!h-[200px] lg:!h-[300px] js-item-image js-item-image-secondary lazyautosizes img-absolute img-absolute-centered fade-in item-image-secondary lazyloaded"
                  sizes="300px"
                  style=""
                  // srcset="//dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-240-0.webp 240w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-320-0.webp 320w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-480-0.webp 480w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-640-0.webp 640w, //dcdn.mitiendanube.com/stores/003/499/567/products/2733_2-0kh604nvr3-30955fcaee59c0e40917071991650069-1024-1024.webp 1024w"
                />
              </a>
            </div>
            <div class=" labels-absolute ">
              <div
                class="js-stock-label label label-default "
                style="display:none;"
              >
                Esgotado
              </div>
            </div>
            <span
              class="hidden"
              data-store="stock-product-200065459-infinite"
            ></span>{" "}
          </div>

          <div
            class="grow bottom-0 absolute w-full item-description"
            data-store="product-item-info-200065459"
          >
            <a
              href="${product.canonical_url}"
              title="${product.name.pt}"
              aria-label="${product.name.pt}"
              class="item-link"
            >
              <div
                class="js-item-name item-name text-center mt-1 mb-3 font-small "
                data-store="product-item-name-200065459"
              >
                Quadro Decorativo Canvas Paisagem Lago na Floresta Black and
                White Horizontal
              </div>

              <div
                class="item-price-container text-center flex flex-col"
                data-store="product-item-price-200065459"
              >
                <span
                  class="js-compare-price-display price-compare"
                  style="display:none;"
                >
                  R$0,00
                </span>
                <span class="text-[#d97e7e] font-bold text-2xl js-price-display item-price text-center h5 font-weight-bold">
                  R$${product.variants[0].price.replace(".", ",")}
                </span>

                <div class="js-max-installments-container js-max-installments item-installments mt-1">
                  <div class="js-max-installments product-installments">
                    <span class="js-installment-amount product-installment-amount">
                      12
                    </span>

                    <span>
                      <span class="installment-short-separator">x</span>
                      de
                    </span>

                    <span class="js-installment-price product-installment-value">
                      R$
                      ${(Number(product.variants[0].price) / 6)
                        .toFixed(2)
                        .replace(".", ",")}
                    </span>
                  </div>
                </div>
              </div>
              <div class="hidden">
                <div
                  class="js-color-variant-available-1 "
                  data-value="variation_1"
                  data-option="0"
                ></div>
              </div>
              <div class="row row-grid mt-3 align-items-center">
                <div class="item-actions w-full">
                  <a                 
                    href="${product.canonical_url}"
                    class=" btn btn-primary btn-small w-100"
                    title="$"${product.name.pt}""
                    aria-label="$"${product.name.pt}""
                    data-component-value={product.id}
                  >
                    <span class="js-open-quickshop-wording">Comprar</span>
                    <svg
                      class="js-open-quickshop-icon icon-inline ml-1 d-none d-md-inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 564 512"
                    >
                      <path d="M542.31,138.44h-60c-.12-.13-.24-.26-.36-.39L359.23,15.34c-8.47-8.47-23.45-7.22-33.47,2.79-10.01,10.01-11.26,25-2.79,33.47l86.84,86.84H164.37L251.21,51.59c8.47-8.47,7.22-23.45-2.79-33.47-10.01-10.01-24.99-11.26-33.47-2.79l-122.71,122.71c-.13,.13-.24,.26-.36,.39H21.69c-11.98,0-21.69,11.48-21.69,25.64s9.71,25.64,21.69,25.64h29.6c-.04,3.11,.19,6.28,.75,9.47l43,270.17c4.26,24.58,25.58,42.54,50.52,42.54H431.07c24.94,0,46.26-17.96,50.52-42.54l44.42-270.17c.55-3.2,.78-6.36,.75-9.47h15.55c11.98,0,21.69-11.48,21.69-25.64s-9.71-25.64-21.69-25.64Zm-111.23,322.16H145.56L102.56,190.43H475.49l-44.42,270.17Zm-251.62-72.11V251.55c0-11.98,11.48-21.69,25.64-21.69s25.64,9.71,25.64,21.69v136.94c0,11.98-11.48,21.69-25.64,21.69s-25.64-9.71-25.64-21.69Zm86.77,0V251.55c0-11.98,11.48-21.69,25.64-21.69s25.64,9.71,25.64,21.69v136.94c0,11.98-11.48,21.69-25.64,21.69s-25.64-9.71-25.64-21.69Zm86.77,0V251.55c0-11.98,11.48-21.69,25.64-21.69s25.64,9.71,25.64,21.69v136.94c0,11.98-11.48,21.69-25.64,21.69s-25.64-9.71-25.64-21.69Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
 <script type="application/ld+json" data-component="structured-data.item">
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${product.canonical_url}"
        },
        "name": "${product.name.pt}",
        "image": "https://dcdn.mitiendanube.com/stores/003/499/567/products/2733_1-qagi7vsf4s-bde1f4d90e31b11c8017071991592140-480-0.webp",
        "description": "ESTILO ARTE DESIGN Quadros decorativos para qualquer ambiente: Disponíveis em diversos modelos e composições de forma a atender todos os gostos! PERFEIÇÃO DA...",
                    "sku": "CAN_2733_60x40",
                            "brand": {
                "@type": "Thing",
                "name": "ESTILOAD"
            },
                            "weight": {
                "@type": "QuantitativeValue",
                "unitCode": "KGM",
                "value": "1.0000"
            },
                "offers": {
            "@type": "Offer",
            "url": "${product.canonical_url}",
            "priceCurrency": "BRL",
            "price": "79",
                        "seller": {
                "@type": "Organization",
                "name": "ESTILOAD"
            }
        }
    }
</script> 
      </div>
    </div>
    `;
};
