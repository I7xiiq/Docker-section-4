Here is the English version ready for your GitHub README:

---

## Section 4: Infrastructure & Services

In this project, **Docker** is used to link and run a set of essential services together in a single integrated environment to ensure application efficiency. Below is a breakdown of these tools and their role in the system:

* **PostgreSQL**
* **What it is:** A powerful, open-source object-relational database management system (RDBMS).
* **Role in the system:** Serves as the primary database for structured data. It guarantees strict data integrity and handles complex queries efficiently (such as user accounts and core system operations).


* **MongoDB**
* **What it is:** A popular NoSQL, document-oriented database.
* **Role in the system:** Used for storing unstructured or rapidly changing data. Its flexibility allows for quick modifications, making it ideal for handling large volumes of diverse data (such as logs or dynamic product data).


* **Redis**
* **What it is:** An open-source, in-memory data structure store.
* **Role in the system:** Acts as a caching layer. By storing frequently accessed data in fast memory (RAM), Redis significantly reduces load times and relieves pressure on the primary databases.


* **Nginx**
* **What it is:** A high-performance web server and reverse proxy.
* **Role in the system:** Sits at the front of the application to securely receive and route incoming traffic. It performs load balancing and serves static files efficiently, ensuring the application remains fast and highly available under heavy traffic.



---
