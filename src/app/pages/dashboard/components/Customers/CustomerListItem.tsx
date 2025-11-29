interface Props {
  name: string;
  email: string;
  phone: string;
}

export function CustomerListItem({ name, email, phone }: Props) {
  return (
    <div className="p-4 border-b-1 hover:bg-accent transition-colors cursor-pointer">
      <div className="flex flex-col">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{email}</span>
        <span className="text-xs text-muted-foreground">{phone}</span>
      </div>
    </div>
  );
}
