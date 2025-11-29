import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/utils";
import { CreatePixBody, PixResponse } from "@/interfaces/abacateData";

export function useCreatePix() {
  return useMutation({
    mutationFn: async (body: CreatePixBody) => {
      const { data } = await api.post<PixResponse>("/abacate/pix", body);
      return data;
    },
  });
}

export function useCheckPix(id?: string) {
  return useQuery({
    queryKey: ["pix-check", id],
    queryFn: async () => {
      const { data } = await api.get("/abacate/pix/check", { params: { id } });
      return data;
    },
    enabled: !!id,
  });
}

export function useSimulatePix() {
  return useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/abacate/pix/simulate");
      return data;
    },
  });
}
