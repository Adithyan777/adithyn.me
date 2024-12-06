import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const posts = [
  {
    title: 'The Future of Web Development',
    date: 'March 15, 2024',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Building Accessible Web Applications',
    date: 'March 10, 2024',
    excerpt: 'A comprehensive guide to creating web applications that are accessible to everyone.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
  },
];

export function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12"
    >
      <h1 className="text-5xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date} • {post.readTime}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}