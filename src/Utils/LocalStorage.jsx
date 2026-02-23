const employees = [
  {
    employees: [
      {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Prepare Report",
            description: "Prepare monthly sales report",
            date: "2026-01-10",
            category: "Reporting"
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Client Meeting",
            description: "Attend meeting with client",
            date: "2026-01-05",
            category: "Meeting"
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "Data Backup",
            description: "Backup system data",
            date: "2026-01-07",
            category: "IT"
          }
        ]
      },
      {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Design Banner",
            description: "Create banner for marketing",
            date: "2026-01-11",
            category: "Design"
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Logo Update",
            description: "Update company logo",
            date: "2026-01-04",
            category: "Design"
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: false,
            title: "Social Media Post",
            description: "Schedule Instagram post",
            date: "2026-01-09",
            category: "Marketing"
          }
        ]
      },
      {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Bug Fixing",
            description: "Fix login bug",
            date: "2026-01-12",
            category: "Development"
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Code Review",
            description: "Review teammate code",
            date: "2026-01-06",
            category: "Development"
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "API Integration",
            description: "Integrate payment API",
            date: "2026-01-08",
            category: "Backend"
          }
        ]
      },
      {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Inventory Check",
            description: "Check warehouse inventory",
            date: "2026-01-13",
            category: "Operations"
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Supplier Call",
            description: "Call supplier for updates",
            date: "2026-01-03",
            category: "Operations"
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: false,
            title: "Stock Entry",
            description: "Update stock records",
            date: "2026-01-09",
            category: "Inventory"
          }
        ]
      },
      {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Customer Support",
            description: "Resolve customer complaints",
            date: "2026-01-14",
            category: "Support"
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Ticket Closing",
            description: "Close resolved tickets",
            date: "2026-01-02",
            category: "Support"
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "Email Follow-up",
            description: "Follow up with customers",
            date: "2026-01-08",
            category: "Communication"
          }
        ]
      }
    ]
  }
];

const admin = [
  {
    admin: {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  }
];

export const setLocalStorage = () => {
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin', JSON.stringify(admin));

}
export const getLocalStorage = () => {
  const employees=JSON.parse(localStorage.getItem('employees'));
  const admin=JSON.parse(localStorage.getItem('admin'));
  return{employees,admin};
}
