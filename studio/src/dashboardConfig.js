export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6163250b939c2551b2c7bd3e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8xhmeoww",
                  apiId: "8148661e-3fee-4d30-92d7-03b6b56696d2",
                },
                {
                  buildHookId: "6163250bb70a9dc2b233e1d2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-arinfneb",
                  apiId: "5019f468-3bcf-460f-804f-03251df63049",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DarinLevesque/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-arinfneb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
