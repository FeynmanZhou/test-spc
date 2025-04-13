// pages/blog/[slug].js
import Image from 'next/image';
import { useLanguage } from "../../context/LanguageContext";
import { getPostBySlug, getAllPosts } from "../../lib/posts";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ApplicationForm from '@/components/ui/ApplicationForm';

// 定义可在 MDX 中使用的组件
const components = {
  ApplicationForm,
  // 可以在这里添加更多组件
};

export default function BlogPost({ post, mdxSource }) {
  const { t } = useLanguage();

  return (
    <div className="blog-container">
      <div className="custom-screen">
        <article className="blog-content">
          {post.coverImage && (
            <div className="blog-cover-image">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <h1 className="blog-title gradient-text">{post.title}</h1>
          
          <div className="blog-meta">
            <time className="text-gray-500">{post.date}</time>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{post.author}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </article>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  // 将内容序列化为 MDX
  const mdxSource = await serialize(post.content);
  
  return {
    props: {
      post,
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}