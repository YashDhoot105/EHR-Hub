// import React, { useRef } from 'react';
// import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
// import { wrap } from "framer-motion";

// function HomePageNewsSection({ children, baseVelocity = 100 }) {
//   const baseX = useMotionValue(0);
//   const x = useTransform(baseX, (v) => `${v}%`);

//   const directionFactor = useRef(1);
//   const moveCards = () => {
//     const moveBy = directionFactor.current * baseVelocity;
//     baseX.set(baseX.get() + moveBy);
//   };

//   // Change direction when cards reach edge
//   const handleDragEnd = (event, info) => {
//     if (info.offset.x < 0 && baseX.get() <= -100) {
//       directionFactor.current = 1;
//     } else if (info.offset.x > 0 && baseX.get() >= 100) {
//       directionFactor.current = -1;
//     }
//   };

//   return (
//     <motion.div
//       className="parallax"
//       style={{ x }}
//       drag="x"
//       dragConstraints={{ left: 0, right: 0 }}
//       onDragEnd={handleDragEnd}
//       onMouseMove={moveCards}
//     >
//       <motion.div className="scroller" style={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '100%', overflowX: 'scroll' }}>
//         {React.Children.map(children, (child, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             style={{ flex: '0 0 auto' }}
//           >
//             {child}
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default HomePageNewsSection;
