import FeaturedProjects from "~/components/FeaturedProjects";
import type {
  Post,
  Project,
  StrapiPost,
  StrapiProject,
  StrapiResponse,
} from "~/types";
import AboutPreview from "~/components/AboutPreview";
import type { Route } from "./+types";
import LatestPosts from "~/components/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "It's John Dev | Welcome!" },
    { name: "description", content: "Portfolio website of John" },
  ];
}
export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured] [$eq]=true&populate=*`
    ),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch projects or posts");
  }

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();

  const projects = projectJson.data
    .map((item) => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description,
      image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
      url: item.url,
      date: item.date,
      category: item.category,
      featured: item.featured,
    }))
    .slice(0, 2);

  const posts = postJson.data.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    body: item.body,
    excerpt: item.excerpt,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    date: item.date,
  }));

  return { projects, posts };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} />
      <AboutPreview />
      <LatestPosts posts={posts} limit={3} />
    </>
  );
}
