import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateCustomerDialog } from "./CreateCustomerDialog";
import { CustomerList } from "./CustomerList";
import { useListCustomers } from "@/hooks/customers/useCustomers";

export function Customers() {
  const { data: customers = [], isLoading } = useListCustomers();

  return (
   <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Clientes</CardTitle>
          <CreateCustomerDialog />
        </CardHeader>

        <CardContent>
          <CustomerList customers={customers} isLoading={isLoading} />
        </CardContent>
      </Card>
   
  );
}
