import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';
import { useRef } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adithyn.krshna@gmail.com',
    link: 'mailto:adithyn.krshna@gmail.com'
  },
  // {
  //   icon: Phone,
  //   label: 'Phone',
  //   value: '+1 (555) 123-4567',
  //   link: 'tel:+15551234567'
  // },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, IN',
  },
  // {
  //   icon: Clock,
  //   label: 'Availability',
  //   value: 'Mon-Fri, 9AM-6PM PST',
  // },
  {
    icon: Globe,
    label: 'Languages',
    value: 'English, Malayalam, Hindi',
  }
];

export function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div ref={ref} className="space-y-6">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
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