import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';
import { getBlogPosts } from '@/lib/orbio';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Stay up to date with the latest news and updates from DZS Transport.',
};

interface NewsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);
  const { posts, totalPages } = await getBlogPosts({ page, perPage: 6 });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1
              className="mb-4 text-4xl font-bold text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              News & Updates
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Stay informed with the latest news, safety tips, and updates from
              DZS Transport.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <FadeIn key={post.id} delay={index * 100}>
                    <article className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg">
                      <Link href={`/news/${post.slug}`}>
                        <div className="relative h-48 overflow-hidden">
                          {post.featured_image ? (
                            <Image
                              src={post.featured_image}
                              alt={post.featured_image_alt || post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-slate-200">
                              <svg
                                className="h-12 w-12 text-slate-400"
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
                          <div className="absolute left-4 top-4">
                            <span className="rounded bg-dzred-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex items-center gap-4 text-sm text-slate-500">
                            <time dateTime={post.published_at}>
                              {new Date(post.published_at).toLocaleDateString(
                                'en-US',
                                {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                }
                              )}
                            </time>
                            <span>·</span>
                            <span>{post.read_time} min read</span>
                          </div>
                          <h2
                            className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-dzred-500"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {post.title}
                          </h2>
                          <p className="text-slate-600 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    </article>
                  </FadeIn>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <FadeIn className="mt-12 flex justify-center gap-2">
                  {page > 1 && (
                    <Link
                      href={`/news?page=${page - 1}`}
                      className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Previous
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/news?page=${pageNum}`}
                        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                          pageNum === page
                            ? 'bg-dzred-500 text-white'
                            : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {pageNum}
                      </Link>
                    )
                  )}
                  {page < totalPages && (
                    <Link
                      href={`/news?page=${page + 1}`}
                      className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Next
                    </Link>
                  )}
                </FadeIn>
              )}
            </>
          ) : (
            <FadeIn className="text-center">
              <p className="text-lg text-slate-600">
                No news articles available at this time. Check back soon!
              </p>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
