import React from "react";
import './App.css'
import logo from '../public/image.png'
import send from "../public/send money.avif"
import bill from '../public/bill.jpg'
import card from '../public/card.jpg'
import qr from '../public/qr.webp'
import sadqat from '../public/sadqat.png'
import feedback from '../public/feedback.png'
import girl from '../public/girl.png'
function Ui(){

  return(
   <>
   <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-4xl text-heading font-semibold whitespace-nowrap text-white"><span className="text-blue-600">B</span>ank<span className="text-blue-600">.</span></span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none btn">Join Us</button>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary text-white">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">About Us</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Our App</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Team</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<section className="text-gray-600 body-font mt-10">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-3xl mb-4  text-white font-bold main">Banking Has
        <br className="hidden lg:inline-block"/> Become <span className="text-blue-600 font-bold">easy</span>
      </h1>
      <p className="mb-8 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro impedit nostrum aliquam odio neque laudantium sint praesentium ipsam nemo ab fugiat, pariatur placeat animi,</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-sm cursor-pointer code">Let's get started</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt={'boy'} src={logo}/>
    </div>
  </div>
</section>
{/* <h1 className="title-font sm:text-4xl text-3xl mb-4  text-white font-bold"><center>Track Tor Budget</center></h1>
<p className="mb-8 leading-relaxed text-white"><center>You can easily calculateyour budget, <span>keep track of income and expenses</span></center></p> */}
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl lg:text-5xl font-medium title-font mb-4 text-white">Track <span className="text-blue-600"> Tour</span> Budget</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">You can easily calculate your budget, <span>keep track of income and expenses </span></p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={send}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200  bg-blue-200 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Send Money Instantly</h2>
            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Fast, Secure & Easy Transfers</h1>
            <p class="leading-relaxed"> Our secure platform ensures quick transactions with complete reliability,  simple and stress-free.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bill}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-blue-200 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Bill Payments Made Easy</h2>
            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Pay Your Bills in Seconds</h1>
            <p class="leading-relaxed">Pay electricity, gas, and internet bills quickly Enjoy hassle-free bill payments with instant confirmation and complete peace of mind.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={qr}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-blue-200 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">QR Payment</h2>
            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Scan, Pay, and Go</h1>
            <p class="leading-relaxed">Make payments instantly by scanning a QR code. Enjoy fast, secure, and smooth and convenient payment experience</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={card}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-blue-200 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Card Management</h2>
            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Control Your Card with Ease</h1>
            <p class="leading-relaxed">Manage your cards effortlessly by viewing details, setting limits, and blocking or unblocking your card anytime.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={sadqat}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-blue-200 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Zakat & Sadaqat</h2>
            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Give with Purpose, Help with Heart</h1>
            <p class="leading-relaxed">Your contributions reach those in need, spreading hope, care, and compassion within the community.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={feedback}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-blue-200 opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Feedback</h2>
            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Your Opinion Matters</h1>
            <p class="leading-relaxed">Share your feedback to help us improve our services. Your suggestions and ideas allow us to serve you better.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="text-gray-600 body-font overflow-hidden">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

    {/* Image */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 animate-slideLeft">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={girl}
      />
    </div>

    {/* Content */}
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate-slideRight">
      
      <h1 className="title-font sm:text-3xl lg:text-5xl mb-4 font-medium text-white">
        <span className="text-blue-600">B</span>ank
        <span className="text-blue-600">.</span> Mobile
      </h1>

      <p className="mb-8 leading-relaxed text-white sm:text-4xl lg:text-5xl">
        BANKING AT <br /> YOUR <br /> FINGERTIPS
      </p>

      <div className="flex justify-center animate-fadeIn delay-300">
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 hover:bg-blue-700 rounded text-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
          Download Now
        </button>
      </div>

    </div>
  </div>
</section>




<section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">

    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img
        alt="Banking Services"
        class="object-cover object-center h-full w-full"
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      />
    </div>

    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">

      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5">
          <svg fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 8c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2z"/>
            <path d="M6 10v10h12V10"/>
            <path d="M4 10h16"/>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-blue-600 text-lg title-font font-semibold mb-3">
            Secure Online Banking
          </h2>
          <p class="leading-relaxed text-base text-gray-200">
            Advanced encryption aur multi-layer security ke sath apne accounts ko
            24/7 safe aur accessible rakhein.
          </p>
        </div>
      </div>

      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5">
          <svg fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <path d="M7 10l5 5 5-5"/>
            <path d="M12 15V3"/>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-blue-600 text-lg title-font font-semibold mb-3">
            Instant Money Transfer
          </h2>
          <p class="leading-relaxed text-base text-gray-200">
            Local aur international transfers seconds mein karein, bina kisi
            hassle ke.
          </p>
        </div>
      </div>

      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5">
          <svg fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <path d="M2 10h20"/>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-blue-600 text-lg title-font font-semibold mb-3">
            Smart Card Management
          </h2>
          <p class="leading-relaxed text-base text-gray-200">
            Debit aur credit cards ko easily block, unblock aur monitor karein
            mobile banking ke zariye.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<center>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">WHO DOESN'T LOVE DISCOUNTS?</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-300  sm:text-4xl lg:text-5xl">Best discounts exclusively for you on <span className="text-blue-600">B</span>ank<span className="text-blue-600">.</span> Cards</p>
</center>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

    <img
      class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl shadow-lg"
      alt="Bank Discount Offer"
      src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
    />

    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
       <span className="text-blue-600">Exclusive</span>  Banking Discounts
      </h1>

      <p class="mb-8 leading-relaxed text-base text-gray-200">
        Apne debit aur credit card ke sath shopping, dining aur online payments par
        <span class="font-semibold text-blue-600">up to 30% discount</span> hasil karein.
        Limited time offers sirf hamare valued customers ke liye.
      </p>

      <div class="flex justify-center">
        <div className="flex justify-center animate-fadeIn delay-300">
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 hover:bg-blue-700 rounded text-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
          View Offers
        </button>
      </div>

        <button
          class="ml-4 inline-flex text-blue-700 cursor-pointer bg-white border border-blue-600 py-2 px-6 focus:outline-none hover:bg-blue-50 rounded text-lg">
          Learn More
        </button>
      </div>
    </div>

  </div>
</section>


<section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-semibold title-font mb-2 text-white">
        Account Plans & Charges
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
        Apni banking needs ke mutabiq best account plan choose karein. Transparent
        charges aur premium benefits ke sath.
      </p>
    </div>

    <div class="lg:w-2/3 w-full mx-auto overflow-auto bg-blue-200 rounded-lg shadow">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font font-medium text-gray-200 text-sm bg-gray-100 rounded-tl rounded-bl">
              Account Type
            </th>
            <th class="px-4 py-3 title-font font-medium text-gray-200 text-sm bg-gray-100">
              Monthly Fee
            </th>
            <th class="px-4 py-3 title-font font-medium text-gray-200 text-sm bg-gray-100">
              ATM Transactions
            </th>
            <th class="px-4 py-3 title-font font-medium text-gray-200 text-sm bg-gray-100">
              Daily Transfer Limit
            </th>
            <th class="w-10 bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="px-4 py-3">Basic Account</td>
            <td class="px-4 py-3 text-gray-200">Free</td>
            <td class="px-4 py-3">5 / month</td>
            <td class="px-4 py-3">PKR 50,000</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>

          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Standard Account</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-gray-200">PKR 500</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">10 / month</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">PKR 200,000</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>

          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Premium Account</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-gray-200">PKR 1,500</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">Unlimited</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">PKR 1,000,000</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>

          <tr>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              Business Account
            </td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-gray-200">
              PKR 3,000
            </td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              Unlimited
            </td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              PKR 5,000,000
            </td>
            <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto items-center">
      <a class="text-blue-600 inline-flex items-center">
        View Full Charges Schedule
        <svg fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>

      <button class="flex ml-auto text-white bg-blue-600 cursor-pointer border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
        Open Account
      </button>
    </div>

  </div>
</section>



<section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-semibold title-font mb-4 text-white">
        Trusted Banking at Scale
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
        Hamari digital banking services millions ke liye reliable, secure aur
        fast solutions provide karti hain.
      </p>
    </div>

    <div class="flex flex-wrap -m-4 text-center">

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-blue-400 shadow-sm">
          <svg fill="none" stroke="currentColor" stroke-width="2"
            class="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 8c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2z"/>
            <path d="M6 10v10h12V10"/>
            <path d="M4 10h16"/>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-200">2.5M+</h2>
          <p class="leading-relaxed">Active Accounts</p>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-blue-400 shadow-sm">
          <svg fill="none" stroke="currentColor" stroke-width="2"
            class="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-200">1.8M+</h2>
          <p class="leading-relaxed">Mobile App Users</p>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-blue-400 shadow-sm">
          <svg fill="none" stroke="currentColor" stroke-width="2"
            class="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <path d="M7 10l5 5 5-5"/>
            <path d="M12 15V3"/>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-200">10M+</h2>
          <p class="leading-relaxed">Monthly Transactions</p>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg bg-blue-400 shadow-sm">
          <svg fill="none" stroke="currentColor" stroke-width="2"
            class="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-200">99.9%</h2>
          <p class="leading-relaxed">Secure Transactions</p>
        </div>
      </div>

    </div>
  </div>
</section>




<section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">

      <div class="rounded-lg h-64 overflow-hidden">
        <img
          alt="Bank Leadership"
          class="object-cover object-center h-full w-full"
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"/>
      </div>

      <div class="flex flex-col sm:flex-row mt-10">

        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-600">
            <svg fill="none" stroke="currentColor" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>

          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-lg">
              Umaima Salam
            </h2>
            <p class="text-sm text-gray-500">Chief Executive Officer</p>
            <div class="w-12 h-1 bg-blue-600 rounded mt-2 mb-4"></div>
            <p class="text-base text-gray-200">
              Leading the bank with a vision of trust, transparency and
              customer-first digital innovation.
            </p>
          </div>
        </div>

        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4 text-gray-200">
            At our bank, we believe strong relationships are built on trust,
            security and consistent service excellence. With advanced digital
            banking solutions and a commitment to ethical financial practices,
            we strive to empower individuals and businesses across Pakistan.
            Our focus remains on innovation, customer convenience and long-term
            financial growth.
          </p>

          <a class="text-blue-600 inline-flex items-center font-medium">
            Read Full Message
            <svg fill="none" stroke="currentColor" stroke-width="2"
              class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>


<section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-semibold title-font mb-4 text-white">
        Stay Updated with Our Bank
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
        Latest discounts, new banking services aur important updates directly
        apni email par receive karein.
      </p>
    </div>

    <div
      class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Enter your full name"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
          focus:border-blue-600 focus:bg-transparent focus:ring-2
          focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3
          leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-gray-600">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
          focus:border-blue-600 focus:bg-transparent focus:ring-2
          focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3
          leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <button
        class="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none
        hover:bg-blue-700 rounded text-lg">
        Subscribe
      </button>
    </div>

  </div>
</section>



<footer class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-200 tracking-widest text-sm mb-3">
          Personal Banking
        </h2>
        <nav class="list-none mb-10">
          <li><a class="hover:text-blue-600">Savings Account</a></li>
          <li><a class="hover:text-blue-600">Current Account</a></li>
          <li><a class="hover:text-blue-600">Debit Cards</a></li>
          <li><a class="hover:text-blue-600">Online Banking</a></li>
        </nav>
      </div>

      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-200 tracking-widest text-sm mb-3">
          Business Banking
        </h2>
        <nav class="list-none mb-10">
          <li><a class="hover:text-blue-600">Business Accounts</a></li>
          <li><a class="hover:text-blue-600">SME Financing</a></li>
          <li><a class="hover:text-blue-600">Corporate Cards</a></li>
          <li><a class="hover:text-blue-600">Cash Management</a></li>
        </nav>
      </div>

      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-200 tracking-widest text-sm mb-3">
          Islamic Banking
        </h2>
        <nav class="list-none mb-10">
          <li><a class="hover:text-blue-600">Shariah Accounts</a></li>
          <li><a class="hover:text-blue-600">Murabaha Finance</a></li>
          <li><a class="hover:text-blue-600">Zakat & Sadqat</a></li>
          <li><a class="hover:text-blue-600">Islamic Cards</a></li>
        </nav>
      </div>

      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-200 tracking-widest text-sm mb-3">
          Support
        </h2>
        <nav class="list-none mb-10">
          <li><a class="hover:text-blue-600">Help Center</a></li>
          <li><a class="hover:text-blue-600">FAQs</a></li>
          <li><a class="hover:text-blue-600">Contact Us</a></li>
          <li><a class="hover:text-blue-600">Report Issue</a></li>
        </nav>
      </div>

      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-200 tracking-widest text-sm mb-3">
          About Bank
        </h2>
        <nav class="list-none mb-10">
          <li><a class="hover:text-blue-600">Our Story</a></li>
          <li><a class="hover:text-blue-600">Careers</a></li>
          <li><a class="hover:text-blue-600">Investor Relations</a></li>
          <li><a class="hover:text-blue-600">News & Media</a></li>
        </nav>
      </div>

      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-200 tracking-widest text-sm mb-3">
          Legal
        </h2>
        <nav class="list-none mb-10">
          <li><a class="hover:text-blue-600">Privacy Policy</a></li>
          <li><a class="hover:text-blue-600">Terms & Conditions</a></li>
          <li><a class="hover:text-blue-600">Security</a></li>
          <li><a class="hover:text-blue-600">Compliance</a></li>
        </nav>
      </div>

    </div>
  </div>

  <div class="border-t border-gray-200">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div class="flex flex-wrap justify-center md:justify-start items-end">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label class="leading-7 text-sm text-gray-600">
            Subscribe for Updates
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
            focus:ring-2 focus:ring-blue-200 focus:border-blue-600
            text-base outline-none text-gray-700 py-1 px-3 leading-8"/>
        </div>
        <button
          class="inline-flex text-white bg-blue-600 border-0 py-2 px-6
          hover:bg-blue-700 rounded cursor-pointer">
          Subscribe
        </button>
      </div>

      <span className="inline-flex lg:ml-auto mt-6 lg:mt-0 w-full lg:w-auto justify-center">
        <a className="text-gray-500 hover:text-blue-600 ml-3">Facebook</a>
        <a className="text-gray-500 hover:text-blue-600 ml-3">Twitter</a>
        <a className="text-gray-500 hover:text-blue-600 ml-3">Instagram</a>
        <a className="text-gray-500 hover:text-blue-600 ml-3">LinkedIn</a>
      </span>
    </div>
  </div>

  <div className="bg-gray-500">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-800 text-sm text-center sm:text-left">
        © 2025 ABC Bank. All rights reserved.
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 text-gray-800 text-sm text-center">
        Regulated by State Bank of Pakistan
      </span>
    </div>
  </div>
</footer>


   </>
  )
}
export default Ui