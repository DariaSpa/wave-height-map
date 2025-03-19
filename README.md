# Wave Height Map

This project is a web application that allows users to interact with a **Leaflet.js map** and retrieve **maximum wave height data** by clicking on different locations. The backend serves the wave height data, and the frontend visualizes it.

## Getting Started

### **Installation**

This project has two main parts: **frontend** (React) and **backend** (Node.js/Express).

#### **Frontend**

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at **[http://localhost:5173/](http://localhost:5173/)**.

#### **Backend**

```bash
cd backend
npm install
npm start
```

Ensure the backend is running before using the application.

---

## **Future Improvements**

**Loading Spinner** – Show a spinner when fetching data.  
**Better UI** – Improve design with better styles and animations.  
**Not Found Page** – Add a dedicated page when no data is found.  
**API Layer & State Management** – Introduce **Zustand** for better state handling.  
**Optimized Requests** – Create a separate **API layer** for handling requests.

---

## **Technical Interview Questions**

### 1. Highest wave height at (0.000, 0.000) on 2019-01-01

The data at this location returns -32767 for all times. This is \_FillValue, meaning the data is missing.

### 2. Interactive map for max wave height on click

- Completed, and the repository link is provided.
- The map lets users click on a location to see the maximum wave height.

#### 3. Finding the max wave height since 1950

Steps:
• The data has one file per day, so we load files one by one to avoid memory issues.
• For each request, extract hmax values for the requested coordinates (latitude, longitude).
• Ignore missing values (\_FillValue).
• Find the highest recorded wave at the requested location across all files.
• Save precomputed results in a JSON file or database for faster future queries.
• Challenges:
• Large dataset → Process files one by one instead of loading everything at once.
• Fast queries → Precompute max values and store them.
• Correct values → Apply scale factors and remove missing data.
