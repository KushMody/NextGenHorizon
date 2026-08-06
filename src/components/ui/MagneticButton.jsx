import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", onClick, ...props }) => {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default MagneticButton;


