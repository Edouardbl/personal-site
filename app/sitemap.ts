import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://edouard-blondeau.com/en",
      lastModified: new Date(),
    },
    {
      url: "https://edouard-blondeau.com/fr",
      lastModified: new Date(),
    },
  ]
}
