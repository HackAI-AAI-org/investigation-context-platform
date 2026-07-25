'use client';

const loading = false;
const error = false;

const investigation = {
    id: "INV-001",
    title: "Phishing Campaign Investigation",
    status: "In Progress",
    priority: "High",
    owner: "SOC Team",
    lastUpdated: "2026-07-26",
};

export const dynamic = 'force-dynamic';

import InvestigationSummary from '../../components/InvestigationSummary';
import StatusCard from '../../components/StatusCard';
import ActivityCard from '../../components/ActivityCard';
import QuickActions from '../../components/QuickActions';

interface Investigation {
    id: string;
    title: string;
    status: string;
    priority: string;
    owner: string;
    lastUpdated: string;
}

export default function InvestigationDashboard() {

const isDark = false;

const loading = false;
const error = false;

const investigation= {
    id: "INV-001",
    title: "Phishing Campaign Investigation",
    status: "In Progress",
    priority: "High",
    owner: "SOC Team",
    lastUpdated: "2026-07-26",
};

if (loading) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
                fontWeight: 600,
            }}
        >
            Loading Investigation...
        </div>
    );
}

if (error) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "12px",
            }}
        >
            <h2>Unable to Load Investigation</h2>

            <p>
                Please try again later.
            </p>
        </div>
    );
}

if (!investigation) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "12px",
            }}
        >
            <h2>No Investigation Found</h2>

            <p>
                Start a new investigation to begin.
            </p>
        </div>
    );
}
    return (
        <div
            style={{
                minHeight: '100vh',
                padding: '30px',
                background: isDark ? '#0f172a' : '#f8fafc',
                color: isDark ? '#f8fafc' : '#111827',
            }}
        >
            <h1
                style={{
                    marginTop: 0,
                    marginBottom: '30px',
                }}
            >
                Investigation Dashboard
            </h1>

            <div
                style={{
                    display: 'grid',
                    gap: '20px',
                }}
            >
                <InvestigationSummary
                    investigation={investigation}
                    isDark={isDark}
                />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '20px',
                    }}
                >
                    <StatusCard
                        status={investigation.status}
                        priority={investigation.priority}
                        isDark={isDark}
                    />

                    <ActivityCard
                        isDark={isDark}
                    />
                </div>

                <QuickActions
                    isDark={isDark}
                />
            </div>
        </div>
    );
}