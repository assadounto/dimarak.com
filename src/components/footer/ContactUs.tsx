import React from 'react';


const ContactUs: React.FC = () => {
    return (
        <div id='footer'>
            <h3 className="text-xl font-bold dark:text-white  mb-4 text-dark">Contact Us</h3>
            <ul className='dark:text-gray-300 text-paragraph'>
                <li className="flex items-center mb-2">
                    <span>Achimota, Accra, Ghana</span>
                </li>
                <li className="flex items-center mb-2">
                    <span>{"Phone: "}</span>
                    <a href="tel:+233 53 074 7527" className="hover:text-primary" >+233 53 074 7527</a>
                </li>
                <li className="flex items-center">
                    <span>{"Email: " }</span>
                    <a href="mailto:info@company.com" className="hover:text-primary"> info@dimarak.com.com</a>
                </li>
            </ul>
        </div>
    );
};

export default ContactUs;
