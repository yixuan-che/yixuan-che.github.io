import clsx from "clsx/lite";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navigation({ children }: { children: React.ReactNode; }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center gap-12">

            <AnimatePresence>
                {isOpen &&
                    <>
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(20px)", opacity: 0 }}
                            className="hidden lg:flex gap-4">
                            {children}
                        </motion.div>

                        <motion.dialog
                            open={isOpen}
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.25 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(20px)", opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden absolute z-50 w-full h-full flex flex-col gap-4 top-0 bg-zinc-900/20 backdrop-blur-md">

                            <div className="fixed bottom-20 sm:bottom-32 left-4 sm:left-8 flex flex-col items-start justify-center gap-4">
                                <MobileLink href="/bio">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 640 640" aria-hidden>
                                        <path fill="currentColor" d="M320 586.7c147.3 0 266.7-119.4 266.7-266.7S467.3 53.3 320 53.3S53.3 172.7 53.3 320s119.4 266.7 266.7 266.7" opacity=".5" />
                                        <g transform="translate(320 320) scale(0.5) translate(-320 -320)">
                                        <path fill="currentColor" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/>
                                        </g>                                
                                    </svg>
                                    Bio
                                </MobileLink>

                                <MobileLink href="/research">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 640 640" aria-hidden>
                                        <path fill="currentColor" d="M320 586.7c147.3 0 266.7-119.4 266.7-266.7S467.3 53.3 320 53.3S53.3 172.7 53.3 320s119.4 266.7 266.7 266.7" opacity=".5" />
                                        <g transform="translate(320 320) scale(0.5) translate(-320 -320)">
                                            <path fill="currentColor" d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z"/>
                                        </g>                              
                                    </svg>
                                    Research
                                </MobileLink>

                                <MobileLink href="/publications">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 640 640" aria-hidden>
                                        <path fill="currentColor" d="M320 586.7c147.3 0 266.7-119.4 266.7-266.7S467.3 53.3 320 53.3S53.3 172.7 53.3 320s119.4 266.7 266.7 266.7" opacity=".5" />
                                        <g transform="translate(320 320) scale(0.5) translate(-320 -320)">
                                            <path fill="currentColor" d="M432.5 82.3L382.4 132.4L507.7 257.7L557.8 207.6C579.7 185.7 579.7 150.3 557.8 128.4L511.7 82.3C489.8 60.4 454.4 60.4 432.5 82.3zM343.3 161.2L342.8 161.3L198.7 204.5C178.8 210.5 163 225.7 156.4 245.5L67.8 509.8C64.9 518.5 65.9 528 70.3 535.8L225.7 380.4C224.6 376.4 224.1 372.3 224.1 368C224.1 341.5 245.6 320 272.1 320C298.6 320 320.1 341.5 320.1 368C320.1 394.5 298.6 416 272.1 416C267.8 416 263.6 415.4 259.7 414.4L104.3 569.7C112.1 574.1 121.5 575.1 130.3 572.2L394.6 483.6C414.3 477 429.6 461.2 435.6 441.3L478.8 297.2L478.9 296.7L343.4 161.2z"/>
                                        </g>                              
                                    </svg>
                                    Publications
                                </MobileLink>

                                <MobileLink href="/contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 640 640" aria-hidden>
                                        <path fill="currentColor" d="M320 586.7c147.3 0 266.7-119.4 266.7-266.7S467.3 53.3 320 53.3S53.3 172.7 53.3 320s119.4 266.7 266.7 266.7" opacity=".5" />
                                        <g transform="translate(320 320) scale(0.5) translate(-320 -320)">
                                            <path fill="currentColor" d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                                        </g>                              
                                    </svg>
                                    Contact
                                </MobileLink>

                                <motion.button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    initial={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 25, damping: 2, mass: 0.1 }}
                                    animate={{ transform: "translateY(0px)", filter: "blur(0px)", opacity: 1 }}
                                    exit={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
                                    className="w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 640 640" aria-hidden>
                                        <path fill="currentColor" d="M320 586.7c147.3 0 266.7-119.4 266.7-266.7S467.3 53.3 320 53.3S53.3 172.7 53.3 320s119.4 266.7 266.7 266.7" opacity=".5" />
                                        <g transform="translate(320 320) scale(0.5) translate(-320 -320)">
                                            <path fill="currentColor" d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                                        </g>                              
                                    </svg>
                                    Close
                                </motion.button>
                            </div>
                        </motion.dialog>
                    </>
                }
            </AnimatePresence>

            <button type="button" onClick={() => setIsOpen(prev => !prev)} className="w-8 h-fit text-white cursor-pointer hover:outline-2 focus-visible:outline-2 outline-offset-1 outline-zinc-100/20 focus-visible:outline-white rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={clsx("transition-all duration-300 ease-in-out", isOpen ? "rotate-90" : "rotate-0")}>
                    <title>Menu Icon</title>
                    <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5" />
                    <path fill="currentColor" d="M13.024 14.56c.493-.197.739-.296.932-.465c.05-.043.096-.09.139-.139c.17-.193.268-.44.465-.932c.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938c-.493.197-.74.295-.933.465c-.049.043-.095.09-.138.139c-.17.193-.268.44-.465.932c-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938" />
                </svg>
            </button>
        </div>
    );
}

type MobileLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

function MobileLink({ href, className, children }: MobileLinkProps) {
    return (
        <motion.a
            href={href}
            initial={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
            transition={{ type: "spring", stiffness: 25, damping: 2, mass: 0.1 }}
            animate={{ transform: "translateY(0px)", filter: "blur(0px)", opacity: 1 }}
            exit={{ transform: "translateY(100px)", filter: "blur(20px)", opacity: 0 }}
            className={clsx("w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer", className)}>
            {children}
        </motion.a>
    );
}