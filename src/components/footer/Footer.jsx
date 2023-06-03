import React from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                
                <div className="infoText">
                    This website is created by Anubhav Pandey.
                </div>
                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
