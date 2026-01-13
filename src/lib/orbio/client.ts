/**
 * OrbioCloud Blog API Client
 * Integrates with OrbioCloud's public blog API for news/articles
 */

// API Configuration
const SUBDOMAIN = process.env.ORBIO_SUBDOMAIN || 'dzst';
const BLOG_BASE_URL = 'https://app.orbiocloud.com/api/public/blog';

// ==================== Blog Types ====================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content_html?: string;
  featured_image: string | null;
  featured_image_alt: string | null;
  published_at: string;
  author_name: string;
  read_time: number;
  category: string;
  tags: string[];
  views?: number;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
}

interface BlogListResponse {
  success: boolean;
  data: BlogPost[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

interface BlogSingleResponse {
  success: boolean;
  data: BlogPost;
}

interface GetBlogPostsParams {
  page?: number;
  perPage?: number;
  category?: string;
  tag?: string;
}

export interface BlogListResult {
  posts: BlogPost[];
  total: number;
  page: number;
  totalPages: number;
}

// ==================== Mock Data ====================

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Safety First: How We Keep Students Protected',
    slug: 'safety-first-how-we-keep-students-protected',
    excerpt:
      'Learn about the comprehensive safety measures we implement to ensure every student arrives at school safely.',
    content_html: `
      <p>At DZS Transport, safety isn't just a priority—it's our foundation. Every day, parents trust us with their most precious cargo: their children. We take that responsibility seriously.</p>
      <h2>Our Safety Protocols</h2>
      <p>From driver background checks to regular vehicle maintenance, we leave nothing to chance. Our comprehensive safety program includes:</p>
      <ul>
        <li>Rigorous driver screening and ongoing training</li>
        <li>Daily vehicle safety inspections</li>
        <li>GPS tracking on all vehicles</li>
        <li>Regular safety drills and emergency preparedness</li>
      </ul>
      <p>We believe that transparent communication with parents and schools is key to maintaining a safe transportation environment.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&q=80',
    featured_image_alt: 'School bus safety',
    published_at: '2024-01-15T10:00:00Z',
    author_name: 'DZS Transport Team',
    read_time: 5,
    category: 'Safety',
    tags: ['safety', 'students', 'transportation'],
  },
  {
    id: '2',
    title: 'The Technology Behind Modern School Transportation',
    slug: 'technology-behind-modern-school-transportation',
    excerpt:
      'Discover how GPS tracking, route optimization, and parent communication apps are transforming student transportation.',
    content_html: `
      <p>The days of wondering "where's the bus?" are over. Modern technology has revolutionized school transportation, making it safer and more efficient than ever.</p>
      <h2>GPS Tracking</h2>
      <p>Real-time GPS tracking allows parents and schools to know exactly where each bus is at any moment. This transparency provides peace of mind and helps with planning.</p>
      <h2>Route Optimization</h2>
      <p>Advanced software helps us design the most efficient routes, reducing travel time and fuel consumption while ensuring timely arrivals.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    featured_image_alt: 'Transportation technology',
    published_at: '2024-01-10T10:00:00Z',
    author_name: 'DZS Transport Team',
    read_time: 4,
    category: 'Technology',
    tags: ['technology', 'GPS', 'innovation'],
  },
  {
    id: '3',
    title: 'Charter Bus Services for School Events',
    slug: 'charter-bus-services-school-events',
    excerpt:
      'Planning a field trip or athletic event? Learn how our charter services can make your next school outing a success.',
    content_html: `
      <p>From field trips to sporting events, charter bus services provide a safe, convenient way to transport students for special occasions.</p>
      <h2>Why Choose Charter Services?</h2>
      <p>Charter buses offer several advantages for school events:</p>
      <ul>
        <li>Professional, experienced drivers</li>
        <li>Comfortable, modern vehicles</li>
        <li>Customizable routes and schedules</li>
        <li>Cost-effective group transportation</li>
      </ul>
      <p>Contact us today to learn more about our charter services and how we can help make your next school event a success.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    featured_image_alt: 'Charter bus for school events',
    published_at: '2024-01-05T10:00:00Z',
    author_name: 'DZS Transport Team',
    read_time: 3,
    category: 'Services',
    tags: ['charter', 'field trips', 'events'],
  },
];

// ==================== Blog API Functions ====================

/**
 * Get paginated blog posts
 */
export async function getBlogPosts(
  params: GetBlogPostsParams = {}
): Promise<BlogListResult> {
  try {
    const searchParams = new URLSearchParams();
    searchParams.set('subdomain', SUBDOMAIN);
    searchParams.set('module', 'showroom');

    if (params.page) searchParams.set('page', params.page.toString());
    if (params.perPage) searchParams.set('per_page', params.perPage.toString());
    if (params.category) searchParams.set('category', params.category);
    if (params.tag) searchParams.set('tag', params.tag);

    const response = await fetch(`${BLOG_BASE_URL}?${searchParams.toString()}`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Blog API error: ${response.status}`);
    }

    const data: BlogListResponse = await response.json();

    return {
      posts: data.data,
      total: data.pagination.total,
      page: data.pagination.page,
      totalPages: data.pagination.total_pages,
    };
  } catch (error) {
    console.error('Failed to fetch blog posts, using mock data:', error);
    // Return mock data as fallback
    const { page = 1, perPage = 6 } = params;
    const start = (page - 1) * perPage;
    const posts = mockBlogPosts.slice(start, start + perPage);
    return {
      posts,
      total: mockBlogPosts.length,
      page,
      totalPages: Math.ceil(mockBlogPosts.length / perPage),
    };
  }
}

/**
 * Get single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const searchParams = new URLSearchParams();
    searchParams.set('subdomain', SUBDOMAIN);
    searchParams.set('slug', slug);

    const response = await fetch(`${BLOG_BASE_URL}?${searchParams.toString()}`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Blog API error: ${response.status}`);
    }

    const data: BlogSingleResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch blog post, using mock data:', error);
    // Return mock data as fallback
    return mockBlogPosts.find((post) => post.slug === slug) || null;
  }
}

/**
 * Get recent blog posts for homepage/sidebar
 */
export async function getRecentBlogPosts(limit = 3): Promise<BlogPost[]> {
  const result = await getBlogPosts({ perPage: limit });
  return result.posts;
}
