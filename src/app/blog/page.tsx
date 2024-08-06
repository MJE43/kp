import Layout from '../../components/Layout';
import { NavyBlog } from '../../components/ui/navy-blog';
import { getAllBlogPosts } from '../../lib/api';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <Layout>
      <NavyBlog posts={posts} />
    </Layout>
  );
}