import React from 'react'
import { Icon } from '../components/icons/styles/icons';
import Footer from '../components/index'

export const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonial</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact us</Footer.Title>
                        <Footer.Link href="#">Jakarta, Indonesia</Footer.Link>
                        <Footer.Link href="#">Malaysia</Footer.Link>
                        <Footer.Link href="#">Singapore</Footer.Link>
                        <Footer.Link href="#">Support</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-f"/>Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-linkedin-in"/>Linkedin</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube"/>Youtube</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer;