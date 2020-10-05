
import React, { useEffect, useState } from 'react';
import { IDiv } from '../types/interface';

interface IProp extends IDiv {
    show: boolean;
    animation?: "fade" | "roate" | "vertical"
    duration?: number;
}

const Fade: React.FC<IProp> = ({ show, children, animation = "fade", duration = 1, ...props }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };


    let inAmiation;
    let outAnimation;

    if (animation === "fade") {
        inAmiation = "JDfadeIn";
        outAnimation = "JDfadeOut"
    }

    if (animation === "roate") {
        inAmiation = "rotateIn"
        outAnimation = "JDrotateOut"
    }

    if (animation === "vertical") {
        inAmiation = "JDfadeInDown";
        outAnimation = "JDfadeOutUp";
    }

    return (
        shouldRender && (
            <div
                {...props}
                style={{ animation: `${show ? inAmiation : outAnimation} ${duration}s`, ...props.style }}
                onAnimationEnd={onAnimationEnd}
            >
                {children}
            </div>
        ) || null
    );
};

export default Fade;