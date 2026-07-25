'use client';

interface Activity {
    id: number;
    action: string;
    time: string;
}

interface ActivityCardProps {
    activities?: Activity[];
    isDark: boolean;
}

export default function ActivityCard({
    activities,
    isDark,
}: ActivityCardProps) {

    const defaultActivities: Activity[] = [
        {
            id: 1,
            action: "Email sample uploaded",
            time: "2 mins ago",
        },
        {
            id: 2,
            action: "IOC extracted",
            time: "8 mins ago",
        },
        {
            id: 3,
            action: "Malicious domain identified",
            time: "15 mins ago",
        },
        {
            id: 4,
            action: "Timeline updated",
            time: "30 mins ago",
        },
    ];

    const data = activities && activities.length > 0
        ? activities
        : defaultActivities;

    return (
        <section
            style={{
                background: isDark ? "#1e293b" : "#ffffff",
                border: `1px solid ${isDark ? "#334155" : "#e5e7eb"}`,
                borderRadius: "12px",
                padding: "20px",
                boxShadow: isDark
                    ? "0 2px 8px rgba(0,0,0,0.35)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
            }}
        >
            <h2
                style={{
                    marginTop: 0,
                    marginBottom: "20px",
                }}
            >
                Recent Activity
            </h2>

            {data.map((activity) => (
                <div
                    key={activity.id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 0",
                        borderBottom: `1px solid ${
                            isDark ? "#334155" : "#e5e7eb"
                        }`,
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontWeight: 600,
                                marginBottom: "4px",
                            }}
                        >
                            {activity.action}
                        </div>

                        <div
                            style={{
                                fontSize: "13px",
                                color: isDark
                                    ? "#94a3b8"
                                    : "#64748b",
                            }}
                        >
                            {activity.time}
                        </div>
                    </div>

                    <div
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "#16a34a",
                        }}
                    />
                </div>
            ))}
        </section>
    );
}