const WP_API_URL = import.meta.env.WORDPRESS_API_URL;

// ---- Types ----

export type WPImage = {
  url: string;
  alt: string;
};

export type WPTestimonial = {
  id: number;
  acf: {
    client_name: string;
    client_location: string;
    testimonial_type: "image" | "video";
    testimonial_content: string;
    client_image: WPImage | false;
    video_url: string;
    video_poster: string;
  };
};

export type WPPortfolioProject = {
  id: number;
  acf: {
    before_image: WPImage | false;
    before_image_alt: string;
    after_image: WPImage | false;
    after_image_alt: string;
    challenge_title: string;
    challenge_text: string;
    result_title: string;
    result_text: string;
  };
};

export type WPFaqItem = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  menu_order: number;
};

// ---- Helpers ----

export function isWordPressConfigured(): boolean {
  return !!WP_API_URL;
}

async function wpFetch<T>(endpoint: string): Promise<T | null> {
  if (!WP_API_URL) return null;

  try {
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/${endpoint}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch (e) {
    console.warn(`[WordPress] Failed to fetch /${endpoint}:`, e);
    return null;
  }
}

// ---- API functions ----

/**
 * Fetches testimonials from the custom post type "osa_testimonial".
 * Requires ACF fields: client_name, client_location, testimonial_type,
 * testimonial_content, client_image, video_url, video_poster.
 */
export async function getTestimonials() {
  return wpFetch<WPTestimonial[]>(
    "osa_testimonial?acf_format=standard&per_page=100",
  );
}

/**
 * Fetches portfolio projects from the custom post type "osa_portfolio".
 * Requires ACF fields: before_image, after_image, challenge_title,
 * challenge_text, result_title, result_text.
 */
export async function getPortfolioProjects() {
  return wpFetch<WPPortfolioProject[]>(
    "osa_portfolio?acf_format=standard&per_page=100",
  );
}

/**
 * Fetches FAQ items from the custom post type "osa_faq".
 * Uses the post title as the question and post content as the answer.
 * Sort order is controlled by the "Order" field in WordPress.
 */
export async function getFaqItems() {
  return wpFetch<WPFaqItem[]>(
    "osa_faq?_fields=id,title,content,menu_order&per_page=100&orderby=menu_order&order=asc",
  );
}
