import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { IoIosFootball } from "react-icons/io";
import { Utensils, Plane } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const hobbies = [
    {
      icon: <IoIosFootball className="text-4xl" />,
      title: "Football",
      description: "I'm a massive football fan, I follow the game with unmatched enthusiasm. Whether it's watching matches, analyzing plays, or kicking the ball around, football keeps me energized and inspired."
    },
    {
      icon: <Utensils size={32}/>,
      title: "Food",
      description: "I really enjoy exploring diverse cuisines as well as experimenting them in the kitchen. Good food fuels creativity!"
    },
    {
      icon: <Plane size={32} />,
      title: "Travelling",
      description: "Exploring new places, experiencing different cultures, and creating lasting memories through adventures around the world."
    }
  ];

export function BeyondCode() {

  return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto py-12 px-2"
      >
        <h2 className="text-5xl font-bold mb-4">Beyond Code</h2>
        <p className="text-muted-foreground">
          When I'm not immersed in AI algorithms or debugging code, you'll likely find me exploring my other passions:
        </p>
        
        <div className="grid grid-cols-1 px-2 mt-12 space-y-8 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg transition-all h-full"
            >
              <Card className="p-6 h-full flex flex-col">
                <CardHeader className="space-y-2">
                  <div>{hobby.icon}</div>
                  <h3 className="text-3xl font-bold">{hobby.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
  );
}