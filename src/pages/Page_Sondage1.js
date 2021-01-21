import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Presentation from "../components/Presentation/Presentation";

const Page_Sondage1 = () => {
  const [isStart, setIsStart] = useState(false);
  return (
    <>
      <AnimatePresence>
        {!isStart && (
          <Presentation
            key="presentation"
            setIsStart={() => setIsStart(!isStart)}
          />
        )}
        {isStart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
          >
            bonjour
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Page_Sondage1;
