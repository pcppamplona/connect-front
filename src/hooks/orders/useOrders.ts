import { api } from "@/lib/utils";
import { CreateOrderBody, OrderResponse } from "@/interfaces/ordersData";
import { useMutation, useQuery } from "@tanstack/react-query";


export function useCreateOrder() {
  return useMutation({
    mutationFn: async (body: CreateOrderBody) => {
      const { data } = await api.post<OrderResponse>("/orders", body);
      return data;
    },
  });
}

export function useCheckOrder(id?: string) {
  return useQuery({
    queryKey: ["order-check", id],
    queryFn: async () => {
      const { data } = await api.get(`/orders/check/${id}`);
      return data;
    },
    enabled: !!id,
    refetchInterval: 5000, 
  });
}


export function useSimulateOrder() {
  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await api.post(`/orders/simulate/${id}`);
      return data;
    },
  });
}
