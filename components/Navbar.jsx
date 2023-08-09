'use client'; /* next13 "All components inside the app directory are React Server Components by default, including special files and colocated components This allows you to automatically adopt Server Components with no extra work, and achieve great performance out of the box" "You only need to mark components as 'use client' when they use client hooks such as useState or useEffect"
*/

import { motion } from "framer-motion";

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img 
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
      <img 
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
