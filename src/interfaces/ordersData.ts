export interface CreateOrderBody {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
  produto: string;
  valor: string; 
}

export interface OrderResponse {
  id: string;
  status: string;
  brCode: string;
  brCodeBase64: string;
  amount: number;
  nome: string;
  email: string;
  telefone: string;
  produto: string;
  endereco: string;
  valor: string;
}
