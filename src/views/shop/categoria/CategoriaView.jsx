import Title from "@/components/Title";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import categoriaService from "@/services/categoriaService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function CategoriaView() {
  const params = useParams();
  const categoriaId = params.categoriaId;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categoria", categoriaId],
    queryFn: () => categoriaService.getById({ id: categoriaId }),
    retry: false,
  });

  if (isLoading) return "Cargando...";

  if (data) {
    return (
      <>
        <Title
          title={`${data.nombre}`}
          subtitle={`Productos de ${data.nombre}`}
        />
        <ProductGrid productos={data.productos} />
      </>
    );
  }
}
