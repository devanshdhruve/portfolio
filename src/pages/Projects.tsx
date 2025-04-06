import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with React and Node.js',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Decentralized application using Ethereum smart contracts',
    tags: ['Solidity', 'Web3.js', 'React'],
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Mobile-first responsive web application',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;