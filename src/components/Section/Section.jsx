import propTypes from "prop-types";
import { Section } from "./Section.styled";

export const SectionWraper = ({ children }) => {
    return (
        <Section>
            {children}
        </Section>
    )
};

SectionWraper.propTypes = {
    children: propTypes.node,
};