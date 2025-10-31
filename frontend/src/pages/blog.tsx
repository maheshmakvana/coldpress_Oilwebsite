import { Helmet } from "react-helmet-async";
import { Share2, Clock, Tag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buildMeta } from "@/lib/seo";

const meta = buildMeta({
  title: "VerdantPure Journal",
  description: "Research-backed insights on cold-pressed oils, nutrition science, and regenerative sourcing.",
  path: "/blog",
});

const posts = [
  {
    slug: "cold-pressed-vs-refined",
    title: "Cold-Pressed vs Refined Oils: What the Lab Says",
    excerpt:
      "We ran peroxide, tocopherol, and fatty acid stability tests to compare VerdantPure oils with market refined oils. The difference is night and day.",
    cover: "/images/mustard/mustard-farm.svg",
    tags: ["Science", "Quality"],
    readingTime: "6 min read",
    content: [
      "Our ISO 22000 lab partners measured peroxide values of VerdantPure mustard oil at 1.2 meq/kg — significantly lower than the 4.8 meq/kg seen in refined samples.",
      "Vitamin E (tocopherol) retention remained above 18 mg/100g thanks to sub-40°C extraction.",
      "Refined oils lost aromatic phenolics post-deodorisation, whereas VerdantPure retained natural pungency and antioxidants.",
    ],
  },
  {
    slug: "omega-ratios-indian-cooking",
    title: "Balancing Omega Ratios in Indian Cooking",
    excerpt:
      "How to pair cold-pressed groundnut, sesame, and mustard oils to achieve an omega-6 to omega-3 ratio aligned with Indian Council of Medical Research guidance.",
    cover: "/images/groundnut/groundnut-field.svg",
    tags: ["Nutrition", "Guides"],
    readingTime: "4 min read",
  },
  {
    slug: "traceable-sourcing",
    title: "Inside VerdantPure's Traceable Supply Chain",
    excerpt:
      "A look at how our sourcing team onboards regenerative farmer groups, capturing moisture, aflatoxin, and soil health data.",
    cover: "/images/almond/almond-orchard.svg",
    tags: ["Sourcing"],
    readingTime: "5 min read",
  },
];

const heroPost = posts[0];
const relatedPosts = posts.slice(1);

export default function BlogPage() {
  return (
    <div className="space-y-16 pb-24">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>
      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6">
        <Badge variant="outline" className="border-primary/50 text-xs uppercase">VerdantPure Journal</Badge>
        <h1 className="mt-4 font-serif text-4xl text-foreground">Insights for conscious kitchens</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Explore lab learnings, culinary applications, and sourcing stories from the VerdantPure community.
        </p>
      </section>
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <Tabs defaultValue="article">
          <TabsList>
            <TabsTrigger value="article">Featured article</TabsTrigger>
            <TabsTrigger value="latest">Latest posts</TabsTrigger>
          </TabsList>
          <TabsContent value="article">
            <article className="rounded-[2.5rem] border border-border/70 bg-background p-8 shadow-xl">
              <img
                src={heroPost.cover}
                alt="Lab scientists comparing cold-pressed and refined oils"
                className="h-72 w-full rounded-3xl object-cover"
              />
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-primary">
                {heroPost.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-serif text-3xl text-foreground">{heroPost.title}</h2>
              <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" aria-hidden="true" /> {heroPost.readingTime}</span>
                <span className="inline-flex items-center gap-1"><Share2 className="h-4 w-4" aria-hidden="true" /> Share</span>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {heroPost.content?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                Tagged under: {heroPost.tags.join(", ")}
              </div>
            </article>
            <div className="mt-10">
              <h3 className="font-serif text-2xl text-foreground">Related reads</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {relatedPosts.map((post) => (
                  <Card key={post.slug} className="card-hover h-full rounded-3xl border border-border/70 bg-background">
                    <img src={post.cover} alt={post.title} className="h-48 w-full rounded-t-3xl object-cover" />
                    <CardHeader>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" aria-hidden="true" /> {post.readingTime}</span>
                      <span className="inline-flex items-center gap-1"><Tag className="h-4 w-4" aria-hidden="true" /> {post.tags.join(", ")}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="latest">
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Card key={post.slug} className="card-hover h-full rounded-3xl border border-border/70 bg-background">
                  <img src={post.cover} alt={post.title} className="h-44 w-full rounded-t-3xl object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" aria-hidden="true" /> {post.readingTime}</span>
                    <span className="inline-flex items-center gap-1"><Tag className="h-4 w-4" aria-hidden="true" /> {post.tags.join(", ")}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
