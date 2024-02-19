export interface LiProduct {
  altura: number | null;
  apelido: string;
  ativo: boolean;
  bloqueado: boolean;
  categorias: string[];
  data_criacao: string;
  data_modificacao: string;
  descricao_completa: string;
  destaque: boolean;
  filhos: string[];
  grades: string[];
  gtin: string;
  id: number;
  id_externo: string | null;
  imagem_principal: Imagem;
  imagens: Imagem[];
  largura: number | null;
  marca: string;
  mpn: string;
  ncm: string;
  nome: string;
  pai: any; // Pode ser uma interface específica se houver mais informações sobre o pai
  peso: number | null;
  profundidade: number | null;
  removido: boolean;
  resource_uri: string;
  seo: string;
  sku: string;
  tipo: string;
  url: string;
  url_video_youtube: string;
  usado: boolean;
  variacoes: any[]; // Pode ser uma interface específica se houver informações sobre as variações
}

interface Imagem {
  caminho: string;
  grande: string;
  icone: string;
  id: number;
  id_anymarket: string | null;
  imagem_id: number;
  imagem_variacao?: number; // Este campo é opcional, dependendo da sua necessidade
  media: string;
  mime: string | null;
  pequena: string;
  posicao: string;
  principal: boolean;
  produto: string;
  resource_uri: string;
}
