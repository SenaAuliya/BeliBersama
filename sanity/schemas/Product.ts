export const Products = {
  name: "Products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "price",
      title: "price",
      type: "number",
    },
    {
      name: "description",
      title: "description",
      type: "text",
    },
    {
      name: "category",
      title: "category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};
