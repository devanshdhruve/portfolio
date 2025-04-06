import { motion } from 'framer-motion';

const skills = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'],
  blockchain: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle'],
  other: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing'],
};

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies
                and blockchain development. With a strong foundation in both front-end and
                back-end development, I create scalable and user-friendly applications.
              </p>
              <p className="text-lg text-muted-foreground">
                My journey in blockchain technology has equipped me with deep knowledge of
                smart contract development and decentralized applications. I'm always
                excited to take on new challenges and contribute to innovative projects.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">My Skills</h2>
              <div className="space-y-8">
                <SkillCategory title="Frontend" items={skills.frontend} />
                <SkillCategory title="Backend" items={skills.backend} />
                <SkillCategory title="Blockchain" items={skills.blockchain} />
                <SkillCategory title="Other" items={skills.other} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;