import { motion } from "framer-motion";
const animations = {
    animate: {opacity: 1 , y:0},
    initial:{opacity : 0 , y:100} ,
    exit: { opacity: 0 ,y :-100} ,
}
const AnimatedPage = ({children,...props}) => {
    return (
        <motion.div
            variants={animations}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ease:"linear",duration: .8 }}
            {...props}
        >
            {children}
        </motion.div>
     )

}
export default AnimatedPage