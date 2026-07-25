export interface Investigation {
    id: string;
    title: string;
    description: string;
    severity: "Low" | "Medium" | "High" | "Critical";
    status: "Open" | "In Progress" | "Resolved";
    assignedTo: string;
    createdAt: string;
}

export const INVESTIGATIONS: Investigation[] = [
    {
        id: "INV-001",
        title: "Unauthorized Login Attempt",
        description: "Multiple failed login attempts detected from an unknown IP.",
        severity: "High",
        status: "Open",
        assignedTo: "Alice",
        createdAt: "2026-07-25",
    },
    {
        id: "INV-002",
        title: "Malware Detected",
        description: "Endpoint security detected suspicious executable behavior.",
        severity: "Critical",
        status: "In Progress",
        assignedTo: "Bob",
        createdAt: "2026-07-24",
    },
    {
        id: "INV-003",
        title: "Phishing Email",
        description: "Employee reported a phishing email targeting finance.",
        severity: "Medium",
        status: "Resolved",
        assignedTo: "Charlie",
        createdAt: "2026-07-23",
    },
];