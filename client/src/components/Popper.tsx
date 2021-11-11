import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";

export const Popper = (props: any) => {
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
        null
    );
    const [hoverLink, setHoverLink] = useState(false);
    const [hoverOptions, setHoverOptions] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    let [referenceLink, setReferenceLink] = useState<HTMLButtonElement | null>(
        null
    );
    let [popperLink, setPopperLink] = useState<HTMLDivElement | null>(null);
    let { styles: linkStyles, attributes: linkAttributes } = usePopper(
        referenceLink,
        popperLink,
        {
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [-150, 8] } },
            ],
        }
    );
    useEffect(() => {
        if (hoverLink || hoverOptions) {
            setShowOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowOptions(false);
            }, 200);
            return () => clearTimeout(hide);
        }
    }, [hoverLink, hoverOptions]);

    return (
        <>
            <div
                onMouseEnter={() => setHoverLink(true)}
                onMouseLeave={() => setHoverLink(false)}
                onFocus={() => setHoverLink(true)}
            >
                <button
                    ref={setReferenceLink}
                    onClick={() => {
                        setShowOptions(!showOptions);
                    }}
                ></button>
            </div>

            {showOptions &&
                createPortal(
                    <>
                        <div
                            onMouseEnter={() => setHoverOptions(true)}
                            onMouseLeave={() => setHoverOptions(false)}
                            onFocus={() => setHoverLink(true)}
                            ref={setPopperLink}
                            className="bg-white 2xl:rounded-b-sm 2xl:shadow-lg 2xl:w-80 2xl:ring-1 2xl:ring-black 2xl:ring-opacity-5"
                            style={linkStyles.popper}
                            {...linkAttributes.popper}
                        >
                            <div
                                ref={setArrowElement}
                                style={linkStyles.arrow}
                                data-arrow
                            />
                            {props.children}
                        </div>
                    </>,
                    document.body
                )}
        </>
    );
};
