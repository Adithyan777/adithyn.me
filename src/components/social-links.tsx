import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Adithyan777',
    color: 'hover:text-[#333]'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adithyan-krishnan-1b32bb290',
    color: 'hover:text-[#0077b5]'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://x.com/adithyn_krshna',
    color: 'hover:text-[#1DA1F2]'
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1
            }}
          >
            <Button
              variant="outline"
              size="icon"
              className={`transition-colors ${social.color} dark:hover:text-white`}
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}