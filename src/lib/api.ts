import { Entry, EntryCollection } from 'contentful';
import { contentfulClient } from './contentful';

interface BlogPostFields {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const response: EntryCollection<BlogPostFields> = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  });

  return response.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
  }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response: EntryCollection<BlogPostFields> = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  const post = response.items[0];
  if (!post) return null;

  return {
    slug: post.fields.slug,
    title: post.fields.title,
    content: post.fields.content,
    excerpt: post.fields.excerpt,
  };
}