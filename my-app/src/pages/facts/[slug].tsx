import { useRouter } from "next/router";
import { Fact as <FactComponent> } from "@/components/Fact"; // Importação do componente

export default function Fact(){
  const router = useRouter();
    const { slug } = router.query;
    return (
        <FactComponent />
    );

    
}