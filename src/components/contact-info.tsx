import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alex.chen@example.com',
    link: 'mailto:alex.chen@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Mon-Fri, 9AM-6PM PST',
  },
  {
    icon: Globe,
    label: 'Languages',
    value: 'English, Mandarin',
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              {item.link ? (
                <a
                  href={item.link}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium">{item.value}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}