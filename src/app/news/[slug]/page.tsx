import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/ui';
import { getBlogPostBySlug, getRecentBlogPosts } from '@/lib/orbio';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    keywords: post.seo_keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getRecentBlogPosts(3),
  ]);

  if (!post) {
    notFound();
  }

  const relatedPosts = recentPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    News
                  </Link>
                </li>
                <li>/</li>
                <li className="text-slate-300">{post.title}</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <span className="mb-4 inline-block rounded bg-dzred-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {post.category}
            </span>

            {/* Title */}
            <h1
              className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>By {post.author_name}</span>
              <span>·</span>
              <time dateTime={post.published_at}>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.read_time} min read</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image && (
        <section className="relative -mt-8">
          <div className="mx-auto max-w-5xl px-6">
            <FadeIn>
              <div className="relative h-64 overflow-hidden rounded-lg md:h-96 lg:h-[500px]">
                <Image
                  src={post.featured_image}
                  alt={post.featured_image_alt || post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <article
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content_html || '' }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 border-t border-slate-200 pt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-4 py-1 text-sm text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
              <h2
                className="mb-8 text-2xl font-bold text-slate-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Related Articles
              </h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost, index) => (
                <FadeIn key={relatedPost.id} delay={index * 100}>
                  <Link
                    href={`/news/${relatedPost.slug}`}
                    className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="flex">
                      <div className="relative h-32 w-32 flex-shrink-0">
                        {relatedPost.featured_image ? (
                          <Image
                            src={relatedPost.featured_image}
                            alt={relatedPost.featured_image_alt || relatedPost.title}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-slate-200">
                            <svg
                              className="h-8 w-8 text-slate-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 font-semibold text-slate-900 transition-colors group-hover:text-dzred-500">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {relatedPost.read_time} min read
                        </p>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to News CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-dzred-500 transition-colors hover:text-dzred-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News
          </Link>
        </div>
      </section>
    </>
  );
}
