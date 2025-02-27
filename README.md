## **MovieAPI 🎮**  
A full-stack web application for managing and browsing movies, built with **React (Frontend)**, **Spring Boot (Backend)**, and **MongoDB (Database)**.

---

## **🛠 Tech Stack**  
### **Frontend:**  
- React  
- Axios (for API calls)  
- React Router  

### **Backend:**  
- Spring Boot  
- Spring Data MongoDB  
- Spring Security (Optional for authentication)  

### **Database:**  
- MongoDB  

---

## **🚀 Features**  
✅ Browse a list of movies  
✅ Add, update, and delete movie details  
✅ Fetch movie details dynamically from the backend  
✅ Responsive UI for a seamless user experience  
✅ RESTful API for easy integration  

---

## **💁️ Project Structure**  

```
MovieAPI/
│️—— backend/          # Spring Boot backend
│   ├— src/main/java/com/movieapi/
│   ├— src/main/resources/
│   ├— pom.xml       # Backend dependencies
│   └— .gitignore    
│
│️—— frontend/         # React frontend
│   ├— src/
│   ├— public/
│   ├— package.json  # Frontend dependencies
│   ├— .gitignore
│   └— README.md  
│
│️—— .gitignore        # Root .gitignore (optional)
│️—— README.md         # Project documentation
```

---

## **🛠 Setup Instructions**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/MovieAPI.git
cd MovieAPI
```

---

### **2️⃣ Backend Setup (Spring Boot)**  
#### **Prerequisites:**  
- Java 17+  
- Maven  
- MongoDB (running locally or via cloud service)  

#### **Steps to Run:**  
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
**API will be available at:** `http://localhost:8080/api/movies`

---

### **3️⃣ Frontend Setup (React)**  
#### **Prerequisites:**  
- Node.js (LTS version)  
- npm or yarn  

#### **Steps to Run:**  
```bash
cd frontend
npm install
npm start
```
**React App will run on:** `http://localhost:3000`

---

## **🔗 API Endpoints**  
| Method | Endpoint           | Description               |
|--------|-------------------|---------------------------|
| GET    | `/api/v1/movies`      | Fetch all movies          |
| GET    | `/api/v1/movies/{id}` | Fetch movie by ID         |
| POST    | `/api/v1/review` | Create a Review of the movie  |
| PUT   | `/api/v1/review/{id}` | Update the review |
| DELETE | `/api/v1/review/{id}` | Delete a movie            |

---

## **📌 Future Enhancements**  
- ✅ User authentication (JWT-based)  
- ✅ Search and filter movies  
- ✅ Deployment on **AWS/Heroku**  

---

## **🐟 License**  
This project is **MIT Licensed**. Feel free to use and modify!  

---

## **👨‍💻 Contributors**  
- **Raj Jada** – *Full-Stack Developer*  

Feel free to contribute! 🚀  

