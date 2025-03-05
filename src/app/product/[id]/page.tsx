"use client";

import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams<{ id: string }>();

  if (!params?.id) return null;
  return <ProductDetails productId={params.id} />;
}
