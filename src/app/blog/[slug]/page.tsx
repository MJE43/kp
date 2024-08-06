import { getBlogPostBySlug, getAllBlogPosts, BlogPost } from '../../../lib/api';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
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