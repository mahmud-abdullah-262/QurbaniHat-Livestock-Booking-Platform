# 🐄 QurbaniHat — Online Qurbani Livestock Booking Platform

> **Your Qurbani, Our Commitment.**
> Find healthy, certified animals for your blessed sacrifice this Eid ul-Adha.

🔗 **Live Site:** [qurbani-hat-livestock-booking-platf-eight.vercel.app](https://qurbani-hat-livestock-booking-platf-eight.vercel.app/)

---

## 📖 Description

**QurbaniHat** is a modern, full-stack web application designed to simplify the process of purchasing Qurbani livestock online in Bangladesh. Users can browse a curated list of healthy animals (cows, goats, sheep, and buffalos), view detailed profiles, and book animals directly through the platform — all from the comfort of their home.

The platform also serves as an educational resource, offering information on top livestock breeds, proper Qurbani procedures, and Eid al-Adha practices through a structured FAQ section.

---

## ✨ Features

### 🏠 Home Page
- Eye-catching hero section with a call-to-action to browse animals.
- **Featured Animals Carousel** — showcases 4 highlighted Qurbani animals with price, weight, and a quick "See Details" link.

### 🐾 Animals Listing Page
- Displays all available Qurbani animals with image, name, short description, price (BDT), and weight (KG).
- **Sort & Filter** — sort animals by price (Low to High / High to Low) or view all.
- Each animal card has a **"See Details"** button for more info.

### 📋 Animal Detail & Booking
- Full animal profile with complete description and specifications.
- **Online Booking Form** — users can book an animal directly from the detail page.
- Authentication-protected booking (login required).

### 🏆 Top Breeds Section
- Dedicated page listing the best breeds of **Cows**, **Goats**, and **Sheep**.
- Each breed card includes origin, key traits, and suitability for Qurbani.
- Covers popular breeds: Brahman, Sahiwal, Nelore, Boer Goat, Black Bengal, Dorper Sheep, and more.

### ❓ Qurbani FAQ Section
- Informative articles on:
  - **The Proper Method of Performing Qurbani**
  - **What to Do on the Day of Eid al-Adha**
  - **How to Handle and Distribute Qurbani Meat**

### 🔐 Authentication
- Secure user authentication powered by **Better Auth**.
- **Google OAuth Login** — sign in with your Google account in one click.
- Protected routes for booking and profile access.

### 👤 User Profile
- Dedicated profile page for authenticated users.

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js** | React-based full-stack framework (App Router) |
| **Tailwind CSS** | Utility-first CSS styling |
| **DaisyUI** | Pre-built Tailwind component library |
| **HeroUI** | UI component library |
| **Gravity UI** | Additional UI components |

### Backend & Database
| Technology | Purpose |
|---|---|
| **MongoDB** | NoSQL database for storing animal listings and bookings |
| **Railway** | Cloud deployment & backend hosting |
| **JSON Server** | Mock REST API for rapid data serving |

### Authentication
| Technology | Purpose |
|---|---|
| **Better Auth** | Modern authentication library |
| **Google OAuth** | Social login via Google |

### Deployment
| Technology | Purpose |
|---|---|
| **Vercel** | Frontend hosting and deployment |
| **Railway** | Backend/database hosting |

---

## 📁 Project Structure (Overview)

```
qurbani-hat/
├── app/
│   ├── page.jsx              # Home page
│   ├── animals/
│   │   ├── page.jsx          # All animals listing
│   │   └── [id]/page.jsx     # Animal detail + booking form
│   ├── topbreeds/page.jsx    # Top breeds page
│   └── myprofile/page.jsx    # User profile page
├── components/               # Reusable UI components
├── lib/                      # Utility functions & DB connection
├── public/                   # Static assets
└── ...config files
```

---

## 🚀 Getting Started (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/mahmud-abdullah-262/QurbaniHat-Livestock-Booking-Platform.git
cd QurbaniHat-Livestock-Booking-Platform

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your MongoDB URI, Better Auth secret, Google OAuth credentials, etc.

# 4. Run the development server
npm run dev

# 5. Open in browser
http://localhost:3000
```



## 🌐 Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_API_URL=your_api_base_url
```





 
## 📝 Summary
 
**QurbaniHat** is a full-stack online platform for booking Qurbani livestock in Bangladesh, built for Eid ul-Adha.
Users can browse cows, goats, sheep, and buffalos with detailed profiles, then book directly through the site.
It also features a Top Breeds guide and an Islamic FAQ section on Qurbani procedures.
Secure authentication is handled via **Better Auth** with **Google OAuth** support.
Built with **Next.js**, **Tailwind CSS**, and **MongoDB**, the project reflects strong full-stack development and thoughtful, user-centric design.
 
---
 
*Made with ❤️ for Eid ul-Adha | QurbaniHat © 2025*