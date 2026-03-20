# EEC Brand Promoter - Staff Providing & Media Services Website

A professional business website for a company providing five major services across India.

## Services Offered

1. **Staff Providing Services** - Skilled & unskilled manpower with 11-month guarantee
2. **Professional Services** - Mobile app development, video shoots, modeling
3. **Gallery** - Work showcase and event photos/videos
4. **Blog & News** - Company updates and industry news
5. **Contact** - Easy communication for licensed companies

## Installation

```bash
npm install
```

## Running the Project

```bash
npm start
```

## Payment Gateway Setup (Razorpay)

Create a `.env` file in the project root and add at least one of these:

```env
REACT_APP_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxx
REACT_APP_RAZORPAY_PAYMENT_LINK=https://rzp.io/l/your-payment-link
```

- Use `REACT_APP_RAZORPAY_KEY_ID` for embedded Razorpay checkout.
- Use `REACT_APP_RAZORPAY_PAYMENT_LINK` as direct payment page fallback.
- After updating `.env`, restart the app (`npm start`) to apply changes.

The application will open at [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

## Technologies Used

- React 18
- React Router
- React Icons
- Modern CSS3

## Contact

Building No. 561/A  
Shiv Mandir Main Road  
Near Metro Station Gate No. 1/5  
Chirag Delhi, South Delhi  
PIN Code: 110017
