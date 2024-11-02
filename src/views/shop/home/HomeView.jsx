import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/Title";
import productoService from "@/services/productoService";
import { useQuery } from "@tanstack/react-query";

export default function HomeView() {
  const { data, isLoading } = useQuery({
    queryKey: ["productos"],
    queryFn: productoService.getAll,
  });

  if (isLoading) return "cargando ...";

  if (data) {
    return (
      <>
        <Title title="Tienda" subtitle="Todos los productos" />
        <ProductGrid productos={data} />
      </>
    );
  }
}
