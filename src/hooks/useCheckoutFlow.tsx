import { useState, useEffect } from "react";
import { CreateOrderBody } from "@/interfaces/ordersData";
import { useCheckOrder, useCreateOrder, useSimulateOrder } from "./orders/useOrders";

export function useCheckoutFlow() {
  const [order, setOrder] = useState<any>(null);
  const [step, setStep] = useState<"form" | "qr" | "paid">("form");

  const { mutate: createOrder } = useCreateOrder();
  const { data: checkOrderData } = useCheckOrder(order?.id);
  const { mutate: simulateOrder } = useSimulateOrder();

  function handleCreateOrder(body: CreateOrderBody) {
    createOrder(body, {
      onSuccess: (data) => {
        setOrder(data);
        setStep("qr");
      },
    });
  }

  function handleSimulatePayment() {
    if (!order) return;
    simulateOrder(order.id, {
      onSuccess: (data) => {
        setOrder(data); 
        setStep("paid");
      },
    });
  }

  useEffect(() => {
    if (checkOrderData?.status === "PAID") {
      setStep("paid");
    }
  }, [checkOrderData]);

  return {
    step,
    order,
    handleCreateOrder,
    handleSimulatePayment,
    setStep,
  };
}
