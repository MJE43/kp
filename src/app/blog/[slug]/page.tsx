import { getBlogPostBySlug, getAllBlogPosts } from '../../../lib/api';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <Layout>
      <article className="max-w-2xl mx-auto py-12 text-white">
        <Link href="/blog" className="text-yellow-300 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose lg:prose-xl prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  );
}