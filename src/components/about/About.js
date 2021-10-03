import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./about.css";

const About = () => {

    const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.3699114526944!2d90.41265051462214!3d24.01801738445822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dbbd8a7c07d3%3A0x84a01b406e4c8063!2sSoftmax%20Online%20School!5e0!3m2!1sen!2sbd!4v1633296631881!5m2!1sen!2sbd";

    return (
        <>
            <Container className="py-5">
                <div>
                    <h2 className="about_title">About Us</h2>
                    <p>বাংলাদেশের প্রথম অনলাইন ইঞ্জিনিয়ারিং স্কুল Softmax Online School 2016 সালে প্রতিষ্ঠিত হয়। এখানে পলিটেকনিকের একাডেমিক পড়াশুনা, ডুয়েট ভর্তি প্রস্তুতি এবং উপসহকারি চাকরির প্রস্তুতি গ্রহণের সুযোগ রয়েছে। যোগাযোগঃ 09678 677 ***</p>
                </div>
                <Row className="my-3">
                    <Col lg={6}>
                        <h2 className="about_card_title">WHO WE ARE</h2>
                        <p>২০১৬ সালের ১১ নভেম্বর থেকে আমাদের আনুষ্ঠানিক যাত্রা শুরু হয়। আমাদের প্রথম কোর্স প্রোগ্রামিং ইন সি এর ৪০ টি বিশ্ববিদ্যালয় সহ শতাধিক কলেজের শিক্ষার্থীদের কাছে জনপ্রিয়তার ফলে ব্যাপক পরিসরে কাজ শুরা করা হয়। পরবর্তীতে পলিটেকনিকের একাডেমিক পড়াশুনার উপর বিশেষ গুরুত্ব দিয়ে কাজ শুরু হয়। শিক্ষার্থীদের চাহিদার ধারাবাহিকতার ডুয়েট ভর্তি প্রস্তুতির কোর্স চালু করা ২০১৭ সালের জুন মাসের দিকে। এরপর ১ ডিসেম্বর ২০১৯ সালে উপ-সহকারি প্রকৌশলী কোর্স চালুর মাধ্যমে আরো এক ধাপ এগিয়ে যায় Softmax Online School.</p>
                    </Col>
                    <Col lg={6}>
                        <h2 className="about_card_title">WHAT WE DO</h2>
                        <p>আমরাই বাংলাদেশের প্রথম এবং একমাত্র পূর্নাঙ্গ অনলাইন ইঞ্জিনিয়ারিং স্কুল। যেখান থেকে ভিডিও ক্লাসের মাধ্যমে পলিটেকনিক শিক্ষার্থীরা তাদের যে কোন সেমিস্টারের একাডেমিক পড়াশুনা করতে পারে। এটা প্রাইভেট এর বিকল্প হিসেবে সেরা একটি মাধ্যম হিসেবে সমাদৃত। এছাড়াও ডুয়েট ভর্তি প্রস্তুতি ও জবের ক্লাস ভিডিও এর মাধ্যমে করার সুযোগ সৃষ্টি করেছে Softmax Online School.</p>
                    </Col>
                </Row>
                <Row>
                    <iframe className="shadow rounded" src={url} width="600" height="350" style={{border:"0px"}} allowfullscreen="" loading="lazy"></iframe>
                </Row>
            </Container>
        </>
    );
};

export default About;