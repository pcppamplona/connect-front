import { Skeleton } from "@/components/ui/skeleton";
import { CustomerListItem } from "./CustomerListItem";

interface Props {
  customers: {
    id: string;
    metadata: {
      name: string;
      email: string;
      cellphone: string;
    };
  }[];
  isLoading: boolean;
}

export function CustomerList({ customers, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {customers.map((c) => (
        <CustomerListItem
          key={c.id}
          name={c.metadata.name}
          email={c.metadata.email}
          phone={c.metadata.cellphone}
        />
      ))}
    </div>
  );
}
