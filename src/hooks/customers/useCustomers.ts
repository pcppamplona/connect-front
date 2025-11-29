import { api } from "@/lib/utils";
import { CreateCustomerBody, CustomersApiResponse } from "@/interfaces/abacateData";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useListCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const response = await api.get<CustomersApiResponse>("/abacate/customers");

      return response.data.data; 
    },
  });
}

export function useCreateCustomer() {
  return useMutation({
    mutationFn: async (body: CreateCustomerBody) => {
      const { data } = await api.post("/abacate/customers", body);
      return data;
    },
  });
}
