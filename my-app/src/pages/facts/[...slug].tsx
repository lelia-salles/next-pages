import { useRouter } from "next/router";

import { Fact as FactComponent } from "@/components/Fact";
import { mockFacts } from "./mock-facts";

export default function Fact() {
	const router = useRouter();
	const { slug } = router.query;

	console.log(' --- slug', slug);

	const key = slug && Array.isArray(slug) ? slug[0] : slug;

	const { title, description } = key && mockFacts[key] || mockFacts['default'];

  return (
    <FactComponent title={title} description={description} />
  )
}
