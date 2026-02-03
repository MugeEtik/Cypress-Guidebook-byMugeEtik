# Cypress Automation Guidebook 🚀

This project is a comprehensive reference guide for **Cypress UI Automation**. It covers fundamental commands, architectural terminology, and best practices for modern web testing.

# 🏗️ Project Structure & Terminology
I follow a strict hierarchical structure to ensure test maintainability:
- **Describe (Test Suite):** High-level categorization.
- **Context (Test Group):** Functional grouping of scenarios.
- **It (Test Case):** Individual test objectives.
- **Commands (Test Steps):** Granular actions (visit, click, type, etc.).

# 🛠️ Key Features Covered
- **Navigation:** Deep dive into `cy.visit()` and `cy.url()` validations.
- **Interactions:** Handling inputs, aliases (`as`), and various click types.
- **Assertions:** Chaining multiple validations using `.should()` and `.and()`.
- **Advanced Events:** Handling mouse events (`mouseover`, `mouseenter`) and scrolling.
- **Visual Evidence:** Automated screenshots for failed or specific test steps.

# 🚀 How to Run
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
