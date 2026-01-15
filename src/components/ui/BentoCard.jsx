import { motion } from 'framer-motion';

export default function BentoCard({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
  variant = 'default',
  delay = 0,
  onClick,
}) {
  const variants = {
    default: 'bg-white border-slate-200',
    primary: 'bg-blueprint-600 text-white border-blueprint-700',
    subtle: 'bg-slate-100 border-slate-200',
    accent: 'bg-gradient-to-br from-blueprint-50 to-white border-blueprint-200',
  };

  const colSpanClasses = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    6: 'md:col-span-6',
  };

  const rowSpanClasses = {
    1: 'md:row-span-1',
    2: 'md:row-span-2',
    3: 'md:row-span-3',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Heavy, premium easing
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      onClick={onClick}
      className={`
        col-span-1 ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]}
        rounded-2xl border p-6 md:p-8
        transition-colors duration-300
        ${variants[variant]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
