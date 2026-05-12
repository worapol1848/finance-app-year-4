# Finance App - Smart Retirement & Exchange Rate Tracker

Finance App is a Spring Boot web application designed to help users plan their retirement by taking inflation into account. It also provides real-time currency exchange rates.

## 🚀 Features

- **Retirement Planning:** Calculate how much you need to save monthly to reach your retirement goals, adjusted for inflation.
- **Inflation Data Integration:** Uses official World Bank CPI (Consumer Price Index) data to provide accurate calculations for Thailand (2024).
- **Live Exchange Rates:** Fetches real-time exchange rates (THB to USD, EUR, JPY) using External API.
- **User Authentication:** Secure login and registration system.
- **Responsive UI:** Built with Thymeleaf and CSS for a clean user experience.

## 🛠️ Technology Stack

- **Backend:** Java 17, Spring Boot 3.5.3
- **Database:** PostgreSQL
- **Frontend:** Thymeleaf, CSS
- **Tools:** Maven, OpenCSV

## 📋 Prerequisites

1. **Java 17** or higher installed.
2. **PostgreSQL** installed and running.
3. **Maven** (included via `./mvnw`).

## ⚙️ Configuration

Before running the application, ensure your PostgreSQL database is configured correctly in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update # Set to 'update' to auto-create tables
```

## 🏃 How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run the application using Maven:

```bash
./mvnw spring-boot:run
```

4. Open your browser and go to `http://localhost:8080`

## 📊 Data Sources

- **Inflation Data:** World Bank CPI Data (included in `.csv` format).
- **Exchange Rates:** Powered by [ExchangeRate-API](https://www.exchangerate-api.com/).
