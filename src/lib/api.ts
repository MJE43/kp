import { contentfulClient } from './contentful';

export async function getAllBlogPosts() {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  });

  return response.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    // Add other fields as needed
  }));
}

export async function getBlogPostBySlug(slug: string) {
  const response = await contentfulClient.getEntries({
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
    // Add other fields as needed
  };
}