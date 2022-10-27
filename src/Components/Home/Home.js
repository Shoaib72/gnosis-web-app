import React from 'react';
import { Container } from 'react-bootstrap';
import coding1 from './../Assets/coding1.jpg';
import coding2 from './../Assets/coding2.jpg';

const Home = () => {
    return (
        <div>
            <Container>
                <Container className='d-lg-flex justify-content-center align-items-center gap-5 mt-5'>
                    <img style={{ height: '300px', width: '400px', borderRadius: '20px' }} src={coding1} alt="" />
                    <p className='fw-bold'>Just the thought of learning to code can be very intimidating. The word code is mysterious by definition. It implies a technical form of communication that computers, and not humans, are meant to understand.
                        One way many people start learning to code is by picking a popular programming language and jumping in head first with no direction. This could take the form of an online coding course, a tutorial project, or a random book purchase on a specific topic.</p>
                </Container>
                <Container className='d-lg-flex justify-content-center align-items-center gap-5 mt-5'>
                    <img src={coding2} style={{ height: '300px', width: '400px', borderRadius: '20px' }} alt="" />
                    <p className='fw-bold mt-sm-3'>Rarely do prospective developers start with a roadmap – a bird's eye view of the coding world that outlines a set of relevant programming concepts, languages, and tools that almost 100% of developers use every day. In this article, I propose one such roadmap. I do this by outlining 14 steps – each one discussing an essential concept, language, or tool – that professional developers use to write code, collaborate, and create professional projects.
                        I meticulously chose these 14 steps based on my own personal journey learning to code, which spans almost 20 years.

                        Part of the reason it took me so long to feel comfortable as a developer is that I would learn about specific topics without a broader context of the coding world.</p>
                </Container>
            </Container>
        </div>
    );
};

export default Home;