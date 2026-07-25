'use client';

interface StatusCardProps {
    status: string;
    priority: string;
    isDark: boolean;
}

export default function StatusCard({
    status,
    priority,
    isDark,
}: StatusCardProps) {

    const getStatusColor = () => {
        switch (status.toLowerCase()) {
            case 'open':
                return '#2563eb';

            case 'in progress':
                return '#16a34a';

            case 'closed':
                return '#6b7280';

            case 'critical':
                return '#dc2626';

            default:
                return '#ca8a04';
        }
    };

    const getPriorityColor = () => {
        switch (priority.toLowerCase()) {
            case 'critical':
                return '#dc2626';

            case 'high':
                return '#ea580c';

            case 'medium':
                return '#ca8a04';

            case 'low':
                return '#16a34a';

            default:
                return '#64748b';
        }
    };

    return (
        <section
            style={{
                background: isDark ? '#1e293b' : '#ffffff',
                border: `1px solid ${isDark ? '#334155' : '#e5e7eb'}`,
                borderRadius: '12px',
                padding: '20px',
                boxShadow: isDark
                    ? '0 2px 8px rgba(0,0,0,0.35)'
                    : '0 2px 8px rgba(0,0,0,0.08)',
            }}
        >
            <h2
                style={{
                    marginTop: 0,
                    marginBottom: '20px',
                }}
            >
                Investigation Status
            </h2>

            <div
                style={{
                    marginBottom: '18px',
                }}
            >
                <div
                    style={{
                        fontSize: '13px',
                        marginBottom: '8px',
                        color: isDark ? '#94a3b8' : '#64748b',
                    }}
                >
                    Current Status
                </div>

                <div
                    style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        background: getStatusColor(),
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    {status}
                </div>
            </div>

            <div>
                <div
                    style={{
                        fontSize: '13px',
                        marginBottom: '8px',
                        color: isDark ? '#94a3b8' : '#64748b',
                    }}
                >
                    Priority
                </div>

                <div
                    style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        background: getPriorityColor(),
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    {priority}
                </div>
            </div>
        </section>
    );
}