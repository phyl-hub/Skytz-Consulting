import { useEffect } from "react";

/**
 * SEO component for page-level meta tags
 * Updates document title and meta description on mount
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Cleanup not needed - next page will overwrite
  }, [title, description]);

  return null;
}
