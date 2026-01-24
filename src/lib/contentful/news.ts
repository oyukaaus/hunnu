import { contentfulClient } from "../contentful";

export async function getNews(lang: "en" | "mn") {
  const locale = lang === "mn" ? "mn-MN" : "en-US";

  const res = await contentfulClient.getEntries({
    // content_type: "pageBlogPost",
    locale,
    // order: ["-fields.publishDate"],
  });

  return res.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    summary: item.fields.summary,
    date: item.fields.publishDate,
    image: item.fields.coverImage?.fields?.file?.url,
    content: item.fields.content,
  }));
}
