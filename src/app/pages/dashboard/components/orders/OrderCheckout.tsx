"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export function OrderCheckout() {
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
  });

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Título */}
      <h1 className="text-3xl font-extrabold">
        Checkout JP MASTER DIGITAL LTDA
      </h1>

      {/* DADOS PESSOAIS */}
      <Card>
        <CardHeader>
          <CardTitle>Dados pessoais</CardTitle>
          <p className="text-sm text-muted-foreground">
            Para confirmar sua compra preencha os campos
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">

          <div>
            <label className="font-medium text-sm">Nome completo</label>
            <Input
              placeholder="Seu nome completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="font-medium text-sm">CPF</label>
            <Input
              placeholder="000.000.000-00"
              value={form.cpf}
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">
              Não é possível alterar o CPF
            </p>
          </div>

          <div>
            <label className="font-medium text-sm">Seu melhor e-mail</label>
            <Input
              placeholder="email@exemplo.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="font-medium text-sm">Número de telefone</label>
            <Input
              placeholder="(00) 90000-0000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

        </CardContent>
      </Card>

      {/* FORMA DE PAGAMENTO */}
      <Card>
        <CardHeader>
          <CardTitle>Forma de Pagamento</CardTitle>
          <p className="text-sm text-muted-foreground">
            Selecione a melhor forma de pagar
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">

          {/* PIX */}
          <div className="w-full border rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-green-50">
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-semibold">◆ Pix</span>
              <span className="text-sm text-muted-foreground">
                O pagamento será aprovado em instantes.
              </span>
            </div>
            <span className="text-green-600 text-lg">✓</span>
          </div>

          {/* Botão */}
          <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
            Realizar pagamento
          </Button>

          <p className="text-xs text-muted-foreground">
            Escolha o método de pagamento *
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
