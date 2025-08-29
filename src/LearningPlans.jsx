import { motion } from 'framer-motion';
import styles from './LearningPlans.module.css';
const LearningPlans = () => {
  const plans = [
    { title: 'Family Plan', price: '$19/month', features: ['Parent dashboard', 'Offline activity kits'] },
    { title: 'School Integration', price: '$99/month', features: ['Teacher dashboard', 'Curriculum alignment'] },
  ];
  return (
    <motion.div className={styles.plansGrid} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {plans.map((plan, index) => (
        <motion.div key={index} className={styles.plan} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, delay: index * 0.2 }}>
          <h3>{plan.title}</h3><p className={styles.price}>{plan.price}</p>
          <ul>{plan.features.map(f => <li key={f}>{f}</li>)}</ul>
          <button className="btn">Select Plan</button>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default LearningPlans;
