import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";

export default async function search(req, res) {
  const { query } = req.query;

  const searchQuery = groq`
        *[_type in ["post", 'author', 'category'] 
        && (
        title match $queryString + '*' 
        || name match $queryString + '*')] 
        | order(publishedAt desc){
            _id,
          title,
          'slug' : slug.current,
          description,
          "imageUrl": image[0].asset->url}
        }
    `;

    try {
        const data = await client.fetch(searchQuery, {
          queryString: query,
        });
      
        res.status(200).json(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}