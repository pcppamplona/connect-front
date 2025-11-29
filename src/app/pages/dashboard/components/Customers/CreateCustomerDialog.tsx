import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCreateCustomer } from "@/hooks/customers/useCustomers";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

export function CreateCustomerDialog() {
  const queryClient = useQueryClient();
  const createCustomer = useCreateCustomer();

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    cellphone: "",
    taxId: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    createCustomer.mutate(form, {
      onSuccess: () => {
        toast.success("Cliente criado", {
          description: "O cliente foi registrado com sucesso.",
          duration: 2000,
        });

        queryClient.invalidateQueries({ queryKey: ["customers"] });
        setOpen(false);
        setForm({ name: "", email: "", cellphone: "", taxId: "" });
      },
      onError: () => {
        toast.error("Erro ao criar cliente", {
          description: "Não foi possível registrar o cliente.",
          duration: 2000,
        });
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Criar cliente</Button>
      </DialogTrigger>

       <DialogContent className="sm:max-w-md w-full">
        <DialogHeader>
          <DialogTitle>Novo cliente</DialogTitle>
           <DialogDescription>
            Coloque as informações do novo cliente a ser criado no sitema!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="cellphone"
            placeholder="Telefone"
            value={form.cellphone}
            onChange={handleChange}
          />
          <Input
            name="taxId"
            placeholder="CPF"
            value={form.taxId}
            onChange={handleChange}
          />
        </div>

        <DialogFooter className="flex justify-end gap-2 mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button
            onClick={handleSubmit}
            disabled={createCustomer.isPending}
           
          >
            {createCustomer.isPending ? "Criando..." : "Criar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
