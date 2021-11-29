import React from 'react'
import Footer from '../components/index'

export const FooterContainer = ()=>{
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Column>
                    <Footer.Title>About us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonial</Footer.Link>
                </Footer.Column>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer;