import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import { getCollection } from "astro:content";

// 注意: 在静态输出模式下，Actions 无法工作。
// 这个文件保留以备将来使用，但不能在静态构建中使用。
// 如需使用，请改用客户端 fetch 或预渲染+getStaticPaths

export const categories = {
    getCategories: defineAction({
        input: z.null(),
        handler: async () => {
            const allArticles = await getCollection("articles");
            const categories = [
                ...new Set(allArticles.map((article) => article.data.category)),
            ];
            return { success: true, categories };
        }
    }),
    filterByCategory: defineAction({
        input: z.object({
            category: z.string()
        }),
        handler: async ({ category }) => {
            const allArticles = await getCollection("articles");
            
            if (category === "all") {
                return { success: true, articles: allArticles };
            }

            const filteredArticles = allArticles.filter((article) => 
                article.data.category.toLowerCase() === category.toLowerCase()
            );

            return { success: true, articles: filteredArticles };
        }
    })
};