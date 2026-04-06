🧾✨ Account Editor with Conditional Rendering - LWC 🚀
📖 Description

A Salesforce Lightning Web Component (LWC) that allows users to create and edit Account records using lightning-record-edit-form.

This project demonstrates how to build a dynamic form UI with conditional rendering, along with built-in form reset functionality and toast notifications.

💡 What This Project Covers

🔹 Using lightning-record-edit-form for standard CRUD operations
🔹 Handling picklist changes (onchange)
🔹 Conditional rendering using <template if:true>
🔹 Dynamically showing/hiding fields based on user input
🔹 Using type="reset" to clear form values
🔹 Displaying toast messages using ShowToastEvent

🌟 Key Features

✨ Dynamic UI based on field values
📊 Shows Industry field only when Type = Prospect
🔄 Instant form reset using standard reset behavior
🔔 Success toast notification after save
🎨 Clean UI built with Salesforce Lightning Design System (SLDS)

⚙️ How It Works

1️⃣ User selects a value in the Type field
2️⃣ onchange handler updates a tracked property
3️⃣ If value = Prospect → Industry field is displayed
4️⃣ User fills the form and clicks Save
5️⃣ Record is saved using standard form behavior
6️⃣ Success toast is shown
7️⃣ Clicking Clear resets all fields instantly

💥 Key Advantages

✔ No Apex required
✔ Uses standard Salesforce components
✔ Lightweight and easy to maintain
✔ Improves user experience with dynamic forms

📌 When to Use This

✔ Forms with dependent fields
✔ Dynamic UI requirements
✔ Quick implementation without backend logic

⚠️ Limitations

❌ Not suitable for complex business logic
❌ No multi-object transactions
❌ Limited control compared to Apex-driven solutions

🛠️ Tech Stack
Salesforce LWC
Lightning Data Service
SLDS (Salesforce Lightning Design System)
<img width="319" height="203" alt="1" src="https://github.com/user-attachments/assets/e61c519f-d376-4bf0-ab0c-1d4f1b6d49ba" />
<img width="315" height="203" alt="2" src="https://github.com/user-attachments/assets/bb3616a2-e1eb-466e-a26d-f29cea2b6f44" />
<img width="316" height="239" alt="3" src="https://github.com/user-attachments/assets/3486714c-4823-47b5-a345-0832fff988ab" />
