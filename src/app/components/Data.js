import Email from '/public/email.svg'
import Repairs from '/public/hammering.svg'
import Customer from '/public/customer-satisfaction.svg'
import Servicing from '/public/servicing.svg'
import PriceTag from '/public/price-tag.svg'
import Phone from '/public/smartphone-incoming-call.svg'
import Quality from '/public/quality-service.svg'
import Technician from '/public/technician-with-helmet.svg'


const services = [
    {
        icon: '',
        title:'Installation',
        description:`Whether you need a new air conditioning unit, refrigerator, or washing machine installed, our expert technicians are here to help. We ensure that your appliance is installed correctly and efficiently, so you can enjoy its benefits without any hassle.`,
    },
    {
        icon: Servicing,
        title:'Servicing',
        description:`Regular servicing of your appliances is essential to maintain their efficiency and prolong their lifespan. Our comprehensive servicing packages are designed to keep your air conditioner, refrigerator, and washing machine in top condition.`,
    },
    {
        icon: Repairs,
        title:'Repairs',
        description:`Is your air conditioner not cooling properly? Is your refrigerator making strange noises? Our team of skilled technicians can diagnose and repair any issues with your appliances, restoring them to optimal working condition.`,
    },
];

const choice = [
    {
        icon: Technician,
        title:'Experienced Technicians',
        description:`Our technicians are highly skilled and trained to handle all types of appliances.`,
    },
    {
        icon: Quality,
        title:'Quality Service',
        description:`We take pride in delivering high-quality service that exceeds our customers' expectations.`,
    },
    {
        icon: PriceTag,
        title:'Affordable Pricing',
        description:`We offer competitive pricing on all our services, ensuring that you get the best value for your money.`,
    },
    {
        icon: Customer,
        title:'Customer Satisfaction',
        description:`Your satisfaction is our priority, and we strive to provide you with the best possible service.`,
    },
];

const contact = [
    {
        icon: Email,
        title:'Email Address',
        description:`info@climate-cool.com`,
    },
    {
        icon: Phone,
        title:'Phone Number',
        description:`(246)422-1000`,
    },
];


export {choice, contact, services};