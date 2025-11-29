import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useCheckoutFlow } from "@/hooks/useCheckoutFlow";
import { toast } from "sonner";

export function OrderCheckout() {
  const {
    step,
    order,
    handleCreateOrder,
    handleSimulatePayment,
    setStep,
  } = useCheckoutFlow();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    endereco: "",
    produto: "Assinatura de Programa Fitness",
    valor: "40.00",
  });

  function updateField(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  useEffect(() => {
    if (step === "paid") {
      toast.success("Recebemos seu pagamento! Obrigado por comprar conosco!");
    }
  }, [step]);

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {step === "form" && (
        <Card>
          <CardHeader>
            <CardTitle>Dados do Cliente</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input placeholder="Nome" value={form.nome} onChange={(e) => updateField("nome", e.target.value)} />
            <Input placeholder="CPF" value={form.cpf} onChange={(e) => updateField("cpf", e.target.value)} />
            <Input placeholder="Email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
            <Input placeholder="Telefone" value={form.telefone} onChange={(e) => updateField("telefone", e.target.value)} />
            <Input placeholder="Endereço" value={form.endereco} onChange={(e) => updateField("endereco", e.target.value)} />
            <Input placeholder="Produto" value={form.produto} onChange={(e) => updateField("produto", e.target.value)} />
            <Input placeholder="Valor" value={form.valor} onChange={(e) => updateField("valor", e.target.value)} />
            <Button onClick={() => handleCreateOrder(form)}>Avançar para pagamento</Button>
          </CardContent>
        </Card>
      )}

      {step === "qr" && order && (
        <Card className="p-6 flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">Pagamento via PIX</h2>
          <img
            src={order.brCodeBase64}
            alt="QR Code PIX"
            className="rounded-md shadow-md border p-2 bg-white"
            width={250}
            height={250}
          />
          <p className="text-2xl font-bold text-green-700">R$ {order.valor}</p>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" onClick={() => setStep("form")}>Voltar</Button>
            <Button onClick={handleSimulatePayment}>Simular pagamento</Button>
          </div>
        </Card>
      )}

      {step === "paid" && (
        <Card className="p-6 bg-green-100 border-green-300">
          <h2 className="text-2xl font-bold text-green-800">🎉 Recebemos seu pagamento!</h2>
          <p className="text-green-700 mt-2">Obrigado! Seu pedido foi confirmado com sucesso.</p>
        </Card>
      )}
    </div>
  );
}
