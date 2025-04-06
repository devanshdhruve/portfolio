import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold">Get in Touch</CardTitle>
              <CardDescription>
                Have a question or want to work together? Send me a message!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your Message"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;