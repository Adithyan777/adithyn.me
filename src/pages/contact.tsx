import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactInfo } from '@/components/contact-info';
import { SocialLinks } from '@/components/social-links';

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12 px-2"
    >
      {/* <div className="grid gap-12 lg:grid-cols-2"> */}
      <div>
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold px-0 mb-4">Get in Touch</h1>
            <p className="text-muted-foreground">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>
          <div className='px-2 space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-8'>
              <ContactInfo/>
              <SocialLinks />
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}